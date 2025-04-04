import React from 'react'
import SearchBar from './../components/SearchBar';


const RecipeDetails = () => {
  return (
    
   <>
   <div className='bg-[#e9b08e] p-4'><SearchBar /></div>
    <div className='flex flex-row'>
      <div className=' m-4  bg-gray rounded'>
        
        <img className='w-96 h-96' src="src/images/pizza.jpg" alt="" />
      </div>
      <div>
        <h1 className='font-bold'>Spaghetti Carbonara</h1>
        <div className=''>
          <div className='flex flex-row p-4 ml-4'>
            <div><h2 className='font-bold'>Ingredients:</h2>
            <ul className='list-disc list-inside'><li>200g spaghetti</li>
            <li>100g pancetta</li>
            <li>2 eggs</li>
            <li>1/2 cup of pamesan cheese</li>
            <li>2 cloves garlic (minced)</li>
            <li>salt and black pepper to taste</li>
            </ul></div>
            <div><h2 className='font-bold'>Additional Info:</h2>
            <span className='font-bold'> Cooking time:</span> 20mins <br />
            <span className='font-bold'> serving size:</span> 2 serving <br />
            <span className='font-bold'> Calories:</span> -500kcal per serving
            </div> </div>
            <div className='m-4 p-4'>
              <h2 className='font-bold' >Instructions</h2>
              <ol className='list-decimal list-inside'>
                <li>Cooking the spaghetti in salted water until al dente drain and set aside</li>
                <li>In a pan cook pancetta until crispy, add minced garlic and saute</li>
                <li>In a bowl whisk egg with pamesan cheese</li>
                <li>Toast spaghetti with pancetta and remove from heat. stir in the egg mixture</li>
                <li>Season with salt and pepper. serve immediatly with extra parmesan on top</li>
              </ol>
              
             
              
              
            
            </div>
        </div>
        
      </div>
    </div>
   </>
  )
}

export default RecipeDetails
