import React from 'react'


const RecipeDetails = () => {
  return (
    <div>
      <div className='w-[600px] h-[200px] m-4  bg-[#e9b08e] rounded'>
        
        <img src="src/images/pizza.jpg" alt="" />
      </div>
      <div>
        <h1>Spaghetti Carbonara</h1>
        <div className='flex flex-row justify-between'></div>
          <div className='flex flex-col'>
            <div><h2>Ingredients:</h2>
            <ul><li></li>
            <li></li>
            <li></li>
            <li></li></ul></div>
            <div><h2>Additional Info:</h2></div>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default RecipeDetails
