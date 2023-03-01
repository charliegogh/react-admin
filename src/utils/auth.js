import Cookies from 'js-cookie'
const TokenKey = 'token'
export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  // 30分钟失效
  return Cookies.set(TokenKey, token
    // {
    // expires: 1 / 48
    // }
  )
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
