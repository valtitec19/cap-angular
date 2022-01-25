import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from '../common.service';
import { Movie } from '../model/model';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  formMovie = new FormGroup({});
  id?: string;
  movie?: Movie;
  constructor(
    private formBuilder: FormBuilder,
    private movieSvc: MoviesService,
    private commonSvc: CommonService,
    private router: Router,
    private route: ActivatedRoute
  ) {

    this.formMovie = this.formBuilder.group({
      nombre: ['',[Validators.required]],
      director: ['',[Validators.required]],
      imagen: ['',[Validators.required]],
    });

    this.route.params.subscribe((parameters) => {

      if(parameters['id']){
        this.id = parameters['id'];

        this.commonSvc.loading.next(true);
        this.movieSvc.getSingleMovie(this.id!).subscribe((response) => {
          this.movie = response;
          this.formMovie.patchValue(response);
          this.commonSvc.loading.next(false);
        });
      }
    });
  }

  ngOnInit(): void {
  }

  save(): void{
    this.commonSvc.loading.next(true);
    const movie = this.formMovie.value as Movie;

    if(this.id){
      this.movieSvc.editMovie(this.id,movie).subscribe((response) => {
        this.onSuccess();
      });

    }else{
      this.movieSvc.saveMovie(movie).subscribe(() => {
      this.onSuccess();
    });
    }
  }

  onSuccess(): void{
    this.commonSvc.loading.next(false);
    this.router.navigate(['/movies']);
  }

}
