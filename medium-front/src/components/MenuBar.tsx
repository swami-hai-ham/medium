import { Editor } from "@tiptap/react";

interface MenuBarProps {
    editor: Editor;
}


const MenuBar = ({editor}: MenuBarProps) => {
  
    if (!editor) {
      return null
    }
  
    return (
      <div className='m-2 p-2 grid grid-cols-10 lg:flex lg:justify-between lg:items-center bg-[#ff9604] rounded-md'>
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .toggleBold()
              .run()
          }
          className={editor.isActive('bold') ? 'is-active button' : 'button' }
        >
          <svg width="15" height="15" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.40625 11.625H0.625V0.375H5.9375C6.56385 0.375037 7.1771 0.554345 7.70482 0.891741C8.23253 1.22914 8.65264 1.71052 8.91554 2.27903C9.17843 2.84754 9.27312 3.47942 9.18841 4.10001C9.1037 4.72061 8.84314 5.30399 8.4375 5.78125C8.96733 6.20497 9.35279 6.78251 9.54082 7.43435C9.72886 8.0862 9.71022 8.7803 9.48748 9.42112C9.26474 10.0619 8.84884 10.6179 8.29704 11.0126C7.74524 11.4073 7.08466 11.6213 6.40625 11.625ZM2.5 9.75H6.39375C6.57842 9.75 6.76128 9.71363 6.9319 9.64296C7.10251 9.57229 7.25754 9.4687 7.38812 9.33812C7.5187 9.20754 7.62228 9.05251 7.69296 8.8819C7.76363 8.71128 7.8 8.52842 7.8 8.34375C7.8 8.15908 7.76363 7.97622 7.69296 7.8056C7.62228 7.63499 7.5187 7.47996 7.38812 7.34938C7.25754 7.2188 7.10251 7.11521 6.9319 7.04454C6.76128 6.97387 6.57842 6.9375 6.39375 6.9375H2.5V9.75ZM2.5 5.0625H5.9375C6.12217 5.0625 6.30503 5.02613 6.47565 4.95546C6.64626 4.88478 6.80129 4.7812 6.93187 4.65062C7.06245 4.52004 7.16604 4.36501 7.23671 4.1944C7.30738 4.02378 7.34375 3.84092 7.34375 3.65625C7.34375 3.47158 7.30738 3.28872 7.23671 3.1181C7.16604 2.94749 7.06245 2.79246 6.93187 2.66188C6.80129 2.5313 6.64626 2.42772 6.47565 2.35704C6.30503 2.28637 6.12217 2.25 5.9375 2.25H2.5V5.0625Z" fill="#212529"/></svg>
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .toggleItalic()
              .run()
          }
          className={editor.isActive('italic') ? 'is-active button' : 'button'}
        >
          <svg width="15" height="15" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.625 1.625V0.375H3.5V1.625H6.7125L3.98125 10.375H0.375V11.625H8.5V10.375H5.2875L8.01875 1.625H11.625Z" fill="#212529"/></svg>
        </button>
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .toggleStrike()
              .run()
          }
          className={editor.isActive('strike') ? 'is-active button' : 'button'}
        >
          <svg width="17" height="17" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.5 6.375H9.2225C8.94498 6.30038 8.66619 6.23058 8.38625 6.16562C6.63125 5.75062 5.63875 5.44687 5.63875 4.02625C5.6245 3.78101 5.66081 3.53546 5.74542 3.30484C5.83004 3.07422 5.96115 2.86345 6.13062 2.68562C6.6615 2.24906 7.32644 2.00851 8.01375 2.00437C9.7825 1.96062 10.5981 2.56063 11.265 3.47313L12.2744 2.73563C11.8019 2.0571 11.1578 1.51616 10.4078 1.16807C9.65779 0.819979 8.82884 0.67722 8.00563 0.754375C6.99439 0.760831 6.01887 1.12909 5.25563 1.7925C4.96634 2.08594 4.74024 2.43552 4.59125 2.8197C4.44227 3.20388 4.37356 3.6145 4.38937 4.02625C4.36197 4.4768 4.4466 4.92713 4.63572 5.33699C4.82483 5.74685 5.11254 6.10347 5.47312 6.375H0.5V7.625H9.0325C10.2619 7.98125 10.9969 8.445 11.0156 9.72375C11.0359 9.9969 10.9985 10.2713 10.9056 10.529C10.8128 10.7867 10.6667 11.0219 10.4769 11.2194C9.81551 11.7407 8.99384 12.0166 8.15188 12C7.52345 11.9818 6.90738 11.8209 6.35029 11.5295C5.7932 11.2382 5.30966 10.8239 4.93625 10.3181L3.97812 11.1206C4.46358 11.7676 5.08994 12.2955 5.80972 12.6645C6.52951 13.0334 7.32384 13.2336 8.1325 13.25H8.195C9.34924 13.2633 10.4695 12.8596 11.35 12.1131C11.6625 11.798 11.9054 11.4209 12.0632 11.0061C12.2209 10.5914 12.2898 10.1481 12.2656 9.705C12.289 8.94703 12.0332 8.20687 11.5469 7.625H15.5V6.375Z" fill="#212529"/></svg>
        </button>
        <button
          onClick={() => editor.chain().focus().toggleCode().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .toggleCode()
              .run()
          }
          className={editor.isActive('code') ? 'is-active button' : 'button'}
        >
          <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 8L3 11.6923L7 16M17 8L21 11.6923L17 16M14 4L10 20" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <button 
          onClick={() => editor.chain().focus().unsetAllMarks().run()}
          className={editor.isActive('paragraph') ? 'is-active button' : 'button'}>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.3988 9.3575L12.4081 4.36625C12.1736 4.13187 11.8556 4.00021 11.5241 4.00021C11.1925 4.00021 10.8745 4.13187 10.64 4.36625L7.29125 7.715L4.625 0.25H3.375L0.25 9H1.5L2.12438 7.125H5.87437L6.37625 8.63L1.86625 13.14C1.75012 13.2561 1.658 13.3939 1.59515 13.5456C1.5323 13.6973 1.49995 13.8599 1.49995 14.0241C1.49995 14.1883 1.5323 14.3508 1.59515 14.5025C1.658 14.6542 1.75012 14.792 1.86625 14.9081L4.7075 17.75H10.7013L17.3988 11.0519C17.5101 10.9406 17.5984 10.8085 17.6587 10.6631C17.719 10.5177 17.75 10.3618 17.75 10.2044C17.75 10.047 17.719 9.8911 17.6587 9.74568C17.5984 9.60026 17.5101 9.46814 17.3988 9.35687V9.3575ZM2.54063 5.875L3.9975 1.5L5.4575 5.875H2.54063ZM10.1844 16.5H5.225L2.75 14.0238L6.695 10.0794L11.65 15.0337L10.1844 16.5ZM12.5344 14.15L7.57938 9.19563L11.5244 5.25L16.4788 10.2044L12.5344 14.15Z" fill="#212529"/></svg>
        </button>
        <button 
        onClick={() => editor.chain().focus().clearNodes().run()}
        className={editor.isActive('paragraph') ? 'is-active button' : 'button'}>
        <svg version="1.1" id="Uploaded to svgrepo.com" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="20px" height="20px" viewBox="0 0 32 32" xmlSpace="preserve"><path className="puchipuchi_een" d="M16.707,13.707c-0.389-0.389-0.389-1.025,0-1.414l3.939-3.939l5,5l-3.939,3.939	c-0.194,0.194-0.451,0.292-0.707,0.292s-0.513-0.097-0.707-0.292L16.707,13.707z M26.707,3.707C26.513,3.513,26.256,3.415,26,3.415	s-0.513,0.097-0.707,0.292l-3.939,3.939l5,5l3.939-3.939c0.389-0.389,0.389-1.025,0-1.414L26.707,3.707z M27,13.414V29	c0,1.1-0.9,2-2,2H3c-1.1,0-2-0.9-2-2V3c0-1.1,0.9-2,2-2h22c0.988,0,1.809,0.728,1.967,1.673C26.673,2.51,26.346,2.415,26,2.415	c-0.535,0-1.037,0.208-1.414,0.585l-4,4H7C6.447,7,6,7.447,6,8s0.447,1,1,1h11.586l-2,2H7c-0.553,0-1,0.447-1,1s0.447,1,1,1h8.415	c0,0.535,0.208,1.037,0.585,1.414L19.586,18c0.377,0.377,0.879,0.585,1.414,0.585s1.037-0.208,1.414-0.585L27,13.414z M10,19H7	c-0.553,0-1,0.447-1,1s0.447,1,1,1h1L10,19z M12,17l2-2H7c-0.553,0-1,0.447-1,1s0.447,1,1,1H12z M22,24c0-0.553-0.447-1-1-1h-5l-2,2	h7C21.553,25,22,24.553,22,24z M22,20c0-0.553-0.447-1-1-1h-1l-2,2h3C21.553,21,22,20.553,22,20z"/></svg>
        </button>
        <button
          onClick={() => editor.chain().focus().setParagraph().run()}
          className={editor.isActive('paragraph') ? 'is-active button' : 'button'}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="20px" height="20px" viewBox="0 0 24 24"><path d="M9 13.9V21h3V5h3v16h3V5h3V3H9.1C5.9 3 3.3 5.3 3.3 8.4S6 13.9 9 13.9z"/></svg>
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          className={editor.isActive('heading', { level: 1 }) ? 'is-active button font-bold' : 'button font-bold'}
        >
          H1
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={editor.isActive('heading', { level: 2 }) ? 'is-active button font-bold' : 'button font-bold'}
        >
          H2
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          className={editor.isActive('heading', { level: 3 }) ? 'is-active button font-bold' : 'button font-bold'}
        >
          H3
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
          className={editor.isActive('heading', { level: 4 }) ? 'is-active button font-bold' : 'button font-bold'}
        >
          H4
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
          className={editor.isActive('heading', { level: 5 }) ? 'is-active button font-bold' : 'button font-bold'}
        >
          H5
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
          className={editor.isActive('heading', { level: 6 }) ? 'is-active button font-bold' : 'button font-bold'}
        >
          H6
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editor.isActive('bulletList') ? 'is-active button' : 'button'}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.375 7.5C5.41053 7.5 6.25 6.66053 6.25 5.625C6.25 4.58947 5.41053 3.75 4.375 3.75C3.33947 3.75 2.5 4.58947 2.5 5.625C2.5 6.66053 3.33947 7.5 4.375 7.5Z" fill="#212529"/><path d="M4.375 16.25C5.41053 16.25 6.25 15.4105 6.25 14.375C6.25 13.3395 5.41053 12.5 4.375 12.5C3.33947 12.5 2.5 13.3395 2.5 14.375C2.5 15.4105 3.33947 16.25 4.375 16.25Z" fill="#212529"/><path d="M10 13.75H18.75V15H10V13.75ZM10 5H18.75V6.25H10V5Z" fill="#212529"/></svg>
        </button>
        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={editor.isActive('orderedList') ? 'is-active button' : 'button'}
        >
          <svg width="20" height="20" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 11.75H16.75V13H8V11.75ZM8 3H16.75V4.25H8V3ZM3 5.5V0.5H1.75V1.125H0.5V2.375H1.75V5.5H0.5V6.75H4.25V5.5H3ZM4.25 15.5H0.5V13C0.5 12.6685 0.631696 12.3505 0.866116 12.1161C1.10054 11.8817 1.41848 11.75 1.75 11.75H3V10.5H0.5V9.25H3C3.33152 9.25 3.64946 9.3817 3.88388 9.61612C4.1183 9.85054 4.25 10.1685 4.25 10.5V11.75C4.25 12.0815 4.1183 12.3995 3.88388 12.6339C3.64946 12.8683 3.33152 13 3 13H1.75V14.25H4.25V15.5Z" fill="#212529"/></svg>
        </button>
        <button
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          className={editor.isActive('codeBlock') ? 'is-active button' : 'button'}
        >
          <svg width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none"><path stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h5m3 0h2m0 4h-6m-3 0H7m0 4h5m3 0h2M3 8V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8z"/></svg>
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={editor.isActive('blockquote') ? 'is-active button' : 'button'}
        >
          <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_d_24756_568)"><path d="M7.5 6.375H3.81875C3.93491 5.60146 4.21112 4.86066 4.62974 4.1999C5.04837 3.53914 5.6002 2.97295 6.25 2.5375L7.36875 1.7875L6.68125 0.75L5.5625 1.5C4.6208 2.12755 3.84857 2.97785 3.31433 3.97545C2.7801 4.97305 2.50038 6.08711 2.5 7.21875V11.375C2.5 11.7065 2.6317 12.0245 2.86612 12.2589C3.10054 12.4933 3.41848 12.625 3.75 12.625H7.5C7.83152 12.625 8.14946 12.4933 8.38388 12.2589C8.6183 12.0245 8.75 11.7065 8.75 11.375V7.625C8.75 7.29348 8.6183 6.97554 8.38388 6.74112C8.14946 6.5067 7.83152 6.375 7.5 6.375ZM16.25 6.375H12.5688C12.6849 5.60146 12.9611 4.86066 13.3797 4.1999C13.7984 3.53914 14.3502 2.97295 15 2.5375L16.1188 1.7875L15.4375 0.75L14.3125 1.5C13.3708 2.12755 12.5986 2.97785 12.0643 3.97545C11.5301 4.97305 11.2504 6.08711 11.25 7.21875V11.375C11.25 11.7065 11.3817 12.0245 11.6161 12.2589C11.8505 12.4933 12.1685 12.625 12.5 12.625H16.25C16.5815 12.625 16.8995 12.4933 17.1339 12.2589C17.3683 12.0245 17.5 11.7065 17.5 11.375V7.625C17.5 7.29348 17.3683 6.97554 17.1339 6.74112C16.8995 6.5067 16.5815 6.375 16.25 6.375Z" fill="#212529"/></g><defs><filter id="filter0_d_24756_568" x="-1.5" y="0.75" width="23" height="19.875" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="4"/><feGaussianBlur stdDeviation="2"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_24756_568"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_24756_568" result="shape"/></filter></defs></svg>
        </button>
        <button onClick={() => editor.chain().focus().setHorizontalRule().run()} className='button'>
        <svg width="16" height="2" viewBox="0 0 16 2" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.375" width="15" height="1.25" fill="#212529"/></svg>
        </button>
        <button onClick={() => editor.chain().focus().setHardBreak().run()} className='button'>
        <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 52 52" enableBackground="new 0 0 52 52" xmlSpace="preserve"><path d="M44,30.5c0,0,0.1,1.6-1.5,1.6H15.2c-0.9,0-1.3-1.2-0.7-1.8l5.6-5.6c0.6-0.6,0.6-1.5,0-2.1L18,20.5	c-0.6-0.6-1.5-0.6-2.1,0L2.4,34c-0.6,0.6-0.6,1.5,0,2.1L16,49.6c0.6,0.6,1.5,0.6,2.1,0l2.1-2.1c0.6-0.6,0.6-1.5,0-2.1l-5.6-5.6	c-0.6-0.7-0.2-1.7,0.7-1.7h33.2c0.7,0,1.5-0.8,1.5-1.6v-33C50,2.8,49.3,2,48.5,2h-3C44.7,2,44,2.8,44,3.5C44,3.5,44,30.5,44,30.5z"	/></svg>
        </button>
        <button
          onClick={() => editor.chain().focus().undo().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .undo()
              .run()
          }
          className='button'
        >
          <svg width="20" height="20" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 3.25H2.88438L5.12625 1.00875L4.25 0.125L0.5 3.875L4.25 7.625L5.12625 6.74062L2.88625 4.5H10.5C11.4946 4.5 12.4484 4.89509 13.1517 5.59835C13.8549 6.30161 14.25 7.25544 14.25 8.25C14.25 9.24456 13.8549 10.1984 13.1517 10.9017C12.4484 11.6049 11.4946 12 10.5 12H5.5V13.25H10.5C11.8261 13.25 13.0979 12.7232 14.0355 11.7855C14.9732 10.8479 15.5 9.57608 15.5 8.25C15.5 6.92392 14.9732 5.65215 14.0355 4.71447C13.0979 3.77678 11.8261 3.25 10.5 3.25Z" fill="#212529"/></svg>
        </button>
        <button
          onClick={() => editor.chain().focus().redo().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .redo()
              .run()
          }
          className='button'
        >
          <svg width="20" height="20" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.5 3.25H13.1156L10.8737 1.00875L11.75 0.125L15.5 3.875L11.75 7.625L10.8737 6.74062L13.1137 4.5H5.5C4.50544 4.5 3.55161 4.89509 2.84835 5.59835C2.14509 6.30161 1.75 7.25544 1.75 8.25C1.75 9.24456 2.14509 10.1984 2.84835 10.9017C3.55161 11.6049 4.50544 12 5.5 12H10.5V13.25H5.5C4.17392 13.25 2.90215 12.7232 1.96447 11.7855C1.02678 10.8479 0.5 9.57608 0.5 8.25C0.5 6.92392 1.02678 5.65215 1.96447 4.71447C2.90215 3.77678 4.17392 3.25 5.5 3.25Z" fill="#212529"/></svg>
        </button>
        <button
          onClick={() => editor.chain().focus().setColor('#958DF1').run()}
          className={editor.isActive('textStyle', { color: '#958DF1' }) ? 'is-active button' : 'button'}
        >
          <svg fill="	#8A2BE2" height="15px" width="15px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 	 viewBox="0 0 25.531 25.531" xmlSpace="preserve"><g><g id="c179_text"><path d="M25.198,6.273c-0.014,0.23-0.045,0.389-0.087,0.467c-0.045,0.084-0.176,0.145-0.392,0.183c-0.469,0.104-0.781-0.074-0.935-0.533C23.239,4.7,22.59,3.578,21.84,3.016c-1.041-0.773-2.862-1.161-5.469-1.161			c-1.054,0-1.633,0.115-1.734,0.343c-0.036,0.075-0.057,0.184-0.057,0.324v18.999c0,0.812,0.188,1.383,0.571,1.709			c0.382,0.32,1.069,0.731,2.201,0.999c0.483,0.103,0.97,0.2,1.034,0.239c0.46,0,0.504,1.057-0.376,1.057			c-0.025,0.016-10.375-0.008-10.375-0.008s-0.723-0.439-0.074-1.023c0.271-0.121,0.767-0.343,0.767-0.343s1.83-0.614,2.211-1.009			c0.434-0.445,0.648-1.164,0.648-2.154V2.521c0-0.369-0.229-0.585-0.687-0.647c-0.049-0.015-0.425-0.02-1.122-0.02			c-2.415,0-4.191,0.418-5.338,1.259C3.176,3.735,2.411,4.877,1.737,6.545C1.52,7.065,1.22,7.234,0.84,7.058			C0.408,6.957,0.251,6.719,0.363,6.353c0.445-1.374,0.668-3.31,0.668-5.814c0-0.292,0.387-0.586,1.163-0.533L23.56,0.064			c0.709-0.104,1.096,0.012,1.16,0.343C25.076,2.096,25.234,4.052,25.198,6.273z"/>	</g>	<g id="Capa_1_282_">	</g></g></svg>
        </button>
      </div>
    )
  }

export default MenuBar;