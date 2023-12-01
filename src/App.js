import { ThemeProvider } from '@emotion/react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import ProtectedRoute from './Components/Authentication/ProtectedRoute'
import { Home } from './Components/Mainpage/Home'
import Info from './Components/Mainpage/Info/info'
import { Urls } from './Components/Mainpage/Urls.js'



function App() {
  
  const Theme = useSelector((state)=>state.theme)

  return (
    <ThemeProvider theme={Theme}>
        <div className="App">
          <div style={{margin:"0",padding:'2rem' ,backgroundColor:Theme.palette.background.default ,color:Theme.palette.primary.light}}>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/urls' element={<ProtectedRoute><Urls/></ProtectedRoute>}/>
            <Route path='/info' element={<Info/>}/>
          </Routes>
          </div>
        </div>
    </ThemeProvider>
  )
}

export default App