import { useContext } from "react";
import { FaRegUser } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { AppContext } from "../contexts/appContext";

interface HomeChatCardProps {
  id: number;
  name: string;
}

function HomeChatCard({ id, name }: HomeChatCardProps) {
  const context = useContext(AppContext);
  if (!context) return <div>Loading...</div>;

  const { deleteChat } = context;

  function deleteChatHandler(event: React.MouseEvent<HTMLDivElement>) {
    event.stopPropagation();
    deleteChat(id);
  }

  return (
    <div className="relative group bg-[#25d366] text-black px-4 py-6 rounded-[12px]">
      <div className="flex items-center gap-x-4">
        <div className="bg-white rounded-full p-2">
          <FaRegUser className="text-2xl" />
        </div>
        <div>
          <div className="text-lg font-medium">{name}</div>
          {/* <div className="font-light">Hi, how are you?</div> */}
        </div>
      </div>
      <div
        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full hidden group-hover:block"
        onClick={deleteChatHandler}
      >
        <RiDeleteBin6Fill className="text-2xl text-red-700" />
      </div>
    </div>
  );
}

export default HomeChatCard;
