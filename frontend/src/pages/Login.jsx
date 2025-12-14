import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../api/axios'
import { AuthContext } from '../context/AuthContext'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { login } = useContext(AuthContext)
  const navigate = useNavigate()

  const submit = async () => {
    try {
      const res = await api.post('/auth/login', { email, password })
      login(res.data)
      navigate('/dashboard')   // 🔥 REDIRECT AFTER LOGIN
    } catch (err) {
      setError('Invalid email or password')
      console.error(err)
    }
  }

  return (
    <div className="flex justify-center mt-20">
      <div className="bg-white p-6 rounded shadow w-80">
        <h2 className="text-xl font-bold mb-4">Login</h2>

        {error && <p className="text-red-500 mb-2">{error}</p>}

        <input
          className="w-full p-2 mb-2 border"
          placeholder="Email"
          onChange={e => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="w-full p-2 mb-4 border"
          placeholder="Password"
          onChange={e => setPassword(e.target.value)}
        />

        <button
          onClick={submit}
          className="bg-pink-600 w-full text-white p-2 rounded"
        >
          Login
        </button>
      </div>
    </div>
  )
}
