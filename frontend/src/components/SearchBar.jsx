export default function SearchBar({ onSearch }) {
return (
<input
type="text"
placeholder="Search sweets..."
class="w-full p-2 border rounded"
onChange={(e) => onSearch(e.target.value)}
/>
)
}