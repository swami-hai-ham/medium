import { useEffect, useState } from 'react'
import BlogComp from '../components/BlogComp'
import Nav from '../components/Nav'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Home = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    id: "",
    email: "",
    name: ""
  })
  const [blogs, setBlogs] = useState([{
    id: "",
    title: "",
    content: "",
    authorId: "",
    createdAt: "",
    author: {
      name:""
    }
  }]);
  useEffect(() => {
    const token = localStorage.getItem('token');
    if(!token){
      navigate('/signup')
    }else{
      axios.get("https://medium-back.swamiatharva15104.workers.dev/api/v1/user/user", {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      }).then(response => {
        console.log(response.data)
          setUser(response.data.user);
      })

      axios.get("https://medium-back.swamiatharva15104.workers.dev/api/v1/blog/bulk", {
        headers:{
          "Authorization": `Bearer ${token}`
        }
      }).then(response => {
        setBlogs(response.data.blogs)
      })
    }
  }, [navigate])
  return (
    <div className='h-screen'>
      <Nav id={user.id} name={user.name}/>
      {blogs.map((blog) => {
          return <BlogComp key={blog.id} title={blog.title} author={blog.author.name} createdAt={blog.createdAt.substring(0, 10)} id={blog.id} />
      })}
    </div>
  )
}

export default Home