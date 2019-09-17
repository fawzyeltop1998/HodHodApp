<template>
<!-- Free trial page -->
<div class="wrapperOfFTPage">
    <!-- This part is common between free trial page and verification code page -->
    <div class="freeTrialHeader">
        <div class="wrapperImgGrad">
            <div class="imgHeader">
                <img class="imageFullWidth" src="photos/background.jpg" />
            </div>

            <div class="gradHeader">
                <div class="logoTitle">
                    <div class="row no-gutters">
                        <div class="col-2">
                            <div class="logoHeader">
                                <img
                                    class="imageFullWidth"
                                    src="photos/photo.png"
                                />
                            </div>
                        </div>

                        <div class="col-9">
                            <div class="titleHeader">
                                <p>HodHod</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="mainContentFT">
        <div class="wrapperOfMainContentFT">
            <div class="freeTrialLogoContainer">
                <div class="FTLogo">
                    <img
                        class="imageFullWidth"
                        src="photos/photo.png"
                        alt="HodHod Logo"
                    />
                </div>
            </div>

            <!-- Free Trial Page -->
            <div class="freeTrialInfo">
                <div class="infoContainer">
                    <h1 class="font-grad">Free Trial</h1>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Officia dolorem quam eum consectetur similique
                        deleniti nemo, laudantium pariatur. Earum sunt quasi
                        ducimus quod fuga nesciunt, eum labore nostrum aperiam
                        consectetur.
                    </p>

                    <div class="freeTrialBtn">
                        <button
                            id="generateCodeBtn"
                            class="ui button text-white bg-grad big button-hover-grad"
                            data-toggle="modal"
                            data-target="#centralModalSuccess"
                            onclick="createOwnerCode()"
                        >
                            Generate Your Code
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Central Modal Medium Success -->
    <div
        class="modal fade centerVandH"
        id="centralModalSuccess"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
    >
        <div class="modal-dialog modal-notify modal-success" role="document">
            <!--Content-->
            <div class="modal-content">
                <!--Header-->
                <div class="modal-header bg-grad">
                    <p class="heading lead">Get Your Free Tial</p>

                    <button
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-label="Close"
                    >
                        <span aria-hidden="true" class="white-text"
                            >&times;</span
                        >
                    </button>
                </div>

                <!--Body-->
                <div class="modal-body">
                    <div class="text-center">
                        <i
                            class="fas fa-check fa-4x mb-3 animated rotateIn font-grad"
                        ></i>

                        <h1 class="font-grad">CONGRATULATIONS!</h1>
                        <p>You get your code.</p>
                        <p>Here it is.</p>
                        <p id="loadedP"></p>
                        <div
                            id="loading-spinner"
                            class="spinner-border text-light"
                            role="status"
                        >
                            <span class="sr-only">Loading...</span>
                        </div>
                    </div>
                </div>
                <div class="separator"></div>

                <!--Footer-->
                <div class="modal-footer justify-content-center">
                    <button
                        id="login-btn"
                        class="ui button disabled text-white bg-grad medium button-hover-grad"
                    >
                        Login Now
                    </button>
                </div>
            </div>
            <!--/.Content-->
        </div>
    </div>

    <div id="backInFT" class="backBtn">
        <router-link to="/">
            <div class="centered">
                <clr-icon shape="back-icon" size="75"></clr-icon>
            </div>
        </router-link>
         
    </div>
</div>
</template>
<style scoped lang="scss">
/*General Styling For Free Trial and Generate User Code Page*/
.wrapperOfFTPage,
.wrapperOfGCPage {
    width: 100%;
    height: 100%;
    background-color: #f6f6f6;
}

/*Header*/

.freeTrialHeader,
.GCHeader {
    height: 80px;
}

.wrapperImgGrad {
    position: relative;
    height: 100%;
}

.imgHeader,
.imgHeader img {
    height: 100%;
}

.gradHeader {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background: linear-gradient(-50deg, #d9308abf, #f27932d9);
}

.mainContentFT,
.mainContentGC {
    width: 100%;
    height: 85%;
    display: grid;
    place-items: center;
}

.logoTitle {
    display: inline-block;
    position: absolute;
    position: relative;
    margin-top: 1%;
    margin-left: 1%;
}

.logoHeader {
    width: 100%;
    display: inline-block;
}

.titleHeader {
    display: inline-block;
    color: white;
    font-size: 20px;
    font-weight: bold;
    position: relative;
    left: 8%;
    top: 25%;
}

.freeTrialLogoContainer,
.GCLogoContainer {
    text-align: center;
    padding-top: 15px;
}

.FTLogo,
.GCLogo {
    display: inline-block;
    width: 125px;
}

.infoContainer {
    text-align: center;
}

.infoContainer h1 {
    margin: 1% 0;
}

.infoContainer p {
    width: 50%;
    display: inline-block;
}

.freeTrialBtn,
.GCBtn {
    margin-top: 2%;
}

.backBtn {
    position: absolute;
    bottom: 5%;
    left: 2%;
}

.centerVandH#centralModalSuccess {
    width: 50%;
    height: 70%;
}


</style>