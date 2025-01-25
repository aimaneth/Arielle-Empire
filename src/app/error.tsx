'use client'

export default function Error() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-white">Something went wrong!</h2>
        <button 
          onClick={() => window.location.reload()}
          className="mt-4 px-4 py-2 bg-purple-600 rounded-lg"
        >
          Try again
        </button>
      </div>
    </div>
  )
} 