export interface ArticleResponse {
  success: boolean;
  message: string;
  code:    number;
  data:    Articles[];
}

export interface Articles {
  id:                     string;
  slug:                   string;
  title:                  string;
  summary:                string;
  featured_image:         string;
  featured_image_caption: string;
  read_time:              string;
}