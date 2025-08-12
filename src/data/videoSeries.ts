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
  },
  {
    id: "episode-3",
    title: "You're Never Too Old to Try Something New",
    description: "Break free from the limiting belief that age defines your possibilities. Discover how to embrace new adventures, learn new skills, and pursue dreams at any stage of life. Your rebellious journey is just beginning!",
    youtubeId: "lk-PF0XDJfE",
    episodeNumber: 3,
    duration: "4:42",
    publishedDate: "2024-01-29"
  },
  {
    id: "episode-4",
    title: "Rebel Against Processed Pet Food: Healthier Dogs Through Natural Nutrition",
    description: "Challenge the pet food industry's processed offerings and discover how feeding your dog unprocessed, natural foods can dramatically improve their health and vitality. Just like rebellious aging for humans, it's time to rebel against conventional pet care and give your furry companion the nutrition they deserve.",
    youtubeId: "1c010CdjsIc",
    episodeNumber: 4,
    duration: "3:48",
    publishedDate: "2024-02-05"
  },
  {
    id: "episode-5",
    title: "Nutrition Rebellion: How Healthy Eating Transforms Your Body (And Gets Easier)",
    description: "Discover how embracing healthy nutrition becomes your secret weapon for rebellious aging. Learn why nourishing your body with whole foods isn't just good for you—it's a complete game-changer that gets easier and more natural once you fully commit. This episode reveals how proper nutrition helps your body heal, energize, and thrive, proving that taking control of what you eat is the ultimate act of rebellion against aging.",
    youtubeId: "WgYUybi8lhQ",
    episodeNumber: 5,
    duration: "15:28",
    publishedDate: "2024-08-12"
  }
];

export const videoSeriesInfo = {
  title: "Video Series",
  subtitle: "Your guide to rebellious aging",
  description: "Join our empowering video journey that challenges everything you thought you knew about aging. Learn to live boldly, age unapologetically, and thrive after 50 with confidence, style, and vibrant health."
};