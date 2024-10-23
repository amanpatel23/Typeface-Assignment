import { useContext } from "react";
import HomeChatCard from "../components/HomeChatCard";
import { IoAdd } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../contexts/appContext";

function Home() {
  const navigate = useNavigate();

  const context = useContext(AppContext);
  if (!context) return <div>Loading...</div>;

  const { yoContacts } = context;

  return (
    <div className="">
      <div className="text-3xl font-light py-2 px-4 text-[#075e54]">
        YoChat...
      </div>
      <div className="mt-4 px-4">
        {yoContacts
          .filter((currContact) => currContact.chats.length > 0)
          .map((currContact) => (
            <div
              className="mb-4 cursor-pointer"
              key={currContact.id}
              onClick={() => navigate(`/chat/${currContact.id}`)}
            >
              <HomeChatCard id={currContact.id} name={currContact.name} />
            </div>
          ))}
      </div>
      <div className="absolute bottom-4 right-4">
        <div
          className="bg-[#075e54] p-4 rounded-full cursor-pointer"
          onClick={() => navigate("/contacts")}
        >
          <IoAdd className="text-4xl text-white" />
        </div>
      </div>
    </div>
  );
}

export default Home;
