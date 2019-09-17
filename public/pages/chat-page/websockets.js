$.getScript(
    "https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.2.0/socket.io.js",
    handleWebSockets,
);

function handleWebSockets() {
    console.log("handling web sockets");
    window.socket = io(`${window.baseUrl}/chat`);
    let firstTime = true;
    socket.on("connect", async function() {
        console.log("connected");
        socket
            .once("authenticated", function() {
                if (!firstTime) return;
                firstTime = false;
                console.log("authenticated");
                socket.on("online users", function(data) {
                    // handle online users
                    console.log("online users", data);
                });

                socket.on("wrong format", function(message) {
                    console.log("wrong format", message);
                });

                $(document).on("submit", "form", function(e) {
                    e.preventDefault();
                    socket.emit("chat message", {
                        content: $("#messageInputField").val(),
                        conversation: window.selectedConversation,
                        messageType: "TEXT",
                    });
                    $("#messageInputField").val("");
                });

                socket.on("seen", function(seenMessage) {
                    // handle seenMesssage
                    console.log("seen message", seenMessage);
                });
                socket.on("chat message", function(msg) {
                    if (window.selectedConversation === msg.conversation._id) {
                        // incoming message is for the opened conversation
                        $(".chat-messages-container").append(
                            formulateChatMessage(msg),
                        );
                        $("#chatMessagesContainer").scrollTop(
                            $("#chatMessagesContainer")[0].scrollHeight,
                        );
                    }
                    // update last message in conversation cards
                    updateLastMessage(msg);
                });
            })
            .emit("authenticate", {
                token,
            });
    });
    socket.on("disconnect", function() {
        console.log("disconnected");
    });
}

function updateLastMessage(msg) {
    const conversation = $(`#${msg.conversation._id} .contactMessage`);
    if (conversation.length === 0) getMyConversations();
    else conversation.html(formulateLastMessage(msg));
}
