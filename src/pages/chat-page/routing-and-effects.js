$(function() {
    //User Menu

    $("#userMenu").on("click", function(e) {
        e.preventDefault();
        $(".userMenu").slideToggle();

        if ($(".chatMenu").css("display") !== "none") {
            $(".chatMenu").slideToggle();
        }
    });

    $("#generateUserCode").on("click", function() {
        $("body").load("pages/generate-user-code/generate-user-code.html");
    });

    $("#status").on("click", function() {
        $("body").load("pages/status-page/status-page.html");
    });

    $("#chatMenu").on("click", function(e) {
        e.preventDefault();
        $(".chatMenu").slideToggle();

        if ($(".userMenu").css("display") !== "none") {
            $(".userMenu").slideToggle();
        }
    });

    // $(".user-menu-icon").on("click", function(e) {
    //     e.preventDefault();
    //     $(".scrollableMenu").slideUp();
    //     const associatedMenu =
    //         e.target.parentElement.parentElement.parentElement
    //             .nextElementSibling;
    //     if ($(associatedMenu).css("display") !== "none") {
    //         $(associatedMenu).slideUp();
    //     } else $(associatedMenu).slideDown();
    // });

    // Media modal
    let modal = $("#mediaModal");

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    let img = $(".modal-image");
    let vid = $(".modal-video");
    let play_vid = $(".play-video");
    let zoomed = false;

    let modalImg = $("#img01");
    let modalVid = $("#vid01");

    var down_src;

    img.on("click", function() {
        modal.css("display", "block");
        modalImg.attr("src", this.src);
        modalImg.css("display", "block");
        modalVid.css("display", "none");
        down_src = this.src;
    });

    //Zoom Image
    modalImg.on("click", function() {
        if (!zoomed) {
            $(".modalHeader").hide();
            $(".leftNav").hide();
            $(".rightNav").hide();
            modalImg.css("cursor", "zoom-out");
            modalImg.css("width", "unset");
            modalImg.css("max-height", "unset");
            zoomed = !zoomed;
        } else {
            $(".modalHeader").show();
            $(".leftNav").show();
            $(".rightNav").show();
            modalImg.css("cursor", "zoom-in");
            modalImg.css("width", "unset");
            modalImg.css("max-height", "100%");
            zoomed = !zoomed;
        }
    });

    play_vid.on("click", function() {
        modal.css("display", "block");
        modalVid
            .find("source")
            .attr(
                "src",
                this.previousElementSibling.children[0].attributes[0].value,
            );
        modalVid.css("display", "block");
        modalVid.css("width", "unset");
        modalImg.css("display", "none");
        modalVid[0].load();
        down_src = this.previousElementSibling.children[0].attributes[0].value;
    });

    //Download media in the modal

    let download_icon = $("[title=Download]");

    download_icon.on("click", function() {
        download_icon.attr("href", down_src);
    });

    // Get the close_icon element that closes the modal
    let close_icon = $("#closeModal");

    // When the user clicks on <close_icon> (x), close the modal
    close_icon.on("click", function() {
        modal.css("display", "none");
        let stop_vid = modalVid.get(0);
        stop_vid.pause();
        stop_vid.currentTime = 0;
    });

    //Close the modal when press Esc key
    $(document).on("keydown", function(event) {
        if (event.key == "Escape") {
            modal.css("display", "none");
            let stop_vid = modalVid.get(0);
            stop_vid.pause();
            stop_vid.currentTime = 0;
        }
    });
});
