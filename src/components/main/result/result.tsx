import { SerachIcon } from 'assets/svgs'
import { useRef } from 'react'
import { useRecoilValue } from 'recoil'
import { SerachResultState } from 'states/state'
import styles from './result.module.scss'

const Result = () => {
  const serachResultState = useRecoilValue(SerachResultState)

  return (
    <ul className={styles.cotainer}>
      {serachResultState?.items.item.map((data) => {
        return (
          <li className={styles.item} key={`sickcd-key-${data.sickCd}`}>
            <div className={styles.iconBox}>
              <SerachIcon width='20px' height='20px' />
            </div>
            <p className={styles.title}>{data.sickNm} </p>
          </li>
        )
      })}
    </ul>
  )
}

export default Result

// function moveCells(direction: string) {
//   switch (direction) {
//     case 'up':
//       return
//     case 'down':
//       return
//     case 'left':
//       return
//     case 'right':
//       return

//     default:
//       break
//   }
// }

// window.addEventListener('keydown', (event) => {
//   if (event.key === 'ArrowUp') {
//     moveCells('up')
//   } else if (event.key === 'ArrowDown') {
//     moveCells('down')
//   } else if (event.key === 'ArrowLeft') {
//     moveCells('left')
//   } else if (event.key === 'ArrowRight') {
//     moveCells('right')
//   }
// })
