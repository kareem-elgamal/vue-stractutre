
import enUS from './locales/en.json'
import ar from './locales/ar.json'
import { createI18n } from 'vue-i18n'
import Cookies from "js-cookie";
const localLang = Cookies.get('lang')
type enSchema = typeof enUS

const i18n = createI18n<[enSchema], 'en' | 'ar'>({
    legacy: false, // you must set false, to use Composition API
    locale: localLang || 'en',
    // @ts-ignore
    messages: {
        'en': enUS,
        'ar': ar
    }
})
export default i18n
}));
