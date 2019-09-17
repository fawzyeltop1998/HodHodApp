function getFamilyStatus() {
    fetch(`${window.baseUrl}/statuses`, {
        headers: authHeaders,
    })
        .then(async function(res) {
            const statuses = await res.json();
            appendStatuses(statuses);
        })
        .catch(err => console.err(err));
}

function getMyStatus() {
    fetch(`${window.baseUrl}/statuses/my`, {
        headers: authHeaders,
    })
        .then(async function(res) {
            const statuses = await res.json();
            appendStatuses(statuses);
        })
        .catch(err => console.err(err));
}

getFamilyStatus();
getMyStatus();

function appendStatuses(statuses) {
    for (let status of statuses)
        $("#newStatuses").after(`
        <div class="statusCard" id="${status._id}">
                    <img
                        class="statusCardImg notViewed"

                        src="${
                            status.statusType == "VIDEO"
                                ? status.attach.substring(
                                      0,
                                      status.attach.lastIndexOf("."),
                                  ) + ".jpg"
                                : status.attach
                        }"
                        alt=""
                    />
                    <div class="statusCardText">
                        <span class="statusContactName">${
                            status.user.name
                        }</span>
                        <span class="statusTime">${status.createdAt}</span>
                    </div>
                </div>
        `);
}
