import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Play, Clock } from "lucide-react";
import type { VideoSeriesContent } from "@/data/videoSeries";

interface VideoCardProps {
  video: VideoSeriesContent;
}

export const VideoCard = ({ video }: VideoCardProps) => {
  const embedUrl = `https://www.youtube.com/embed/${video.youtubeId}`;
  const watchUrl = `https://www.youtube.com/watch?v=${video.youtubeId}`;

  return (
    <div className="group">
      <div className="relative aspect-video bg-muted rounded-xl overflow-hidden mb-6">
        <iframe
          src={embedUrl}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="h-full w-full border-0"
          loading="lazy"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-background/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-muted-foreground">
            {video.episodeNumber.toString().padStart(2, '0')}
          </span>
        </div>
      </div>
      
      <div className="space-y-3">
        <h3 className="text-xl font-light leading-tight text-foreground group-hover:text-primary transition-colors duration-300">
          {video.title}
        </h3>
        
        <p className="text-muted-foreground font-light leading-relaxed text-sm">
          {video.description}
        </p>
        
        <div className="flex items-center justify-between pt-2">
          <span className="text-xs text-muted-foreground font-light">
            {video.duration}
          </span>
          
          <a 
            href={watchUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-300 flex items-center gap-1"
          >
            Watch on YouTube
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
};