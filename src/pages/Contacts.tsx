import { useContext } from "react";
import { AppContext } from "../contexts/appContext";
import ContactCard from "../components/ContactCard";
import { useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";

function Contacts() {
  const context = useContext(AppContext);
  if (!context) return <div>Loading...</div>;

  const navigate = useNavigate();
  const { yoContacts } = context;

  return (
    <div className="px-4">
      <div className="flex items-center justify-between text-[#075e54] mb-2">
        <div className="text-3xl font-light py-2 px-4 ">Contacts...</div>
        <div
          className="cursor-pointer bg-white p-2 rounded-full"
          onClick={() => navigate("/")}
        >
          <FaHome className="text-2xl" />
        </div>
      </div>
      {yoContacts.map((currContact) => (
        <ContactCard
          key={currContact.id}
          name={currContact.name}
          id={currContact.id}
        />
      ))}
    </div>
  );
}

export default Contacts;
