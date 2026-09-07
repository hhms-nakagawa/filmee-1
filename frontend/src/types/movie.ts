// 映画の型
export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  release_date: string;
  vote_average: number;
  genre_ids: number[];
}

// ジャンルの型
export interface Genre {
  id: number;
  name: string;
}