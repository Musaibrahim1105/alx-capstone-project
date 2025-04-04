import React from 'react'
import RecipeCard from '../components/RecipeCard'
import Hero from '../components/Hero'
import RecipeDetails from './RecipeDetails'


const Home = () => {
  return (
    <div>
        <Hero/>
<RecipeCard />
<RecipeDetails/>
    </div>
  )
}

export default Home
