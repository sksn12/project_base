import { SerachIcon } from 'assets/svgs'
import { ChangeEvent, FormEvent } from 'react'
import { useRecoilState } from 'recoil'
import { SerachState } from 'states/state'
import Result from '../result/result'
import styles from './input.module.scss'

// Input 코드 길어질까봐 result분리 짧으면 병합
const Input = () => {
  const [serachState, setSerachState] = useRecoilState(SerachState)

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget
    setSerachState(value)
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <>
      <form className={styles.inputBox} onSubmit={onSubmit}>
        <div className={styles.iconBox}>
          <SerachIcon width='20px' height='20px' />
        </div>
        <input
          placeholder='질환명을 입력해 주세요.'
          type='text'
          className={styles.input}
          value={serachState}
          onChange={onChange}
        />
        <button type='button' className={styles.btn}>
          검색
        </button>
      </form>
      {serachState && (
        <div className={styles.resultBox}>
          <Result />
        </div>
      )}
    </>
  )
}

export default Input
