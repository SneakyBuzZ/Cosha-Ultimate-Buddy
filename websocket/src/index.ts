import WebSocket, { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

const roomToSocketMap = new Map<number, WebSocket[]>();

type MessageType = {
  type: "JOIN" | "CHAT" | "DISCONNECT";
  payload: {
    message?: string;
    userId: number;
    roomId: number;
  };
};

wss.on("connection", (socket) => {
  socket.on("message", (message) => {
    console.log("Received: ", message.toString());

    const json: MessageType = JSON.parse(message.toString());

    const { payload, type } = json;

    switch (type) {
      case "JOIN": {
        const { userId, roomId } = payload;
        const sockets = roomToSocketMap.get(roomId) || [];

        roomToSocketMap.set(roomId, [...sockets, socket]);

        console.log(`User ${userId} joined room ${roomId}`);
        break;
      }
      case "CHAT": {
        const { roomId } = payload;
        const sockets = roomToSocketMap.get(roomId) || [];

        console.log("HOW MANY SOCKETS? ", sockets.length);

        sockets.forEach((s) => {
          s.send(JSON.stringify(payload));
        });

        console.log(`Message sent to room ${roomId}`);
        break;
      }
      case "DISCONNECT": {
        const { userId, roomId } = payload;
        const sockets = roomToSocketMap.get(roomId) || [];

        roomToSocketMap.set(
          roomId,
          sockets.filter((s) => s !== socket)
        );

        console.log(`User ${userId} left room ${roomId}`);
        break;
      }
    }
  });

  socket.on("close", () => {
    console.log("Disconnected");
  });
});
