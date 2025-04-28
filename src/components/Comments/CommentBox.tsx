
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

interface CommentBoxProps {
  resourceId: string;
  onCommentAdded?: () => void;
}

const CommentBox = ({ resourceId, onCommentAdded }: CommentBoxProps) => {
  const [comment, setComment] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!comment.trim()) return;
    
    setIsLoading(true);
    
    try {
      // API call would go here
      console.log(`Posting comment to resource ${resourceId}: ${comment}`);
      
      toast({
        title: "Comment posted",
        description: "Your comment has been added successfully.",
      });
      
      setComment("");
      
      if (onCommentAdded) {
        onCommentAdded();
      }
    } catch (error) {
      console.error("Comment error:", error);
      toast({
        variant: "destructive",
        title: "Failed to post comment",
        description: "Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex gap-3">
      <Avatar className="h-8 w-8">
        <AvatarImage src="/placeholder.svg" alt="User" />
        <AvatarFallback>U</AvatarFallback>
      </Avatar>
      <form onSubmit={handleSubmit} className="flex-1 space-y-3">
        <Textarea
          placeholder="Add a comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="min-h-24 resize-none"
        />
        <div className="flex justify-end">
          <Button type="submit" disabled={!comment.trim() || isLoading}>
            {isLoading ? "Posting..." : "Post Comment"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CommentBox;
