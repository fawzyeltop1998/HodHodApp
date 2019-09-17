async function showMyInfo() {
    if (!me) {
        const myProfile = await getMyProfileResponse();
        me = await myProfile.json();
        console.log("my profile", me);
    }
    if (!me.photo || !me.name) loadPage("first-login", "first-login");

    $(".current-user-image img").attr("src", me.photo);
    $(".current-username span").html(me.name);
}
showMyInfo();

function logout() {
    _nedb.remove({}, {multi: true}, function(err) {
        if (err) alert(err);
        document.location.reload();
    });
}
$(document).on("click", "#emoji-picker", function(e) {
    e.stopPropagation();
    $(".intercom-composer-emoji-popover").toggleClass("active");
});

$(document).click(function(e) {
    if (
        $(e.target).attr("class") != ".intercom-composer-emoji-popover" &&
        $(e.target).parents(".intercom-composer-emoji-popover").length == 0
    ) {
        $(".intercom-composer-emoji-popover").removeClass("active");
    }
});

$(document).on("click", ".intercom-emoji-picker-emoji", function(e) {
    $("#messageInputField").val($("#messageInputField").val() + $(this).html());
});

$(".intercom-composer-popover-input").on("input", function() {
    var query = this.value;
    if (query != "") {
        $(".intercom-emoji-picker-emoji:not([title*='" + query + "'])").hide();
    } else {
        $(".intercom-emoji-picker-emoji").show();
    }
});
