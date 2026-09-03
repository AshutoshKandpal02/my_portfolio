import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-slate-900 text-white gap-6">
      <h1 className="text-4xl font-extrabold text-sky-400 drop-shadow-md">
        Tailwind v4 + Vite is Working!
      </h1>
      
      <p className="text-slate-400 text-lg">
        Edit <code className="text-sky-300 bg-slate-800 px-2 py-1 rounded">src/App.jsx</code> to build your layout.
      </p>

      <button
        onClick={() => setCount((count) => count + 1)}
        className="px-6 py-3 bg-sky-500 hover:bg-sky-600 active:scale-95 font-bold rounded-lg transition shadow-lg shadow-sky-500/20"
      >
        Count is {count}
      </button>
    </div>
  )
}

export default App
