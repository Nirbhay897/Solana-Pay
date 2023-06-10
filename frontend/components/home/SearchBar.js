import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

const SearchBar = () => {
    return (
        <div className="border-b bg-black border-gray-200 px-6 py-4">
            <div className="flex items-center space-x-3">
                <MagnifyingGlassIcon className="h-5 w-5 text-[#15ec3c]" />
                <input className="flex-1 text-[#15ec3c] outline-none" type="text" placeholder="Search" />
            </div>
        </div>
    )
}

export default SearchBar
