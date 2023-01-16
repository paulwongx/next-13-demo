import Link from 'next/link'
import React, { Suspense } from 'react'
import TodosList from './(users)/todos/TodosList'

const Home = () => {
  return (
    <div className="text-black-900 flex flex-col">
      <h2>I am the home page</h2>
      <Link href="/todos">Todos</Link>
      <Link href="/search">Search</Link>
      <Suspense fallback={<h2 className="text-red-500">Loading the Todos</h2>}>
        <h2>Loading Todos</h2>
        <div className="flex space-x-2">
          {/* @ts-expect-error */}
          <TodosList />
        </div>
      </Suspense>
      <Suspense fallback={<h2 className="text-blue-500">Loading Shopping Trolley</h2>}>
        <h2>Loading Shopping Trolley</h2>
        <div className="flex space-x-2">
          {/* @ts-expect-error */}
          <TodosList />
        </div>
      </Suspense>
    </div>
  )
}

export default Home