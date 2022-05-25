import axios from 'axios'

function getSelectedLang() {
    let lang = localStorage.getItem('lang')
    if(lang === 'en') {
        return 'en-US'
    } else if (lang === 'ko') {
        return 'ko-KR'
    } else if (lang === 'cn'){
        return 'zh-CN'
    } else {
        return 'ja-JP'
    }
}

let requestOption = () => {
    return {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept-Language': getSelectedLang()
        },
        timeout: 60000
    }
}
let requestOptionWithToken = () => {
    return {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Bearer ' + localStorage.getItem('accessToken'),
            'Accept-Language': getSelectedLang()
        },
        timeout: 60000
    }
}

let requestOptionForDownload = () => {
    return {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept-Language': getSelectedLang()
        },
        timeout: 60000,
        responseType: 'blob',
    }
}

let requestOptionWithTokenForDownload = () => {
    return {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Bearer ' + localStorage.getItem('accessToken'),
            'Accept-Language': getSelectedLang()
        },
        timeout: 60000,
        responseType: 'blob',
    }
}

let requestOptionWithTokenForJson = (method, data) => {
    return {
        method: method,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('accessToken'),
            'Accept-Language': getSelectedLang()
        },
        timeout: 60000,
        body: data
    }
}

let pending_get = {}
let pending_post = {}
let pending_put = {}
let pending_delete = {}

