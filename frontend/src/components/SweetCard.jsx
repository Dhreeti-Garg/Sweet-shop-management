export default function SweetCard({ sweet, onPurchase }) {
return (
<div class="bg-white shadow rounded p-4">
<h3 class="font-bold text-lg">{sweet.name}</h3>
<p>{sweet.category}</p>
<p>₹{sweet.price}</p>
<p>Stock: {sweet.quantity}</p>
<button
disabled={sweet.quantity === 0}
onClick={() => onPurchase(sweet.id)}
class="mt-2 bg-green-500 text-white px-3 py-1 rounded disabled:bg-gray-400"
>
Purchase
</button>
</div>
)
}