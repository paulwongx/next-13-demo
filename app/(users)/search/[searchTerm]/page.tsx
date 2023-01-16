import { Todo } from '@/typings'
import React from 'react'

type PageProps = {
  params: {
    searchTerm: string
  }
}

const search = async (searchTerm: string) => {
  if (searchTerm === "error") throw new Error("Oops! Something went wrong")
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos?search=${searchTerm}`)
  const searchResults:Todo[] = await res.json()
  return searchResults
}

const SearchResults = async ({ params: { searchTerm } }: PageProps) => {
  const searchResults = await search(searchTerm)
  return (
    <div>
      <p className="text-gray-500 text-sm">You searched for: {searchTerm} </p>

      <ol className="space-y-5 p-5">
        {searchResults.splice(0,10).map((todo) => (
          <li key={todo.id} className="list-decimal">
            <p className="text-gray-500 text-sm font-semibold">Title: {todo.title}</p>
            <p className="text-gray-500 text-sm">Completed: {todo.completed ? "Yes" : "No"}</p>
            <p className="text-gray-500 text-sm">By User: {todo.userId}</p>
          </li>
        ))}
      </ol>
    </div>

  )
}

export default SearchResults