export interface Project {
  id: number;
  title: string;
  year: number;
  short_desc: string;
  description: string;
  key_features: Array<string>;
  technical_desc: string;
  task: string;
  language: Array<string>;
  tools: Array<string>;
  client: string;
  image_head: string,
  images: Array<string>;
}