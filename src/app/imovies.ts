import { IDateRange } from "./idate-range";
import { IMovie } from "./imovie";

export interface IMovies {
  dates: IDateRange[],
  page: number,
  results: IMovie[],
  total_pages: number,
  total_results: number
}
