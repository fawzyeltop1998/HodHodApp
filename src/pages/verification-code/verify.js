$("form").submit(event => {
    event.preventDefault();
    $("form").toggleClass("loading");
    const inputs = jQuery("form input").toArray();
    fetch(`${window.baseUrl}/verify`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            phoneNumber: inputs[0].value,
            code: inputs[1].value,
            verificationCode: inputs[2].value,
        }),
    })
        .then(async res => {
            $("form").toggleClass("loading");
            if (res.status === 200) {
                $("body").load("pages/chat-page/chat-page.html");
                const json = await res.json();
                token = json.token;
                setAuthHeadersWithToken(token);
                _keytar.setPassword("hodhod", json.user._id, json.token);
                _nedb.insert(json.user);
            } else alert(res.statusText);
        })
        .catch(err => {
            alert(err);
        });
});
