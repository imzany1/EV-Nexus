
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, ExternalLink, Star, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import RatingStars from "./RatingStars";

interface ResourceCardProps {
  id: string;
  title: string;
  description: string;
  type: string;
  tags: string[];
  author: {
    name: string;
    id: string;
  };
  rating: number;
  commentCount: number;
  downloadCount: number;
}

const ResourceCard = ({
  id,
  title,
  description,
  type,
  tags,
  author,
  rating,
  commentCount,
  downloadCount,
}: ResourceCardProps) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <CardHeader className="p-4 pb-2">
        <div className="flex justify-between items-start">
          <div>
            <Link to={`/resource/${id}`} className="font-medium hover:text-primary hover:underline text-lg">
              {title}
            </Link>
            <div className="text-sm text-muted-foreground">
              By{" "}
              <Link to={`/profile/${author.id}`} className="hover:underline">
                {author.name}
              </Link>
            </div>
          </div>
          <Badge variant="secondary" className="capitalize">
            {type}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-2">
        <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
        <div className="mt-3 flex flex-wrap gap-1">
          {tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <RatingStars rating={rating} />
          <div className="flex items-center gap-1 text-muted-foreground text-xs">
            <MessageSquare className="h-3 w-3" />
            <span>{commentCount}</span>
          </div>
          <div className="flex items-center gap-1 text-muted-foreground text-xs">
            <Download className="h-3 w-3" />
            <span>{downloadCount}</span>
          </div>
        </div>
        <div className="flex gap-2">
          <Button size="sm" variant="ghost">
            <Star className="h-4 w-4 mr-1" />
            Save
          </Button>
          <Link to={`/resource/${id}`}>
            <Button size="sm">
              <ExternalLink className="h-4 w-4 mr-1" />
              View
            </Button>
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ResourceCard;
