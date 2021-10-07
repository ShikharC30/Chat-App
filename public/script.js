

{/* <div class="chat right">
                <div class="chat-name">Steve</div>
                <div class="chat-text">Heyy Everyone!!</div>
            </div> */}

//send click hone pe right side chat ka div ban jaana chahiye
let chat=document.querySelector("#chat-input");
let send=document.querySelector(".send");
let chatBox=document.querySelector(".chat-box");

//join chat ke liye
let chatContainer=document.querySelector(".chat-container");
let chatContent=document.querySelector(".chat-content");
let userName=document.querySelector("#chat-user");
let joinChat=document.querySelector(".join-chat");
let chatInputDiv=document.querySelector(".chat-input-name");

//joh banda join kr raha hai uske naam ke liye
let user;

joinChat.addEventListener("click",function(){
    user=userName.value;
    if(user){

        socket.emit("join-chat",user);
        //jab naam mil raha hai apan ne socket ko bhej diya

        chatContent.classList.remove("hide");
        chatInputDiv.classList.add("hide");
        chatContainer.classList.remove("main");
    }
})

send.addEventListener("click", function(){
    //since input hai toh .value se value mil jayegi
    let chatMessage = chat.value;
    console.log(chatMessage);
        if(chatMessage){

        socket.emit("chat-send", {user:user , chatMessage:chatMessage});
        //joh message aaya usko socket pe bhej do naam aur message ke saath

        addChat("right",{user:user,chatMessage:chatMessage});

        chatBox.scrollTop = chatBox.scrollHeight;
        //scrollTop -> value is a measurement of the 
        //distance from the element's top to its topmost visible content

        //scrollheight -> kitna total area hai element ke paas scroll karne ke liye
        chat.value="";
    }
})