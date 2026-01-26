"use client";
import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { io, Socket } from "socket.io-client";
import { useToast } from "@/components/ui/use-toast";

export type User = {
  id: string;
  socketId: string;
  name: string;
  avatar: string;
  color: string;
  isOnline: boolean;
  posX?: number;
  posY?: number;
  location: string;
  flag: string;
  lastSeen: string | null;
  createdAt: string;
};

export type Message = {
  id: number;
  sessionId: string;
  username: string;
  avatar: string;
  color?: string;
  flag: string;
  content: string;
  createdAt: string | Date;
};

type SocketContextType = {
  socket: Socket | null;
  users: User[];
  setUsers: Dispatch<SetStateAction<User[]>>;
  msgs: Message[];
  isCurrentUser: boolean;
};

const INITIAL_STATE: SocketContextType = {
  socket: null,
  users: [],
  setUsers: () => {},
  msgs: [],
  isCurrentUser: false,
};

export const SocketContext = createContext<SocketContextType>(INITIAL_STATE);

const SESSION_ID_KEY = "portfolio-site-session-id";

const SocketContextProvider = ({ children }: { children: ReactNode }) => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [users, setUsers] = useState<User[]>([]);
  const [msgs, setMsgs] = useState<Message[]>([]);
  const { toast } = useToast();

  useEffect(() => {
  if (!process.env.NEXT_PUBLIC_WS_URL) return;

  const socket = io(process.env.NEXT_PUBLIC_WS_URL, {
    auth: {
      sessionId: localStorage.getItem(SESSION_ID_KEY),
    },
  });

  setSocket(socket);

  socket.on("session", ({ sessionId }) => {
    localStorage.setItem(SESSION_ID_KEY, sessionId);
  });

  // 🟢 initial messages (only once)
  socket.on("msgs-receive-init", (initialMsgs: Message[]) => {
    setMsgs((prev) => (prev.length === 0 ? initialMsgs : prev));
  });

  // 🟢 realtime messages (THIS FIXES YOUR BUG)
  socket.on("msg-receive", (msg: Message) => {
    setMsgs((prev) => [...prev, msg]);
  });

  // 🟢 online users / profile
  socket.on("users-update", (users: User[]) => {
    setUsers(users);
  });

  socket.on("warning", (data: { message: string }) => {
    toast({
      variant: "destructive",
      title: "System Warning",
      description: data.message,
    });
  });

  return () => {
    socket.disconnect();
  };
}, []);


  const isCurrentUser = !!users.find((u) => u.socketId === socket?.id);

  return (
    <SocketContext.Provider
      value={{ socket, users, setUsers, msgs, isCurrentUser }}
    >
      {children}
    </SocketContext.Provider>
  );
};

export default SocketContextProvider;
