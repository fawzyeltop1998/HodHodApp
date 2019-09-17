function getMyProfile() {
    fetch(`${window.baseUrl}/profile`, {
        headers: authHeaders,
    })
        .then(async res => {
            let profile = await res.json();
            viewMyProfile(profile);
        })
        .catch(err => {
            alert(err);
        });
}
getMyProfile();

function viewMyProfile(profile) {
    $(document).ready(function() {
        $(".profile-image img").attr("src", `${profile.photo}`);
        $(".profile-name .name-text").html(`${profile.name}`);
        $(".profile-bio .bio-text").html(`${profile.bio}`);

        $(".get-my-profile")
            .off("click")
            .on("click", function() {
                $(".wrapper-of-profile").css("display", "grid");
                $(".wrapper-of-contacts").css("display", "none");

                $(".wrapper-of-profile")
                    .css("margin-left", "-100%")
                    .animate(
                        {
                            marginLeft: 0,
                        },
                        500,
                    );
            });
        $(".back-to-contacts")
            .off("click")
            .on("click", function() {
                $(".wrapper-of-profile")
                    .css("margin-left", "0")
                    .animate(
                        {
                            marginLeft: "-100%",
                        },
                        500,
                        function() {
                            $(".wrapper-of-profile").css("display", "none");
                            $(".wrapper-of-contacts").css("display", "grid");
                        },
                    );
            });
    });
}
