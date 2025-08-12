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
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1">
      <div className="relative">
        <div className="aspect-video bg-muted">
          <iframe
            src={embedUrl}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="h-full w-full border-0"
            loading="lazy"
          />
        </div>
        <Badge 
          variant="secondary" 
          className="absolute top-3 left-3 bg-background/90 backdrop-blur-sm"
        >
          <Play className="w-3 h-3 mr-1" />
          Episode {video.episodeNumber}
        </Badge>
        <Badge 
          variant="outline" 
          className="absolute top-3 right-3 bg-background/90 backdrop-blur-sm"
        >
          <Clock className="w-3 h-3 mr-1" />
          {video.duration}
        </Badge>
      </div>
      
      <CardHeader className="space-y-2">
        <CardTitle className="text-xl font-semibold leading-tight group-hover:text-primary transition-colors">
          {video.title}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-muted-foreground leading-relaxed">
          {video.description}
        </p>
        
        <div className="flex items-center justify-between pt-2">
          <span className="text-sm text-muted-foreground">
            {new Date(video.publishedDate).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </span>
          
          <Button 
            variant="outline" 
            size="sm" 
            asChild
            className="hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <a 
              href={watchUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              Watch on YouTube
              <ExternalLink className="w-3 h-3" />
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};