import Footer from 'components/footer/footer'
import Header from 'components/header/header'
import Main from 'components/main/main'
import styles from './mainPage.module.scss'

const MainPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default MainPage
