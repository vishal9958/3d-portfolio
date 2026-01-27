// import { createServer } from "http";
// import { Server } from "socket.io";

// const httpServer = createServer();

// const io = new Server(httpServer, {
//   cors: { origin: "*" },
// });

// // 🔥 in-memory store
// const users = new Map(); // socketId -> user
// let messages = [];

// io.on("connection", (socket) => {
//   console.log("🟢 user connected:", socket.id);

//   // 👤 create default user
//   const user = {
//     id: socket.id,
//     socketId: socket.id,
//     name: "Guest",
//     avatar: "1",
//     color: "#60a5fa",
//     location: "IN",
//     flag: "🇮🇳",
//     isOnline: true,
//     createdAt: new Date().toISOString(),
//     lastSeen: null,
//   };

//   users.set(socket.id, user);

//   // 📤 initial data
//   socket.emit("msgs-receive-init", messages);
//   io.emit("users-update", Array.from(users.values()));

//   // 💬 CHAT (🔥 FIXED)
//   socket.on("msg-send", ({ content }) => {
//     if (!content || typeof content !== "string") return;

//     const u = users.get(socket.id);
//     if (!u) return;

//     const msg = {
//       id: Date.now(),
//       sessionId: socket.id,
//       username: u.name,
//       avatar: u.avatar,
//       color: u.color,
//       flag: u.flag,
//       content,
//       createdAt: new Date().toISOString(),
//     };

//     messages.push(msg);
//     io.emit("msg-receive", msg);
//   });

//   // ✏️ EDIT PROFILE
//   socket.on("update-user", ({ username, avatar, color }) => {
//     const u = users.get(socket.id);
//     if (!u) return;

//     if (username) u.name = username;
//     if (avatar) u.avatar = avatar;
//     if (color) u.color = color;

//     users.set(socket.id, u);
//     io.emit("users-update", Array.from(users.values()));
//   });

//   // ❌ DISCONNECT
//   socket.on("disconnect", () => {
//     console.log("🔴 user disconnected:", socket.id);

//     users.delete(socket.id);
//     io.emit("users-update", Array.from(users.values()));
//   });
// });

// httpServer.listen(4000, () => {
//   console.log("🚀 Socket server running on http://localhost:4000");
// });


import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer();
const io = new Server(httpServer, {
  cors: { origin: "*" },
});

// in-memory
const users = new Map(); // socketId -> user
let messages = [];

io.on("connection", (socket) => {
  console.log("🟢 connected:", socket.id);

  // create user
  const user = {
    id: socket.id,
    socketId: socket.id,
    name: "Guest",
    avatar: "1",
    color: "#60a5fa",
    location: "IN",
    flag: "🇮🇳",
    isOnline: true,
    createdAt: new Date().toISOString(),
    lastSeen: null,
  };

  users.set(socket.id, user);

  // send initial data
  socket.emit("msgs-receive-init", messages);
  io.emit("users-update", Array.from(users.values()));

  // ✅ CHAT (OBJECT BASED)
  socket.on("msg-send", ({ content }) => {
    if (!content) return;

    const u = users.get(socket.id);
    if (!u) return;

    const msg = {
      id: Date.now(),
      sessionId: socket.id,
      username: u.name,
      avatar: u.avatar,
      color: u.color,
      flag: u.flag,
      content,
      createdAt: new Date(),
    };

    messages.push(msg);
    io.emit("msg-receive", msg);
  });

  // ✅ PROFILE UPDATE
  socket.on("update-user", ({ username, avatar, color }) => {
    const u = users.get(socket.id);
    if (!u) return;

    if (username) u.name = username;
    if (avatar) u.avatar = avatar;
    if (color) u.color = color;

    users.set(socket.id, u);
    io.emit("users-update", Array.from(users.values()));
  });

  socket.on("disconnect", () => {
    console.log("🔴 disconnected:", socket.id);
    users.delete(socket.id);
    io.emit("users-update", Array.from(users.values()));
  });
});

httpServer.listen(4000, () => {
  console.log("🚀 http://localhost:4000");
});
