//Action for generate code button
$("body").on("click", "#backInGC", function() {
    $("body").load("pages/chat-page/chat-page.html");
});

function createUserCode() {
    fetch(`${window.baseUrl}/codes`, {
        method: "POST",
        headers: {
            ...authHeaders,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            for: "USER",
        }),
    })
        .then(res => res.json())
        .then(res => showCode(res))
        .catch(err => errorHandler(err));
}

function showCode(res) {
    $("#loadedP").html(res.code);
    $("#loading-spinner").hide();
}

function errorHandler(err) {
    console.log(err);
    $("body").off("click", "#login-btn");
}

createUserCode();
