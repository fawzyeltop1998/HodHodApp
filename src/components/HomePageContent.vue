<template>
    <div class="wrapperOfLoginPage">
        <div class="wrapperOfLoginCard">
            <div class="card full-height">
                <div class="row no-gutters full-height">
                    <div class="col-sm-6 full-height grid-container">
                        <div class="loginSectionWrapper">
                            <div class="aboutSection">
                                <h5>Welcome to</h5>

                                <div class="imageWithTitle">
                                    <div class="row no-gutters">
                                        <div class="col-2"></div>

                                        <div class="col-2">
                                            <div>
                                                <img src="photos/photo.png" class="imageFullWidth" />
                                            </div>
                                        </div>

                                        <div class="col-8">
                                            <h1 class="hodhodTitle font-grad">
                                                HodHod
                                            </h1>
                                        </div>
                                    </div>
                                </div>

                                <hr />

                                <div class="briefIntro">
                                    <p>
                                        {{Desc}}
                                    </p>
                                </div>
                            </div>

                            <form class="ui form loginForm">
                                <div class="ui left icon input mb-2 iti">
                                      <vue-tel-input v-model="phone" v-bind="bindProps"></vue-tel-input>

                                    <!-- <input id="phoneNumber" style="padding-left: 3.5em;" type="tel" name="phoneNumber" placeholder="Phone Number" autofocus required />

                                    <span id="valid-msg" class="hide">✓ Valid</span>
                                    <span id="error-msg" class="hide"></span> -->

                                </div>

                                <div class="codeInputField">
                                    <div class="ui left icon input">
                                        <input id="codeField" type="text" name="code" placeholder="Code" required />
                                        <i class="key icon"></i>
                                    </div>
                                </div>

                                <div class="logInBtn">
                                    <button @click="changeTitle()" class="ui button text-white bg-grad button-hover-grad">
                                        Login
                                    </button>
                                </div>
                            </form>

                            <div class="newUserSection">
                                <p>
                                    Don't have an account?
                                    <span class="font-grad">Register Now</span>
                                </p>

                                <div class="orWithHr">
                                    <hr class="leftHr" />
                                    <i>Or</i>
                                    <hr class="rightHr" />
                                </div>
                            
                                <p>
                                    Get your
                                    <!-- <span id="freeTrialClickable" class="font-grad">Free Trial</span -->
                                    <router-link to="/trial" class="font-grad">Free Trial</router-link>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-6 full-height">
                        <div class="wrapperForImageGradient">
                            <div class="loginImageSection">
                                <img
                                    class="imageFullWidth"
                                    src="photos/background.jpg"
                                />
                            </div>

                            <div class="loginLinearGradient">
                                <div class="logoTitleParagraph">
                                    <div class="logoOnImage">
                                        <img
                                            class="imageFullWidth"
                                            src="photos/photo.png"
                                        />
                                    </div>
                                    <div class="titleOnImage">
                                        {{ titleOnImage }}
                                    </div>
                                    <div class="paragraphOnImage">
                                        <p>
                                            {{ paraOnImage }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</div>
</template>

<script>
import { VueTelInput } from 'vue-tel-input';
export default {
  name: `HelloWorld`,
  data() {
    return {

     phone: "01203522497",
      bindProps: {
        defaultCountry: "EG",
        disabledFetchingCountry: false,
        disabled: false,
        disabledFormatting: false,
        placeholder: "Enter a phone number",
        required: false,
        enabledCountryCode: false,
        enabledFlags: true,
        preferredCountries: ["EG", "SA"],
        onlyCountries: [],
        ignoredCountries: [],
        autocomplete: "off",
        maxLen: 25,
        wrapperClasses: "",
        inputClasses: "",
        dropdownOptions: {
          disabledDialCode: false
        },
        inputOptions: {
          showDialCode: false
        }
      },

     loginSuccess: `Login is success`,
     titleOnImage: `HodHod`,
     paraOnImage: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut velit quis nisi accusamus. Voluptates laborum ab nemo iste consectetur autem blanditiis,  deserunt rerum repellendus nulla nam
     facere vitae iusto obcaecati?`,
      Desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel omnis doloremque voluptatum animi`
    }
  },
  methods: {
      changeTitle() {
          alert(`${this.loginSuccess}`);
      }
  },
  components: {
        VueTelInput
  }
}
</script>

<style scoped lang="scss">

/*********** Vue-tel-input ***********/

.vue-tel-input {
    width: 100%;
}

/*********** Vue-tel-input ***********/


#error-msg {
    color: red;
}

#valid-msg {
    color: #00c900;
}

input.error {
    border: 1px solid #ff7c7c;
}

.hide {
    display: none;
}


/*===============*/


/*Login Page Styles
===================*/

.wrapperOfLoginPage {
    height: 100%;
    background-color: #F2F2F2;
    display: grid;
    place-items: center;
}

.wrapperOfLoginCard {
    width: 85%;
    height: 75%;
}


/*Righthand Section 
Image with linear Gradient
===========================*/


/*This is to set the image to be full width of its container*/

.imageFullWidth {
    width: 100%;
}

.wrapperForImageGradient {
    position: relative;
    height: 100%;
}

.loginImageSection,
.loginImageSection img {
    height: 100%;
}

.loginLinearGradient {
    display: grid;
    place-items: center;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background: linear-gradient(-50deg, #d9308abf, #f27932d9);
    padding: 15px;
}

.logoTitleParagraph {
    text-align: center;
    width: 80%;
    height: 50%;
}

.logoOnImage {
    width: 100px;
    margin: 0 auto;
}

.paragraphOnImage {
    color: white;
    padding: 0 25px;
}

.titleOnImage {
    font-weight: bold;
    font-size: 50px;
    padding: 10px;
    color: white;
    margin: 15px;
}


/*Lefthand Section
login form
==================*/

.loginSectionWrapper {
    width: 75%;
    height: 85%;
    place-self: center;
}

.aboutSection {
    text-align: center;
}

.aboutSection h5 {
    color: #828282;
    text-transform: uppercase;
    font-size: 16px;
    font-weight: bold;
}

.imageWithTitle {
    margin-bottom: 20px;
}

.hodhodTitle {
    font-size: 4vw;
    text-align: left;
    padding-left: 15px;
    /* white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis; */
    margin: 0;
}

.briefIntro {
    color: #a7a7a7;
}


/*Login form Section
====================*/

.loginForm {
    margin: 20px 0;
}

.iti {
    width: 100%;
}

.codeInputField {
    margin-bottom: 10px;
}

.logInBtn {
    margin-top: 15px;
}

.codeInputField div,
.logInBtn button {
    width: 100%;
}

.newUserSection {
    text-align: center;
    margin-top: 10px;
    color: #828282;
}

.newUserSection span {
    cursor: pointer;
}

.newUserSection hr {
    width: 33%;
    display: inline-block;
    position: absolute;
}

.orWithHr {
    position: relative;
    margin-bottom: 10px;
}

.orWithHr .leftHr {
    left: 10%;
}

.orWithHr .rightHr {
    right: 10%;
}
</style>
