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
    title: "Introduction to Rebellious Aging",
    description: "Challenge ageist stereotypes and embrace bold living after 50. Discover what it means to live rebelliously and unapologetically, breaking free from society's expectations about aging.",
    youtubeId: "gOiIN6jx_tM",
    episodeNumber: 1,
    duration: "12:34",
    publishedDate: "2024-01-15"
  },
  {
    id: "episode-2",
    title: "The Three Pillars of Rebellious Aging",
    description: "Explore the foundation of rebellious living through our three core pillars: Confidence (A Rebel's Superpower), Style (Dazzle), and Health (Nourish to Flourish). Learn how to thrive boldly in every aspect of life.",
    youtubeId: "Gj6QCF-1uaI",
    episodeNumber: 2,
    duration: "7:36",
    publishedDate: "2024-01-22"
  }
];

export const videoSeriesInfo = {
  title: "Video Series",
  subtitle: "Your guide to rebellious aging",
  description: "Join our empowering video journey that challenges everything you thought you knew about aging. Learn to live boldly, age unapologetically, and thrive after 50 with confidence, style, and vibrant health."
};