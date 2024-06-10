import { EditorProvider} from '@tiptap/react'
import { Color } from '@tiptap/extension-color'
import ListItem from '@tiptap/extension-list-item'
import TextStyle from '@tiptap/extension-text-style'
import StarterKit from '@tiptap/starter-kit'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import axios from 'axios'

const extensions = [
  Color.configure({ types: [TextStyle.name, ListItem.name] }),
  TextStyle.configure(),
  StarterKit.configure({
    bulletList: {
      keepMarks: true,
      keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
    },
    orderedList: {
      keepMarks: true,
      keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
    },
  }),
]


const Blog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [blog, setBlog] = useState({ id: "",title: "", content: "", authorId:"", createdAt: ""});
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    const token = localStorage.getItem('token');
    if(!token){
      navigate('/signup')
    }else{
      axios.get(`https://medium-back.swamiatharva15104.workers.dev/api/v1/blog/${id}`, {headers:{
        "Authorization": `Bearer ${localStorage.getItem('token')}`
      }}).then(response => {
        console.log(response.data);
        setBlog(response.data.blog);
        setTitle(response.data.blog.title);
        setContent(response.data.blog.content);
      })
    }
  }, [id, navigate])
  
  if (content == "") {
    return <div>Loading...</div>; // Or any other loading indicator
  }
  return (
    blog && <div className='m-10'>
      <div className="flex justify-center items-start h-auto w-[90%] m-3 p-6 flex-col bg-gray-300">
        <div className="font-athiti font-bold text-4xl m-4">{title}</div>
      </div>
      <EditorProvider extensions={extensions} content={content} editable={false} injectCSS={false} editorProps={{
        attributes:{
          class:"prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none px-14"
        }
      }}/>
    </div>
  )
}

export default Blog