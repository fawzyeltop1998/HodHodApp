//Action for free trial span
$("body").on("click", "#freeTrialClickable", function() {
    $("body").load("pages/free-trial/free-trial.html");
});

$("form").submit(async event => {
    event.preventDefault();

    if (!iti.isValidNumber()) return alert("Invalid Phone Number");

    $("form").toggleClass("loading");

    const values = $("form :input").toArray();

    const data = {
        phoneNumber: iti.getNumber(),
        code: values[1].value,
    };
    console.log(data);

    try {
        const res = await fetch(`${window.baseUrl}/login`, {
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
        });
        $("form").toggleClass("loading");

        if (res.status === 200)
            $("body").load(
                "pages/verification-code/verification-code.html",
                values,
                function() {
                    const inputs = $("form input").toArray();
                    inputs[0].value = data.phoneNumber;
                    inputs[1].value = data.code;
                },
            );
        else throw new Error(res.statusText);
    } catch (err) {
        alert(err);
    }
});
