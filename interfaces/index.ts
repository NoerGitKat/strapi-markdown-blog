export interface IPost {
  id: string;
  attributes: {
    Title: string;
    Description: string;
    Content: string;
    Slug: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
  };
}
