function getMyFamily() {
    fetch(`${window.baseUrl}/family/users`, {
        headers: authHeaders,
    })
        .then(async res => {
            viewMyFamily(await res.json());
        })
        .catch(err => alert(err));
}

function viewMyFamily(contacts) {
    $(".chat-cards-of-contacts").html("");
    for (let contact of contacts) {
        $(".chat-cards-of-contacts").append(`
        <div class="chat-card" id="${contact._id}">
            <div class="row no-gutters">
                <!--Image-->
                <div class="col-1">
                    <div class="contactImage">
                        <img src="${contact.photo}" />
                    </div>
                </div>
    
                <!--User Name and Last Message Text-->
                <div class="col-9">
                    <div class="contactNameAndMessage">
                        <div class="contactName">
                            ${contact.name}
                        </div>
                        <div class="contactMessage">
                            ${contact.bio}
                        </div>
                    </div>
                </div>
            </div>
        </div>`);
    }
}
