import { useEffect, useState } from 'react'
import api from '../api/axios'
import SweetCard from '../components/SweetCard'
import SearchBar from '../components/SearchBar'


export default function Dashboard() {
const [sweets, setSweets] = useState([])


useEffect(() => {
api.get('/sweets').then(res => setSweets(res.data))
}, [])


const purchase = async (id) => {
await api.post(`/sweets/${id}/purchase`)
setSweets(prev => prev.map(s => s.id === id ? {...s, quantity: s.quantity-1} : s))
}


return (
<div class="p-6">
<SearchBar onSearch={() => {}} />
<div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
{sweets.map(s => (
<SweetCard key={s.id} sweet={s} onPurchase={purchase} />
))}
</div>
</div>
)
}