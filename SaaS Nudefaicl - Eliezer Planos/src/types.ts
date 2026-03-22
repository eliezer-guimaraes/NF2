export interface ImageData {
  id: number;
  title: string;
  description: string;
  before: string;
  after: string;
  tags: string[];
}

export interface VideoData {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  video: string;
  prompt: string;
}