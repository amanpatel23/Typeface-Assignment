import { FaRegUser } from "react-icons/fa";

function HomeChatCard() {
  return (
    <div className="bg-[#25d366] text-black px-4 py-6 rounded-[12px] flex items-center gap-x-4">
      <div className="bg-white rounded-full p-2">
        <FaRegUser className="text-2xl" />
      </div>
      <div>
        <div className="text-lg font-medium">Rishi</div>
        <div className="font-light">Hi, how are you?</div>
      </div>
    </div>
  );
}

export default HomeChatCard;
