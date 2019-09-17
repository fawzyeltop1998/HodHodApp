function getMyConversations() {
    fetch(`${window.baseUrl}/conversations`, {
        headers: authHeaders,
    })
        .then(async res => {
            window.conversations = await res.json();
            viewConversations(conversations);
        })
        .catch(err => {
            alert(err);
        });
}
getMyConversations();

function viewConversations(conversations) {
    if (conversations.length === 0) return getMyFamily();
    $(".chat-cards-of-contacts")
        .html("")
        .removeClass("ui form loading");
    for (let conv of conversations)
        $(".chat-cards-of-contacts").append(formulateConversationCard(conv));
}

function formulateConversationCard(conv) {
    let photo,
        name,
        lastMessage = formulateLastMessage(conv.lastMessage);

    conv.users = conv.users.filter(user => user._id !== me._id);

    if (conv.conversationType === "P2P") {
        photo = conv.users[0].photo || "photos/photo.png";
        name = conv.users[0].name || conv.users[0].phoneNumber;
    } else {
        // group
        photo = conv.photo || "photos/group.png";
        name =
            conv.name ||
            conv.users
                .map(user => user.name || user.phoneNumber)
                .push(me.name || me.phoneNumber)
                .join(",");
    }

    return `
    <div class="chat-card" id="${conv._id}">
        <div class="row no-gutters">
            <!--Image-->
            <div class="col-1">
                <div class="contactImage">
                    <img src="${photo}" />
                </div>
            </div>

            <!--User Name and Last Message Text-->
            <div class="col-9">
                <div class="contactNameAndMessage">
                    <div class="contactName">
                        ${name}
                    </div>
                    <div class="contactMessage">
                        ${lastMessage}
                    </div>
                </div>
            </div>
        </div>
    </div>`;
}

function formulateLastMessage(convLastMessage) {
    let lastMessage = "";
    if (convLastMessage) {
        if (convLastMessage.messageType === "TEXT") {
            lastMessage = convLastMessage.content;
        } else {
            lastMessage = convLastMessage.messageType;
        }
        if (convLastMessage.sender._id === me._id)
            lastMessage = `me: ${lastMessage}`;
        else lastMessage = `${convLastMessage.sender.name}: ${lastMessage}`;
    }
    return lastMessage;
}
