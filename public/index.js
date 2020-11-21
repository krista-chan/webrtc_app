const socket = io("/");
socket.emit("newUser", user.id);
