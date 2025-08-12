export interface VideoSeriesContent {
  id: string;
  title: string;
  description: string;
  youtubeId: string;
  episodeNumber: number;
  duration: string;
  publishedDate: string;
}

export const videoSeriesData: VideoSeriesContent[] = [
  {
    id: "episode-1",
    title: "Welcome to Our Journey",
    description: "Join us as we explore the foundations of wellness and discover what it means to live a truly balanced life. This introductory episode sets the stage for our comprehensive video series.",
    youtubeId: "gOiIN6jx_tM",
    episodeNumber: 1,
    duration: "12:34",
    publishedDate: "2024-01-15"
  }
];

export const videoSeriesInfo = {
  title: "Video Series",
  subtitle: "Watch our curated wellness journey",
  description: "Dive deeper into wellness concepts with our video series. Each episode offers practical insights and inspiring stories to support your journey to better health and happiness."
};