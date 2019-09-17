$(document).ready(function() {
    let status_interval;
    $(document).off("click"); //to prevent listening twice on click
    $(document).on("click", ".statusCard", function(e) {
        let statusElement = e.currentTarget;

        //fetch status
        fetch(`${window.baseUrl}/statuses/${statusElement.id}/seen`, {
            headers: authHeaders,
        })
            .then(async function(res) {
                return await res.json();
            })
            .then(displayStatus)
            .catch(err => console.error(err));

        //status effects
        function displayStatus(statusRes) {
            //add blury background to status view
            let statusUrl = statusRes.attach.replace(
                "upload/",
                "upload/e_blur:700/",
            );
            $(".statusMedia").css({
                //prettier-ignore
                "background": `url(${
                    statusRes.statusType == "VIDEO"
                        ? statusUrl.substring(0, statusUrl.lastIndexOf(".")) +
                          ".jpg"
                        : statusUrl
                })`,
                "background-size": "100% 100%",
            });

            if (statusRes.statusType == "IMAGE") {
                $(".currentlyViewedVideo").css("display", "none");
                $("#currentlyViewedImage").css("display", "block");
                $("#currentlyViewedImage").attr("src", statusRes.attach);
            } else if (statusRes.statusType == "VIDEO") {
                $("#currentlyViewedImage").css("display", "none");
                $(".currentlyViewedVideo")
                    .children("source")
                    .attr("src", statusRes.attach);

                $(".currentlyViewedVideo").css("display", "block");
                $(".currentlyViewedVideo")[0].load();
            }

            //hide first look of status and show the status view
            let status_first_look = $(".statusFirstLook");
            let status_view = $(".selectedStatus");

            status_first_look.css("display", "none");
            status_view.css("display", "grid");

            $(".selectedStatusCard").removeClass("selectedStatusCard");
            $(statusElement).addClass("selectedStatusCard");
            $(statusElement)
                .children(".statusCardImg")
                .addClass("viewed");
            $(statusElement)
                .children(".statusCardImg")
                .removeClass("notViewed");

            //add status text
            $(".status-text p").html(statusRes.text);

            //status bar action
            e.stopPropagation(); //This will stop the event bubbling

            let width = 0;
            let interval_duration = statusRes.videoDuration || 5;
            if (status_interval) {
                width = 0;
                clearInterval(status_interval);
                $(".progressBar").css("width", 0);
                status_interval = setInterval(scene, interval_duration * 10);
            } else {
                status_interval = setInterval(scene, interval_duration * 10);
            }

            function scene() {
                let temp_width = width;
                for (let i = 0; i < 5; i++) {
                    let element = document.getElementsByClassName(
                        "progressBar",
                    )[i];
                    if (temp_width / (100 * (i + 1)) >= 1)
                        element.style.width = "100" + "%";
                    else {
                        element.style.width = (width % 100) + "%";
                        break;
                    }
                }
                width++;
            }
        }
    });

    let close_icon = $("#closeStatusView");

    close_icon.on("click", function() {
        $("body").load(`pages/chat-page/chat-page.html`);
        clearInterval(status_interval);
        $(".progressBar").css("width", 0);
        status_interval = null;
    });

    //Close the modal when press Esc key
    $(document).on("keydown", function(event) {
        if (event.key == "Escape") {
            $("body").load(`pages/chat-page/chat-page.html`);
            clearInterval(status_interval);
            $(".progressBar").css("width", 0);
            status_interval = null;
        }
    });

    //========================================================================//
    //Video and image controlling using mouse click

    $(document).off("mousedown");
    $(document).off("mouseup");
    $(document).on("mousedown", ".statusContent", function() {
        $(".currentlyViewedVideo")
            .get(0)
            .pause();

        $(".status-text").slideToggle();
    });

    $(document).on("mouseup", ".statusContent", function() {
        $(".currentlyViewedVideo")
            .get(0)
            .play();
        $(".status-text").slideToggle();
    });
});
