//Action for generate code button
$("body").on("click", "#login-btn", function() {
    const content = $("#loadedP").html();
    $("body").load("pages/login-page/login-page.html", content, function() {
        $("#codeField").val(content);
    });
});


$("body").on("click", "#backInFT", function() {
    $("body").load("pages/login-page/login-page.html");
});


function createOwnerCode() {
    fetch(`${window.baseUrl}/codes`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({
                for: "OWNER",
            }),
        })
        .then(res => res.json())
        .then(res => showCode(res))
        .catch(err => errorHandler(err));
}

function showCode(res) {
    $("#loadedP").html(res.code);
    $("#loading-spinner").hide();
    $("#login-btn").removeClass("disabled");
}

function errorHandler(err) {
    $("body").off("click", "#login-btn");
}