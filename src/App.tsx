import { Header } from '@components/Layout/Header'
import { SearchBar } from '@components/SearchBar'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import { Card } from '@components/Layout/Card'


export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <SearchBar />
        <Routes>
          <Route path='/' element={<Card />} />
          <Route path='/:username' element={<Card />} />
        </Routes>
        <Outlet />
      </BrowserRouter>
    </>

  )
}
