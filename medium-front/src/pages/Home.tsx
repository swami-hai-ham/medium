import { useEffect } from 'react'
import BlogComp from '../components/BlogComp'
import Filter from '../components/Filter'
import Nav from '../components/Nav'

const Home = () => {
  useEffect(() => {
    
  }, [])
  return (
    <div>
      <Nav />
      <Filter />
      <BlogComp author='Atharva' createdAt='6 May' id='4' title='How to get good at Dev'/>
    </div>
  )
}

export default Home