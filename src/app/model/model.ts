export interface LoginRequest{
  email: string,
  password: string
}

export interface LoginResponse{
  token: string;
}

export interface UsersResponde{
  data: User[];
}

export interface SigleDatResponse{
  data: User;
}

export interface User{
  id: number,
  email: string,
  first_name: string,
  last_name: string,
  avatar: string
}

export interface Movie{
  id?: string,
  nombre: string,
  director: string,
  imagen: string
}
