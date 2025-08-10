import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import './index.css'
import App from './App'
import AuthLayout from './routes/AuthLayout'
import Register from './routes/Register'
import Login from './routes/Login'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />

      <Route element={<AuthLayout />}>
        <Route path="register" element={<Register />}/>
        <Route path="login" element={<Login />}/>
      </Route>
    </Routes>
  </BrowserRouter>,
)
