import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ThumbsUp, MessageSquare, MoreVertical } from "lucide-react";
import ReplyBox from "./ReplyBox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useToast } from "@/components/ui/use-toast";

interface Reply {
  id: string;
  content: string;
  author: {
    name: string;
    avatar?: string;
    id: string;
  };
  createdAt: string;
  likes: number;
}

interface CommentProps {
  id: string;
  content: string;
  author: {
    name: string;
    avatar?: string;
    id: string;
  };
  createdAt: string;
  likes: number;
  replies: Reply[];
}

const CommentThread = ({
  id,
  content,
  author,
  createdAt,
  likes,
  replies,
}: CommentProps) => {
  const [isReplyOpen, setIsReplyOpen] = useState(false);
  const [showReplies, setShowReplies] = useState(false);
  const [commentLikes, setCommentLikes] = useState(likes);
  const [hasLiked, setHasLiked] = useState(false);
  const { toast } = useToast();

  const handleLike = () => {
    if (!hasLiked) {
      setCommentLikes(commentLikes + 1);
      setHasLiked(true);
    } else {
      setCommentLikes(commentLikes - 1);
      setHasLiked(false);
    }
    
    console.log(`${hasLiked ? 'Unlike' : 'Like'} comment ${id}`);
  };

  const handleReplyAdded = () => {
    setIsReplyOpen(false);
    setShowReplies(true);
    toast({
      title: "Reply posted",
      description: "Your reply has been added successfully.",
    });
  };

  return (
    <div>
      <div className="flex gap-3">
        <Avatar className="h-8 w-8">
          <AvatarImage src={author.avatar || "/placeholder.svg"} alt={author.name} />
          <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="bg-muted p-3 rounded-lg">
            <div className="flex justify-between items-start mb-1">
              <div className="font-medium text-sm">{author.name}</div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Report</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <p className="text-sm">{content}</p>
          </div>
          <div className="flex items-center gap-4 mt-1 text-xs text-muted-foreground">
            <span>{new Date(createdAt).toLocaleDateString()}</span>
            <Button
              variant="ghost"
              size="sm"
              className="h-6 px-2 text-xs gap-1"
              onClick={handleLike}
            >
              <ThumbsUp
                className={`h-3 w-3 ${hasLiked ? "fill-primary text-primary" : ""}`}
              />
              {commentLikes}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="h-6 px-2 text-xs gap-1"
              onClick={() => setIsReplyOpen(!isReplyOpen)}
            >
              <MessageSquare className="h-3 w-3" />
              Reply
            </Button>
          </div>
          
          {isReplyOpen && (
            <div className="mt-3">
              <ReplyBox
                commentId={id}
                onReplyAdded={handleReplyAdded}
                onCancel={() => setIsReplyOpen(false)}
              />
            </div>
          )}
          
          {replies.length > 0 && (
            <div className="mt-2">
              {!showReplies ? (
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-6 px-2 text-xs"
                  onClick={() => setShowReplies(true)}
                >
                  Show {replies.length} {replies.length === 1 ? "reply" : "replies"}
                </Button>
              ) : (
                <>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-6 px-2 text-xs"
                    onClick={() => setShowReplies(false)}
                  >
                    Hide replies
                  </Button>
                  <div className="pl-6 mt-2 space-y-3 border-l border-border">
                    {replies.map((reply) => (
                      <div key={reply.id} className="flex gap-2">
                        <Avatar className="h-6 w-6">
                          <AvatarImage
                            src={reply.author.avatar || "/placeholder.svg"}
                            alt={reply.author.name}
                          />
                          <AvatarFallback>{reply.author.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="bg-muted p-2 rounded-lg">
                            <div className="font-medium text-xs mb-1">{reply.author.name}</div>
                            <p className="text-xs">{reply.content}</p>
                          </div>
                          <div className="flex items-center gap-3 mt-1 text-xs text-muted-foreground">
                            <span>{new Date(reply.createdAt).toLocaleDateString()}</span>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-5 px-1 text-xs gap-1"
                            >
                              <ThumbsUp className="h-3 w-3" />
                              {reply.likes}
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CommentThread;
