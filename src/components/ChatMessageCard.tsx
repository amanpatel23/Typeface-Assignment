interface ChatMessageCardProps {
  message: string;
  timestamp: string;
}

function ChatMessageCard({ message, timestamp }: ChatMessageCardProps) {
  return (
    <div className="">
      <div className="bg-[#25d366] w-[350px] px-4 py-6 rounded-[12px] text-wrap break-words">
        {message}
      </div>
      <div className="text-right text-sm">{timestamp}</div>
    </div>
  );
}

export default ChatMessageCard;
