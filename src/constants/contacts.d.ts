export interface Chat {
  message: string;
  timestamp: string;
}

export interface Contact {
  id: number;
  name: string;
  chats: Chat[];
}

export const contacts: Contact[];
