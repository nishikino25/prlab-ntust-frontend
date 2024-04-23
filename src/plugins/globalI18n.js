import Vue from 'vue'
import VueI18n from 'vue-i18n'

import { en } from './i18n/i18n-en';
import { tw } from './i18n/i18n-tw'

Vue.use(VueI18n)

let messages = {};
messages = { ...messages, en, tw };

const locale = window.localStorage.getItem('locale') || 'en';
const i18n = new VueI18n({
    locale: locale,
    messages,
})
export default i18n