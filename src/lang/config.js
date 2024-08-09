import {createI18n} from 'vue-i18n'
import fa from './fa.json'
const i18n = createI18n({
    locale: 'fa',
    fallbackLocale: 'fa',
    messages: {
        fa: fa,
    }
})
export default i18n;