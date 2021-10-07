socket.on("user-joined",function(name){
    console.log(name);
    let joinDiv=document.createElement("div");
    joinDiv.classList.add("chat");
    joinDiv.classList.add("join");
    joinDiv.innerHTML =`${name} joined the chat`;
    chatBox.append(joinDiv);
})

socket.on("recieve-chat",function(userObj){
    console.log("Hi");
    console.log(userObj.chatMessage);
    addChat("left",userObj);
    
})

socket.on("leave",function(name){
    let leaveDiv=document.createElement("div");
    leaveDiv.classList.add("chat");
    leaveDiv.classList.add("leave");
    leaveDiv.innerHTML =`${name} left the chat`;
    chatBox.append(leaveDiv);
})

function addChat(sender,userObj){
    let chatDiv=document.createElement("div");
        chatDiv.classList.add("chat");
        chatDiv.classList.add(sender);

        let chatName = document.createElement("div");
        chatName.classList.add("chat-name");
        chatName.innerHTML = userObj.user;

        let chatText = document.createElement("div");
        chatText.classList.add("chat-text");
        chatText.innerHTML=userObj.chatMessage;
        //voh message joh apne ko input se milega

        chatDiv.append(chatName);
        chatDiv.append(chatText);

        chatBox.append(chatDiv);
}