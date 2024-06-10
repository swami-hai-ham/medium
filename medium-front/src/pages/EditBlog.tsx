import { useEffect, useState } from "react";
import MenuBar from "../components/MenuBar"
import extensions from '../extensions'
import { useEditor, EditorContent } from '@tiptap/react'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";

const content = `
<h2>
  Hi there,
</h2>
<p>
  this is a <em>basic</em> example of <strong>article</strong>. Sure, there are all kind of basic text styles you'd probably expect from a text editor. But wait until you see the lists:
</p>
<ul>
  <li>
    That's a bullet list with one …
  </li>
  <li>
    … or two list items.
  </li>
</ul>
<p>
  Isn't that great? And all of that is editable. But wait, there's more. Let's try a code block:
</p>
<pre><code class="language-css">body {
display: none;
}</code></pre>
<p>
  I know, I know, this is impressive. It's only the tip of the iceberg though. Give it a try and click a little bit around. Don't forget to check the other examples too.
</p>
<blockquote>
  Wow, that's amazing. Good work, boy 👏
  <br />
  — Mom
</blockquote>
`;

const EditBlog = () => {

  const [title, setTitle] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if(!token){
      navigate('/signup')
    }
  }, [navigate])

  const editor = useEditor({
    extensions,
    injectCSS:false,
    editorProps: {
      attributes: {
        class: 'prose prose-sm sm:prose lg:prose-lg xl:prose-2xl border-4 border-black m-4 px-14  mb-5',
    }},
    content,
  });

  const handleGetContent = () => {
    setLoading(true);
    const html = editor?.getHTML();
    if (editor) {
      editor.commands.setContent(html || "");
    }

    axios.post("https://medium-back.swamiatharva15104.workers.dev/api/v1/blog",{
        "title": title == "" ? "New Blog": title,
        "content": html
    }, {
      headers:{
        "Authorization": `Bearer ${localStorage.getItem('token')}`
      }
    } ).then(response => {
      console.log(response.data)
      navigate(`/blog/${response.data.id}`)
    })
  };

  return (
    <div className="">
      <div className="flex justify-center items-start h-auto w-screen m-3 p-6 flex-col">
        <div className="font-athiti font-bold text-4xl m-4">{title == "" ? "New Blog": title}</div>
        <div className="font-athiti font-bold text-xl m-4">Title:</div>
        <input type="text" className="w-[95%] border-black border-4 text-xl p-4 font-mono font-bold" placeholder="Title" onChange={(e) => {setTitle(e.target.value)}}/>
        {title == ""? <div className="m-1 text-red-600"> Title cannot be empty</div>: ""}
        <div className="font-athiti font-bold text-xl mt-6 ml-4">Content:</div>
      </div>
      {editor ? (
        <MenuBar editor={editor} />
      ) : (
        <div>Loading...</div>
      )}
      <EditorContent editor={editor} />
      {editor && (
        <button onClick={handleGetContent} className="bg-[#2a1f0b] p-[10px] rounded-md ml-14 mb-5 text-white text-lg font-mono font-semibold hover:bg-black hover:text-[#ff9604]">
          {loading ? <Spinner /> : "Publish"}
        </button>
      )}
    </div>
  );
};

export default EditBlog;