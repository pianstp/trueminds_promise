export default function SearchBar() {
  return (
    <div className="max-w-3xl mx-auto -mt-8 relative z-20 px-6">
      <div className="bg-white rounded-lg shadow-lg p-4 flex items-center gap-3">
        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input 
          type="text"
          placeholder="What are you craving for today?"
          className="flex-1 border border-gray-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
      </div>
    </div>
  )
}
