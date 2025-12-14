import { useState } from 'react'
import api from '../api/axios'


export default function Register() {
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')


const submit = async () => {
await api.post('/auth/register', { email, password })
alert('Registered successfully')
}


return (
<div class="flex justify-center mt-20">
<div class="bg-white p-6 rounded shadow w-80">
<h2 class="text-xl font-bold mb-4">Register</h2>
<input class="w-full p-2 mb-2 border" placeholder="Email" onChange={e=>setEmail(e.target.value)} />
<input type="password" class="w-full p-2 mb-4 border" placeholder="Password" onChange={e=>setPassword(e.target.value)} />
<button onClick={submit} class="bg-green-600 w-full text-white p-2 rounded">Register</button>
</div>
</div>
)
}