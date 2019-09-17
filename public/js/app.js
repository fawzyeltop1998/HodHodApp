window.baseUrl = "https://api-hodhod.herokuapp.com";
// window.baseUrl = "http://localhost:5000";

const _keytar = require("keytar");
const app = require("electron").remote.app;

const _Datastore = require("nedb");
const _nedb = new _Datastore({
    filename: `${app.getPath("userData")}/data/_datastore.db`,
    autoload: true,
    timestampData: true,
});

let me;
let token;
let authHeaders;

$(function() {
    _nedb
        .findOne()
        .sort({ createdAt: -1 })
        .exec(async(err, user) => {
            let page = "login";
            console.log("DB stored user", user);
            if (err) alert(err);
            if (user) {
                // logged in before
                token = await _keytar.getPassword("hodhod", user._id);
                // check if token exists
                setAuthHeadersWithToken(token);
                // update my data 'get my profile'
                const myProfile = await getMyProfileResponse();
                if (myProfile.status === 200) {
                    page = "chat";
                    me = await myProfile.json();
                } else console.log("my profile", myProfile);
            }
            setTimeout(function() {
                const toBeLoadedPage = `${page}-page`;
                loadPage(toBeLoadedPage, toBeLoadedPage);
            }, 500);
        });
});

function setAuthHeadersWithToken(token) {
    authHeaders = {
        Authorization: "Bearer " + token,
    };
}

async function getMyProfileResponse() {
    return await fetch(`${window.baseUrl}/profile`, {
        headers: authHeaders,
    });
}


function loadPage(folder, filename) {
    $("body #app").load(`pages/${folder}/${filename}.html`);
}