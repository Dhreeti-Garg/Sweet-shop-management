import { useState } from 'react'
import api from '../api/axios'


export default function AdminPanel() {
const [name, setName] = useState('')
const [price, setPrice] = useState('')


const addSweet = async () => {
await api.post('/sweets', { name, price, quantity: 10, category: 'General' })
alert('Sweet Added')
}


return (
<div class="p-6 max-w-md">
<h2 class="text-xl font-bold mb-4">Admin Panel</h2>
<input class="w-full p-2 mb-2 border" placeholder="Sweet Name" onChange={e=>setName(e.target.value)} />
<input class="w-full p-2 mb-4 border" placeholder="Price" onChange={e=>setPrice(e.target.value)} />
<button onClick={addSweet} class="bg-blue-600 text-white px-4 py-2 rounded">Add Sweet</button>
</div>
)
}