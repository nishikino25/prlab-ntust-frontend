import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Argon from "./plugins/argon-kit";
import i18n from "./plugins/globalI18n";
import './registerServiceWorker'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
AOS.init({
    // Global settings:
    //   disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    //   initClassName: 'aos-init', // class applied after initialization
    //   animatedClassName: 'aos-animate', // class applied on animation
    //   useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    //   disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 100, // values from 0 to 3000, with step 50ms
    duration: 500, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    //   anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBLwWznB2kscWbc5FZUuzpKm4SvTropUMc",
    authDomain: "twisc-a7b2e.firebaseapp.com",
    projectId: "twisc-a7b2e",
    storageBucket: "twisc-a7b2e.appspot.com",
    messagingSenderId: "347521969671",
    appId: "1:347521969671:web:5213473dca6610595d84a2",
    measurementId: "G-0JPVLCBFC6"
  };

// Initialize Firebase
initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


Vue.config.productionTip = false;
Vue.use(Argon);
new Vue({
    i18n,
    router,
    render: h => h(App)
}).$mount("#app");