export default Object.freeze  ({
    install(Vue) {
        Vue.prototype.$DOMAIN = process.env.VUE_APP_DOMAIN

        // PtopPoint
        Vue.prototype.$PTOPPOINT_WITHDRAW_REQUEST = "/ptoppoint/withdraw/request"
        Vue.prototype.$PTOPPOINT_CHARGE_REQUEST = "/ptoppoint/charge/request"

        //wallet
        Vue.prototype.$WALLET = "/wallet"
        Vue.prototype.$WALLET_WITHDRAW = "/wallet/withdraw"
        Vue.prototype.$WALLET_TRANSFER = "/wallet/transfer"
        Vue.prototype.$WALLET_BALANCE = "/wallet/balance"
        Vue.prototype.$WALLET_BALANCE_TICKER = "/wallet/balance/ticker"
        Vue.prototype.$WALLET_AVAILABLE = "/wallet/available"
        Vue.prototype.$WALLET_FEE = "/wallet/fee"
        Vue.prototype.$WALLET_ADDRESS_WITHDRAW = "/wallet/address/withdraw"

        //P2P USER
        Vue.prototype.$USER_MYPAGE_SECURITY_PIN = "/user/myPage/security/pin"
        Vue.prototype.$USER_MYPAGE_PROFILE_PASSWORD = "/user/myPage/profile/password"
        Vue.prototype.$USER_PTOP_FIND_PASSWORD_NEW = "/user/ptop/find/password/new"
        Vue.prototype.$USER_PTOP_SIGNUP = "/user/ptop/sign-up"
        Vue.prototype.$USER_PTOP_SIGNUP_SMS_CHECK = "/user/ptop/sign-up/sms/check"
        Vue.prototype.$USER_PTOP_SIGNUP_SMS_SEND = "/user/ptop/sign-up/sms/send"
        Vue.prototype.$USER_PTOP_SIGNUP_SMS_CERT = "/user/ptop/sign-up/sms/cert"
        // Vue.prototype.$USER_PTOP_SIGNUP_RECOMMENDER_CERT = "/user/ptop/sign-up/recommender/cert"
        Vue.prototype.$USER_PTOP_SIGNUP_EMAIL_SEND = "/user/ptop/sign-up/email/send"
        Vue.prototype.$USER_PTOP_SIGNUP_EMAIL_CERT = "/user/ptop/sign-up/email/cert"
        Vue.prototype.$USER_PTOP_SIGNUP_CHECK_EMAIL = "/user/ptop/sign-up/check-email"
        Vue.prototype.$PTOP_SIGNUP_CHECK_EMAIL = "/user/ptop/sign-up/check-email"
        Vue.prototype.$USER_PTOP_OAUTH_TOKEN = "/user/ptop/oauth/token"
        Vue.prototype.$USER_PTOP_LOGIN = "/user/ptop/login"
        Vue.prototype.$USER_PTOP_LOGIN_PIN = "/user/ptop/login/pin"
        // Vue.prototype.$USER_PTOP_FIND_PASSWORD_SMS = "/user/ptop/find/password/sms"
        // Vue.prototype.$USER_PTOP_FIND_PASSWORD_SMS_CERT = "/user/ptop/find/password/sms/cert"
        // Vue.prototype.$USER_PTOP_FIND_PASSWORD_EMAIL = "/user/ptop/find/password/email"
        // Vue.prototype.$USER_PTOP_FIND_EMAIL = "/user/ptop/find/email"
        // Vue.prototype.$USER_PTOP_FIND_EMAIL_CERT = "/user/ptop/find/email/cert"
        // Vue.prototype.$USER_PTOP_OAUTH_TOKENINFO = "/user/ptop/oauth/tokenInfo"
        Vue.prototype.$USER_PTOP_LOGOUT = "/user/ptop/logout"
        Vue.prototype.$USER_PTOP_CHANGE_PHONE = "/user/ptop/change/phone"
        Vue.prototype.$USER_PTOP_CHANGE_EMAIL = "/user/ptop/change/email"
        Vue.prototype.$USER_PTOP_SIGNUP_CHECKID = "/user/ptop/sign-up/check-id"


        Vue.prototype.$USER_PTOP_LOGIN_SMS_CERT = "/user/ptop/login/sms/cert"
        Vue.prototype.$USER_PTOP_LOGIN_SMS = "/user/ptop/login/sms"
        Vue.prototype.$USER_PTOP_LOGIN_OTP = "/user/ptop/login/otp"
        Vue.prototype.$USER_MYPAGE_SECURITY_SECOND_PIN = "/user/myPage/security/second/pin"
        Vue.prototype.$USER_MYPAGE_SECURITY_SECOND_PIN_CERT = "/user/myPage/security/second/pin/cert"
        Vue.prototype.$USER_MYPAGE_SECURITY_SECOND_PHONE = "/user/myPage/security/second/phone"
        Vue.prototype.$USER_MYPAGE_SECURITY_OTP = "/user/myPage/security/otp"
        Vue.prototype.$USER_MYPAGE_SECURITY = "/user/myPage/security"
        Vue.prototype.$USER_PTOP_UPGRADE_LEVEL = "/user/ptop/upgrade/level"

        //my-page
        Vue.prototype.$USER_MYPAGE_PROFILE_IMAGE = "/user/myPage/profile/image"
        Vue.prototype.$USER_MYPAGE_SECURITY_IDCARD = "/user/myPage/security/idCard"
        Vue.prototype.$USER_MYPAGE_QNA = "/user/myPage/qna"
        Vue.prototype.$USER_MYPAGE_OPTION_PAY = "/user/myPage/option/pay"
        Vue.prototype.$USER_MYPAGE_QNA_IMAGE = "/user/myPage/qna/image"
        Vue.prototype.$USER_MYPAGE_QNA_FORM = "/user/myPage/qna/form"
        Vue.prototype.$USER_MYPAGE_QNA_DETAIL = "/user/myPage/qna/detail"
        Vue.prototype.$USER_MYPAGE_PROFILE = "/user/myPage/profile"
        Vue.prototype.$USER_MYPAGE_PROFILE_IMAGE_USERS = "/user/myPage/profile/image/users"
        Vue.prototype.$USER_MYPAGE_LOGIN_LOG = "/user/myPage/login/log"

        // P2P
        Vue.prototype.$PTOP_TRADE = "/ptop/trade"
        Vue.prototype.$PTOP_TRADE_TRANSFER = "/ptop/trade/transfer"
        Vue.prototype.$PTOP_TRADE_LOG = "/ptop/trade/log"
        Vue.prototype.$PTOP_TRADE_LIST = "/ptop/trade/list"
        Vue.prototype.$PTOP_TRADE_DEPOSIT = "/ptop/trade/deposit"
        Vue.prototype.$PTOP_TRADE_COMMENT = "/ptop/trade/comment"
        Vue.prototype.$PTOP_TRADE_CHAT = "/ptop/trade/chat"
        Vue.prototype.$PTOP_TRADE_CHAT_UPLOAD = "/ptop/trade/chat/upload"
        Vue.prototype.$PTOP_TRADE_CANCEL = "/ptop/trade/cancel"
        Vue.prototype.$PTOP_OFFER = "/ptop/offer"
        Vue.prototype.$PTOP_OFFER_LIST = "/ptop/offer/list"
        Vue.prototype.$PTOP_OFFER_DELETE = "/ptop/offer/delete"
        Vue.prototype.$PTOP_OFFER_CANCEL = "/ptop/offer/cancel"
        Vue.prototype.$PTOP_LIST = "/ptop/list"
        Vue.prototype.$PTOP_TRADE_PRICE = "/ptop/trade/price"
        Vue.prototype.$PTOP_TRADE_PAY = "/ptop/trade/pay"
        Vue.prototype.$PTOP_TRADE_CHAT_DOWNLOAD = "/ptop/trade/chat/download"
        Vue.prototype.$PTOP_MARKUP = "/ptop/markup"
        // Vue.prototype.$PTOP_FEE = "/ptop/fee"
        Vue.prototype.$PTOP_OFFER_EDIT = "/ptop/offer/edit"
        Vue.prototype.$PTOP_ACCOUNT = "/ptop/account"
        Vue.prototype.$PTOP_TIER = "/ptop/tier"
        Vue.prototype.$PTOP_REWARD = "/ptop/reward"
        Vue.prototype.$PTOP_REWARD_TOTAL = "/ptop/reward/total"
        Vue.prototype.$PTOP_REWARD_CONVERT = "/ptop/reward/convert"
        Vue.prototype.$PTOP_SERVER_TIME = "/ptop/server/time"
        Vue.prototype.$PTOP_LIMIT = "/ptop/limit"
        Vue.prototype.$PTOP_ADMIN_CHAT = "/ptop/admin/chat"
        Vue.prototype.$PTOP_ADMIN_CHAT_UPLOAD = "/ptop/admin/chat/upload"

        // MAIN
        Vue.prototype.$MAIN_COUNTRY = "/main/country"
        Vue.prototype.$MAIN_COIN = "/main/coin"
        Vue.prototype.$MAIN_ = "/main/"
        Vue.prototype.$MAIN_NICKNAME = "/main/nickname"
        Vue.prototype.$MAIN_FIAT = "/main/fiat"
        Vue.prototype.$MAIN_PROFILE_IMAGE_QR_WE = "/main/profile/image/qr/we"
        Vue.prototype.$MAIN_PROFILE_IMAGE_QR_ALI = "/main/profile/image/qr/ali"
        Vue.prototype.$MAIN_PROFILE_IMAGE_QR = "/main/profile/image/qr"
        Vue.prototype.$MAIN_TIMER = "/main/timer"
        Vue.prototype.$MAIN_UNC = "/main/unc"


        // board
        Vue.prototype.$USER_BAORD_BOARD = "/user/board/board"
        Vue.prototype.$USER_BAORD_BOARD_FORM = "/user/board/board/form"
        Vue.prototype.$USER_BAORD_BOARD_DETAIL = "/user/board/board/detail"
        Vue.prototype.$USER_BAORD_POPUP = "/user/board/popup"

        // 구매
        Vue.prototype.$PTOP_SALES_CARD = "/ptop/sales/card"
        Vue.prototype.$PTOP_SALES_CARD_COST = "/ptop/sales/card/cost"
        Vue.prototype.$PTOP_SALES_UPGRADE_COST = "/ptop/sales/upgrade/cost"
        Vue.prototype.$PTOP_SALES_UPGRADE = "/ptop/sales/upgrade"
        Vue.prototype.$PTOP_SALES_CARD_USE = "/ptop/sales/card/use"
        Vue.prototype.$PTOP_SALES_CARD_REDEEM = "/ptop/sales/card/redeem"
        Vue.prototype.$PTOP_SALES_CARD_REDEEM_LIST = "/ptop/sales/card/redeem/list"
        Vue.prototype.$PTOP_SALES_MINER_COST = "/ptop/sales/miner/cost"
        Vue.prototype.$PTOP_SALES_MINER = "/ptop/sales/miner"
        Vue.prototype.$PTOP_SALES_CARD_REDEEM_FEE = "/ptop/sales/card/redeem/fee"
        Vue.prototype.$PTOP_SALES_CARD_REDEEM_PRICE = "/ptop/sales/card/redeem/price"
        Vue.prototype.$PTOP_SALES_CARD_TYPE = "/ptop/sales/card/type"
        Vue.prototype.$PTOP_SALES_UPGRADE_HISTORY = "/ptop/sales/upgrade/history"
        Vue.prototype.$PTOP_SALES_MINER_HISTORY = "/ptop/sales/miner/history"
        Vue.prototype.$PTOP_SALES_CARD_HISTORY = "/ptop/sales/card/history"
        Vue.prototype.$PTOP_SALES_MINER_INPUT_LIST = "/ptop/sales/miner/input/list"
        Vue.prototype.$PTOP_SALES_MINER_INPUT = "/ptop/sales/miner/input"
        Vue.prototype.$PTOP_SALES_MINER_GUARANTEE_LIST = "/ptop/sales/miner/guarantee/list"
        Vue.prototype.$PTOP_SALES_MINER_GUARANTEE = "/ptop/sales/miner/guarantee"
        Vue.prototype.$PTOP_SALES_MINER_PRICE = "/ptop/sales/miner/price"
        Vue.prototype.$PTOP_SALES_BALANCE_FIL = "/ptop/sales/balance/fil"
        Vue.prototype.$PTOP_SALES_WITHDRAW_FIL = "/ptop/sales/withdraw/fil"
        Vue.prototype.$PTOP_SALES_CARD_PRICE = "/ptop/sales/card/price"
        Vue.prototype.$PTOP_SALES_COLDWALLET = "/ptop/sales/coldWallet"
        Vue.prototype.$PTOP_SALES_COLDWALLET_PRICE = "/ptop/sales/coldWallet/price"
        Vue.prototype.$PTOP_SALES_MINER_EXPEND = "/ptop/sales/miner/expand"

        // 채굴기
        Vue.prototype.$MINER_SALES_LIST = "/miner/sales/list"
        Vue.prototype.$MINER_CONTRACT = "/miner/contract"
        Vue.prototype.$MINER_OUTPUT_AMOUNT = "/miner/output/amount"
        Vue.prototype.$MINER_OUTPUT_LIST = "/miner/output/list"

        Vue.prototype.$post = async function (callUrl, caller, postData, useToken, success, fail){
            console.log(arguments[0])
            if (pending_post[arguments[0] + caller]) {
                return
            }
            pending_post[arguments[0] + caller] = true
            let _requestOption = requestOption()
            if (useToken) {
                let token = localStorage.getItem('accessToken')
                if (token && token.length > 0) {
                    _requestOption = requestOptionWithToken()
                } else {
                    this.$router.replace({name: 'Login'})
                }
            }
            axios.post(this.$DOMAIN + callUrl, postData, _requestOption).then((response) => {
                pending_post[arguments[0] + caller] = false
                if(!response.data.result) {
                    if(response.data.message) {
                        this.notify('error', response.data.message)
                    } else if(response.data.error.length) {
                        this.notify('error', response.data.error[0].field + ': ' + response.data.error[0].message)
                    }
                    return
                }
                success(response.data)
            }).catch(e => {
                pending_post[arguments[0] + caller] = false
                console.log(e)
                fail(e.response.data)

                if(e.response.data.status === 403 || e.response.data.status === 401) {
                    this.$router.replace({name: 'Login'})
                    localStorage.removeItem('accessToken')
                    this.$store.state.isLoggedIn = false
                }

            })
        }

        Vue.prototype.$get = async function (callUrl, caller, useToken, success, fail){
            console.log(arguments[0])
            if (pending_get[arguments[0] + caller]) {
                return
            }
            pending_get[arguments[0] + caller] = true
            let _requestOption = requestOption()
            if (useToken) {
                let token = localStorage.getItem('accessToken')
                if (token && token.length > 0) {
                    _requestOption = requestOptionWithToken()
                } else {
                    this.$router.replace({name: 'Login'})
                }
            }
            axios.get(this.$DOMAIN + callUrl, _requestOption).then((response) => {
                pending_get[arguments[0] + caller] = false
                if(!response.data.result) {
                    this.notify('error', response.data.message)
                    return
                }
                success(response.data)
            }).catch(e => {
                pending_get[arguments[0] + caller] = false
                fail(e.response.data)
                if(e.response.data.status === 403 || e.response.data.status === 401) {
                    this.$router.replace({name: 'Login'})
                    localStorage.removeItem('accessToken')
                    this.$store.state.isLoggedIn = false
                }
            })
        }

        Vue.prototype.$put = async function (callUrl, caller, postData, useToken, success, fail){
            console.log(arguments[0])
            if (pending_put[arguments[0] + caller]) {
                return
            }
            pending_put[arguments[0] + caller] = true
            let _requestOption = requestOption()
            if (useToken) {
                let token = localStorage.getItem('accessToken')
                if (token && token.length > 0) {
                    _requestOption = requestOptionWithToken()
                } else {
                    this.$router.replace({name: 'Login'})
                }
            }
            axios.put(this.$DOMAIN + callUrl, postData, _requestOption).then((response) => {
                pending_put[arguments[0] + caller] = false
                if(!response.data.result) {
                    this.notify('error', response.data.message)
                    return
                }
                success(response.data)
            }).catch(e => {
                pending_put[arguments[0] + caller] = false
                fail(e.response.data)
                if(e.response.data.status === 403 || e.response.data.status === 401) {
                    this.$router.replace({name: 'Login'})
                    localStorage.removeItem('accessToken')
                    this.$store.state.isLoggedIn = false
                }
            })
        }

        Vue.prototype.$axios_delete = async function (callUrl, caller, useToken, success, fail){
            console.log(arguments[0])
            if (pending_delete[arguments[0] + caller]) {
                return
            }
            pending_delete[arguments[0] + caller] = true

            let _requestOption = requestOption()
            if (useToken) {
                let token = localStorage.getItem('accessToken')
                if (token && token.length > 0) {
                    _requestOption = requestOptionWithToken()
                } else {
                    this.$router.replace({name: 'Login'})
                }
            }
            axios.delete(this.$DOMAIN + callUrl, _requestOption).then((response) => {
                pending_delete[arguments[0] + caller] = false
                if(!response.data.result) {
                    this.notify('error', response.data.message)
                    return
                }
                success(response.data)
            }).catch(e => {
                pending_delete[arguments[0] + caller] = false
                fail(e.response.data)
                if(e.response.data.status === 403 || e.response.data.status === 401) {
                    this.$router.replace({name: 'Login'})
                    localStorage.removeItem('accessToken')
                    this.$store.state.isLoggedIn = false
                }
            })
        }

        Vue.prototype.$download = function (callUrl, caller, useToken, success, fail){
            console.log(arguments[0])
            if (pending_delete[arguments[0] + caller]) {
                return
            }
            pending_delete[arguments[0] + caller] = true

            let _requestOption = requestOptionForDownload()
            if (useToken) {
                let token = localStorage.getItem('accessToken')
                if (token && token.length > 0) {
                    _requestOption = requestOptionWithTokenForDownload()
                } else {
                    this.$router.replace({name: 'Login'})
                }
            }
            axios.get(this.$DOMAIN + callUrl, _requestOption).then(response => {
                pending_get[arguments[0] + caller] = false
                if (response.headers['content-type'] === 'application/octet-stream') {
                    success(response)
                } else {
                    fail(response.data)
                }
            }).catch(e => {
                pending_get[arguments[0] + caller] = false
                fail(e.response)
                if(e.response.data.status === 403 || e.response.data.status === 401) {
                    this.$router.replace({name: 'Login'})
                    localStorage.removeItem('accessToken')
                    this.$store.state.isLoggedIn = false
                }
            })
        }
        Vue.prototype.$fileDownload = function (response){
            let filename = response.headers['content-disposition'].split('filename=')[1].split('"')[1]
            const url = window.URL.createObjectURL(new Blob([response.data]))
            const link = document.createElement('a')
            link.href = url
            link.setAttribute('download', filename)
            link.innerText = '다운로드'
            return [link, filename]
        }

        Vue.prototype.$postJson = async function (callUrl, caller, method, data, success, fail){
            console.log(arguments[0])
            if (pending_post[arguments[0] + caller]) {
                return
            }
            pending_post[arguments[0] + caller] = true
            let _requestOption = requestOptionWithTokenForJson(method, data)

            fetch(this.$DOMAIN + callUrl, _requestOption)
                .then(response => {
                    pending_post[arguments[0] + caller] = false
                    success(response)
                }).catch(e => {
                    pending_post[arguments[0] + caller] = false
                    fail(e)
            })
        }

        Vue.prototype.$getJson = async function (callUrl, caller, method, success, fail){
            console.log(arguments[0])
            if (pending_post[arguments[0] + caller]) {
                return
            }
            pending_post[arguments[0] + caller] = true
            let _requestOption = requestOptionWithTokenForJson(method)

            fetch(this.$DOMAIN + callUrl, _requestOption)
                .then(response => {
                    pending_post[arguments[0] + caller] = false
                    let promise = new Promise(resolve => {
                        resolve(response.json())
                    })
                    promise.then((result) => {
                        success(result)
                    })
                }).catch(e => {
                pending_post[arguments[0] + caller] = false
                fail(e)
            })
        }
    }
})
