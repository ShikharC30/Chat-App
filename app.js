const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.use(express.static("public"));
// koi bhi public folder se file uthani ho toh yeh likhte hai

app.get('/', (req, res) => {
  res.sendFile('D:/Development/Pepcoding/dev_chatApp_5thOct2021/public/index.html');
});


let users=[];
//kaun kaun hai joined


io.on('connection', (socket) => {

  socket.on("join-chat",function(name){
      socket.broadcast.emit("user-joined",name);
      users.push({id : socket.id,name : name});
  })
  //joh naam aaya na usko baaki sockets pe bhej do

  socket.on("chat-send",function(userObj){
      console.log("hi");
      console.log(userObj.chatMessage);
      socket.broadcast.emit("recieve-chat",userObj);
  })
  //joh chat aaya hai usko doosro ke paas bhej do

  socket.on("disconnect",function(){
    let user= users.filter(function(userObj){
      return userObj.id==socket.id;
    })
    //jab banda chod diya toh uska naam nikaal lo

    if(user){
      socket.broadcast.emit("leave",user[0].name);
      //sabko bata diya kaun gaya hai
    }

    users=users.filter(function(userObj){
      return userObj.id!=socket.id;
    })
    //users db update kr diya
  })



  console.log(`${socket.id} connected`);
});

let port=process.env.PORT || 3000;

server.listen(port, () => {
  console.log('listening on *:3000');
});