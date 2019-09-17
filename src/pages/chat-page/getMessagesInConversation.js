let moment = require("moment");
async function getMessagesInConversation(conversationID) {
    fetch(
        `${window.baseUrl}/conversations/${conversationID}/messages/?pageSize=20`,
        {
            headers: authHeaders,
        },
    )
        .then(async res => {
            showConversationMessages(await res.json());
        })
        .catch(err => {
            alert(err);
        });
}

$(document).on("click", ".chat-card", function(event) {
    $(".chat-messages-container")
        .html("")
        .addClass("ui form loading");
    window.selectedConversation = event.currentTarget.id;
    getMessagesInConversation(event.currentTarget.id);
});

function showConversationMessages(res) {
    console.log(res);
    $(".chat-messages-container")
        .html("")
        .removeClass("ui form loading");

    $(".chat-messages-container").html("");
    for (let msg of res.messages) {
        $(".chat-messages-container").prepend(formulateChatMessage(msg));
    }
    $("#chatMessagesContainer").scrollTop(
        $("#chatMessagesContainer")[0].scrollHeight,
    );

    showContactInfo();
}

function showContactInfo() {
    const currentContactImage = $(
        `#${window.selectedConversation} .contactImage img`,
    ).attr("src");
    const currentContactName = $(`#${window.selectedConversation} .contactName`)
        .html()
        .trim();
    $(".contact-chat-name span#contactName").html(currentContactName);
    $(".contact-chat-image img").attr("src", currentContactImage);
}

function formulateChatMessage(msg) {
    let timeOfMessage = moment(msg.createdAt).format("LT");
    return `
    <div class="message">
        <div class="${
            msg.sender._id === me._id
                ? "text-of-sent-message-container"
                : "text-of-received-message-container"
        }">
        ${messageToHTML(msg)}
        ${
            msg.sender._id === me._id
                ? `<div class="message-state-container">
                        <span class="time-of-message">${timeOfMessage}</span>
                        <span class="message-state">
                            <clr-icon
                                shape="not-sent-icon"
                                size="15"
                            ></clr-icon>
                        </span>
                    </div>`
                : `<div class="message-state-container">
                        <span class="time-of-message">${timeOfMessage}</span>
                    </div>
                
                `
        }
        </div>
    </div>`;
}

function messageToHTML(msg) {
    const messageTypes = {
        TEXT: `<p class="text-type">${msg.content}</p>`,
        IMAGE: `<div class="image-type"><img src="${msg.attach}" /></div>`,
        VIDEO: `<div class="video-type">
                    <video controls>
                        <source src="${msg.attach}" type="video/mp4"/>
                    </video>
                 </div>`,
        VOICE_NOTE: `<div class="record-type">
                        <audio controls>
                            <source src="${msg.attach}" type="audio/mp3" />
                        </audio>
                    </div>`,
    };
    return messageTypes[msg.messageType];
}
