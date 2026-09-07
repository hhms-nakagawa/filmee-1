// タグの型
export interface Tag {
  id: string;
  name: string;
}

// レビューの型
export interface Review {
  id: number;
  tmdb_id: number;
  rating: number;
  comment: string;
  tags: Tag[];
}