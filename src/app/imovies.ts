import { IMovie } from "./imovie";

export interface IMovies {
  dates: [],
  page: number,
  results: IMovie[],
  total_pages: number,
  total_results: number
}
