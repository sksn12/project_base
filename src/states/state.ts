import { atom } from 'recoil'
import { ResponseBodyType } from 'types/project'

export const SerachState = atom<string | undefined>({
  key: 'serachState',
  default: '',
})

export const SerachResultState = atom<ResponseBodyType | undefined>({
  key: 'serachResultState',
  default: undefined,
})
