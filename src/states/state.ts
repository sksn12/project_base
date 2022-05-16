import { atom } from 'recoil'

export const SerachState = atom<string | undefined>({
  key: 'serachState',
  default: '',
})
