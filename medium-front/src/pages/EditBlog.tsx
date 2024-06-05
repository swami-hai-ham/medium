import MenuBar from "../components/MenuBar"
import extensions from '../extensions'
import { useEditor, EditorContent } from '@tiptap/react'
import { useState } from "react";

const content = `
<h2>
  Hi there,
</h2>
<p>
  this is a <em>basic</em> example of <strong>tiptap</strong>. Sure, there are all kind of basic text styles you'd probably expect from a text editor. But wait until you see the lists:
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
  const [output, setOutput] = useState("");
  const editor = useEditor({
    extensions,
    injectCSS:false,
    editorProps: {
      attributes: {
        class: 'prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none px-14 mb-5',
    }},
    content,
  });

  const handleGetContent = () => {
    const html = editor?.getHTML();
    setOutput(html || "");
    if (editor) {
      editor.commands.setContent(html || "");
    }
  };

  return (
    <div className="">
      {editor ? (
        <MenuBar editor={editor} />
      ) : (
        <div>Loading...</div>
      )}
      <EditorContent editor={editor} />
      {editor && (
        <button onClick={handleGetContent} className="bg-red-400 p-2 rounded-md ml-14 mb-5">
          Get Content guys
        </button>
      )}
      {output}
    </div>
  );
};

export default EditBlog;