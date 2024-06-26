import { useEffect, useRef } from "react";
import ChatBubble from "./chat-bubble";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { useConversationStore } from "@/store/chat-store";

const MessageContainer = () => {
  const { selectedConversation } = useConversationStore();
  const messages = useQuery(api.messages.getMessages, {
    conversation: selectedConversation!._id,
  });
  const me = useQuery(api.users.getMe);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="relative p-3 flex-1 overflow-auto h-full bg-chat-tile-light dark:bg-chat-tile-dark" ref={containerRef}>
      <div className="mx-0 sm:mx-12 md:mx-12 flex flex-col gap-3 h-full">
        {messages?.map((msg, idx) => (
          <div key={msg._id}>
            <ChatBubble
              message={msg}
              me={me}
              previousMessage={idx > 0 ? messages[idx - 1] : undefined}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MessageContainer;
