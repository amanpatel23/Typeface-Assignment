import { createContext, ReactNode, useState } from "react";
import { contacts } from "../constants/contacts";

interface AppContextType {
  yoContacts: YoContact[];
  addMessage: (id: number, message: Chat) => void;
  deleteChat: (id: number) => void;
}

const AppContext = createContext<AppContextType | null>(null);

interface AppProviderProps {
  children: ReactNode;
}

interface Chat {
  timestamp: string;
  message: string;
}

interface YoContact {
  id: number;
  name: string;
  chats: Chat[];
}

function AppProvider({ children }: AppProviderProps) {
  const [yoContacts, setYoContacts] = useState<YoContact[]>(contacts);

  function addMessage(id: number, message: Chat) {
    setYoContacts((prevState) =>
      prevState.map((currObj) => {
        if (currObj.id === id) {
          const updatedChats = [...currObj.chats, message];

          return { ...currObj, chats: updatedChats };
        } else return currObj;
      })
    );
  }

  function deleteChat(id: number) {
    setYoContacts((prevState) =>
      prevState.map((currObj) => {
        if (currObj.id === id) {
          return { ...currObj, chats: [] };
        } else return currObj;
      })
    );
  }

  return (
    <AppContext.Provider value={{ yoContacts, addMessage, deleteChat }}>
      {children}
    </AppContext.Provider>
  );
}

export { AppContext, AppProvider };
