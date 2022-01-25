import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';
import { Movie } from '../model/model';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  displayedColumns = ['id','nombre','director','imagen','actions'];
  moviesData = new MatTableDataSource<Movie>();
  constructor(
    private moviesSvc: MoviesService,
    private router: Router,
    private commonSvc: CommonService
  ) {
    this.moviesSvc.getMovies().subscribe((response) => {
      this.moviesData.data = response;
    });
  }

  ngOnInit(): void {
  }

  edit(id: string): void {
    this.router.navigate(['/movies-detail',id]);
  }

  delete(id: string): void {
    this.commonSvc.loading.next(true);
    this.moviesSvc.deleteMovie(id).subscribe(() => {
      this.commonSvc.loading.next(false);
      this.moviesSvc.getMovies().subscribe((response) => {
        this.moviesData.data = response;
      });
    });
  }

}
