import React from 'react'

const SearchBar = () => {
  return (
    <div>
      <form action="">
  <input type="text" placeholder='Search for recipes' className='rounded p-4 m-4 w-[400px] h-[50px] text-black'/>
  <button className='bg-[#e9b08e] text-white rounded p-2 m-4'>Search</button>
</form>
    </div>
  )
}

export default SearchBar
