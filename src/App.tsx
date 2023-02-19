import {Route, Routes} from 'react-router-dom'

import { IndexPage } from './pages/IndexPage'
import { SchedulePage } from './pages/SchedulePage'

import './css/main.css'
import './css/color-light.css'
function App() {
  return (
      <Routes>
        <Route path="/" element={<IndexPage />}/>
        <Route path="/schedule" element={<SchedulePage />}/>
      </Routes>
  )
}

export default App