let channelName;
if (getUrlVars()["channel"]) {
  channelName = getUrlVars()["channel"];
}

function getUrlVars() {
  var vars = {};
  var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(
    m,
    key,
    value
  ) {
    vars[key] = value;
  });
  return vars;
}

function ShowChat(user, message, extra) {
  this.render = function() {
    let content = document.createElement("div");
    content.classList.add("content-container");
    if(extra.userColor != null){
      content.style.backgroundColor = extra.userColor;
    }
    else{
      content.style.backgroundColor = "rgb(114, 161, 229)";
    }
    let username = document.createElement("p");
    username.classList.add("bold");
    username.textContent = user;
    let messageContainer = document.createElement("p");
    messageContainer.textContent = message;

    content.appendChild(username);
    content.appendChild(messageContainer);
    document.body.insertBefore(
      content,
      document.getElementById("chat-container").nextSibling
    );
  };
}

ComfyJS.onChat = (user, message, flags, self, extra) => {
  console.log(extra);
  let chat = new ShowChat(user, message, extra);
  chat.render();
};
ComfyJS.Init(channelName);