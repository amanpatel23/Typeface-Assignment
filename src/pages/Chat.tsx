import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../contexts/appContext";
import ChatMessageCard from "../components/ChatMessageCard";
import { IoSend } from "react-icons/io5";
import { FaHome } from "react-icons/fa";

interface ChatType {
  timestamp: string;
  message: string;
}

function Chat() {
  const context = useContext(AppContext);
  if (!context) return <div>Loading...</div>;

  const { yoContacts, addMessage } = context;

  const [userId, setUserId] = useState<number | null>(null);
  const [name, setName] = useState<string | null>(null);
  const [chats, setChats] = useState<ChatType[]>([]);
  const [inputText, setInputText] = useState("");

  const params = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const userId = Number(params.id);
    setUserId(userId);
    const contact = yoContacts.find((currContact) => currContact.id === userId);
    if (contact) {
      setName(contact.name);
      setChats(contact.chats);
    } else {
      setName("");
      setChats([]);
    }
  }, []);

  function getCurrentTime() {
    const now = new Date();

    const day = now.getDate();
    const month = now.toLocaleString("en-US", { month: "short" });
    const year = now.getFullYear();

    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");

    return `${day} ${month} ${year} - ${hours}:${minutes}`;
  }

  function onSubmitHandler() {
    if (inputText.trim().length === 0 || userId === null) return;
    const messageObj = {
      timestamp: getCurrentTime(),
      message: inputText.trim(),
    };

    setInputText("");

    addMessage(userId, messageObj);
    setChats((prevChats) => [...prevChats, messageObj]);
  }

  return (
    <div className="p-4 h-full">
      <div className="flex items-center justify-between text-[#075e54] mb-2">
        <div className="text-3xl font-light py-2 px-4 ">{name}</div>
        <div
          className="cursor-pointer bg-white p-2 rounded-full"
          onClick={() => navigate("/")}
        >
          <FaHome className="text-2xl" />
        </div>
      </div>
      <div className="h-[82vh] overflow-scroll">
        {chats.map((currChat, index) => (
          <div key={index} className="mb-4 flex justify-end">
            <ChatMessageCard
              message={currChat.message}
              timestamp={currChat.timestamp}
            />
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2 sticky w-full">
        <input
          type="text"
          value={inputText}
          onChange={(event) => setInputText(event.target.value)}
          className="flex-1 text-xl px-4 py-2 rounded-[7px] outline-none border-none"
        />
        <div
          className="p-2 bg-[#25d366] rounded-full cursor-pointer"
          onClick={onSubmitHandler}
        >
          <IoSend className="text-2xl text-white" />
        </div>
      </div>
    </div>
  );
}

export default Chat;
