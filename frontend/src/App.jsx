import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import AdminPanel from './pages/AdminPanel'
import Navbar from './components/Navbar'


export default function App() {
return (
<AuthProvider>
<BrowserRouter>
<Navbar />
<Routes>
<Route path="/login" element={<Login />} />
<Route path="/register" element={<Register />} />
<Route path="/dashboard" element={<Dashboard />} />
<Route path="/admin" element={<AdminPanel />} />
<Route path="*" element={<Navigate to="/login" />} />
</Routes>
</BrowserRouter>
</AuthProvider>
)
}