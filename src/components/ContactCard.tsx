import { FaRegUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

interface ContactCardProps {
  id: number;
  name: String;
}

function ContactCard({ id, name }: ContactCardProps) {
  const navigate = useNavigate();
  return (
    <div
      className="px-4 py-6 flex bg-[#25d366] mb-2 rounded-[12px] gap-x-2 items-center cursor-pointer"
      onClick={() => navigate(`/chat/${id}`)}
    >
      <div className="bg-white p-4 rounded-full">
        <FaRegUser className="text-2xl" />
      </div>
      <div>{name}</div>
    </div>
  );
}

export default ContactCard;
