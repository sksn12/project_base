// import styles from './Routes.module.scss'
import MainPage from 'pages/mainPage'
import { Route, Routes, BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='*' element={<div>404</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
