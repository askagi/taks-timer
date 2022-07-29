import { Route, Routes } from 'react-router-dom'
import { History } from './pages/History'
import { Home } from './pages/Home'

export function Router() {
  return (
    <Routes>
      <Route path="/">
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
      </Route>
      <Route path="/history" element={<History />} />
    </Routes>
  )
}
