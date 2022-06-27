import { isDevMode } from '@/utils/env'

// System default cache time, in seconds
export const DEFAULT_CACHE_TIME = 60 * 60 * 24 * 7

export const enableStorageEncryption = !isDevMode()

// aes encryption key
export const cacheCipher = {
  key: '_11111000001111@',
  iv: '@11111000001111_'
}
