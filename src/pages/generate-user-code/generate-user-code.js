const {clipboard} = require("electron");
function copyCode(self) {
    clipboard.writeText($("#loadedP").html());
    $(self)
        .popup({
            title: "Successfully copied to clipboard!",
            content:
                "Share this code with your family so they can start using HodHod.",
            on: "manual",
            exclusive: true,
            position: "bottom center",
        })
        .popup("show");
}
