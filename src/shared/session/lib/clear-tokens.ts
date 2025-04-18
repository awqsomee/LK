import { BrowserStorageKey } from '@shared/consts/browser-storage-key'

export const clearTokens = () => {
    localStorage.removeItem(BrowserStorageKey.Token)
    localStorage.removeItem(BrowserStorageKey.JWT)
    localStorage.removeItem(BrowserStorageKey.JWTRefresh)

    sessionStorage.removeItem(BrowserStorageKey.Token)
    sessionStorage.removeItem(BrowserStorageKey.JWT)
    localStorage.removeItem(BrowserStorageKey.JWTRefresh)
}
