import Vue from 'vue'
import VueI18n from 'vue-i18n'

// json 파일을 읽어들이기 위한 function
const requireLang = require.context(
    '@/lang',
    true,
    /\.json$/
)
const messages = {}

// json file read
for (const file of requireLang.keys()) {
    if (file === './index.js') continue // index.js 파일 제외
    const path = file.replace(/(\.\/|\.json$)/g, '').split('/')
    path.reduce((o, s, i) => {
        if (o[s]) return o[s]
        o[s] = i + 1 === path.length ? requireLang(file) : {}
        return o[s]
    }, messages)
}

Vue.use(VueI18n)

let defaultLocale = () => {
    localStorage.getItem('lang') ? localStorage.getItem('lang') : 'ko'
}

const i18n = new VueI18n({
    locale: defaultLocale, // 기본 locale
    fallbackLocale: 'ko', // locale 설정 실패시 사용할 locale
    messages, // 다국어 메시지
    silentTranslationWarn: true // 메시지 코드가 없을때 나오는 console 경고
})

export default i18n
