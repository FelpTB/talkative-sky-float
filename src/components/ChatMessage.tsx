
import { cn } from "@/lib/utils";

interface ChatMessageProps {
  message: string;
  isUser: boolean;
}

export function ChatMessage({ message, isUser }: ChatMessageProps) {
  return (
    <div
      className={cn(
        "message-bubble message-enter",
        isUser ? "user-message" : "bot-message"
      )}
    >
      {message}
    </div>
  );
}
