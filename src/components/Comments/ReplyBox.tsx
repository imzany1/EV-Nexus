
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

interface ReplyBoxProps {
  commentId: string;
  onReplyAdded?: () => void;
  onCancel?: () => void;
}

const ReplyBox = ({ commentId, onReplyAdded, onCancel }: ReplyBoxProps) => {
  const [reply, setReply] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!reply.trim()) return;
    
    setIsLoading(true);
    
    try {
      // API call would go here
      console.log(`Posting reply to comment ${commentId}: ${reply}`);
      
      toast({
        title: "Reply posted",
        description: "Your reply has been added successfully.",
      });
      
      setReply("");
      
      if (onReplyAdded) {
        onReplyAdded();
      }
    } catch (error) {
      console.error("Reply error:", error);
      toast({
        variant: "destructive",
        title: "Failed to post reply",
        description: "Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex gap-3 pl-10">
      <Avatar className="h-6 w-6">
        <AvatarImage src="/placeholder.svg" alt="User" />
        <AvatarFallback>U</AvatarFallback>
      </Avatar>
      <form onSubmit={handleSubmit} className="flex-1 space-y-3">
        <Textarea
          placeholder="Add a reply..."
          value={reply}
          onChange={(e) => setReply(e.target.value)}
          className="min-h-20 text-sm resize-none"
        />
        <div className="flex justify-end gap-2">
          <Button type="button" variant="ghost" size="sm" onClick={onCancel}>
            Cancel
          </Button>
          <Button type="submit" size="sm" disabled={!reply.trim() || isLoading}>
            {isLoading ? "Posting..." : "Reply"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ReplyBox;
