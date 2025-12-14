import { Link } from 'react-router-dom'


export default function Navbar() {
return (
<nav class="bg-pink-600 text-white px-6 py-4 flex justify-between">
<h1 class="font-bold text-xl">🍬 Sweet Shop</h1>
<div class="space-x-4">
<Link to="/dashboard">Dashboard</Link>
<Link to="/admin">Admin</Link>
<Link to="/login">Logout</Link>
</div>
</nav>
)
}