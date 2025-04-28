
import { useState } from "react";
import { Star } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface RatingStarsProps {
  rating: number;
  editable?: boolean;
  resourceId?: string;
  onRatingChange?: (rating: number) => void;
}

const RatingStars = ({
  rating,
  editable = false,
  resourceId,
  onRatingChange,
}: RatingStarsProps) => {
  const [hoverRating, setHoverRating] = useState(0);
  const [currentRating, setCurrentRating] = useState(rating);
  const { toast } = useToast();

  const handleRate = async (value: number) => {
    if (!editable) return;
    
    try {
      setCurrentRating(value);
      
      if (onRatingChange) {
        onRatingChange(value);
      }
      
      // API call would go here
      console.log(`Rating resource ${resourceId} with ${value} stars`);
      
      toast({
        title: "Rating submitted",
        description: `You rated this resource ${value} stars.`,
      });
    } catch (error) {
      console.error("Rating error:", error);
      toast({
        variant: "destructive",
        title: "Rating failed",
        description: "Could not submit your rating. Please try again.",
      });
    }
  };

  return (
    <div 
      className="flex items-center"
      onMouseLeave={() => editable && setHoverRating(0)}
    >
      {[1, 2, 3, 4, 5].map((star) => (
        <div
          key={star}
          className={`cursor-${editable ? "pointer" : "default"}`}
          onMouseEnter={() => editable && setHoverRating(star)}
          onClick={() => editable && handleRate(star)}
        >
          <Star
            className={`h-4 w-4 ${
              (hoverRating || currentRating) >= star
                ? "fill-yellow-400 text-yellow-400"
                : "text-gray-300"
            }`}
          />
        </div>
      ))}
      <span className="ml-2 text-xs text-muted-foreground">
        {currentRating.toFixed(1)}
      </span>
    </div>
  );
};

export default RatingStars;
