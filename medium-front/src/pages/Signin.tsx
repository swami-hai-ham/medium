import Input from "../components/Input";
import Label from "../components/Label";
import SubmitButton from './../components/SubmitButton';
import Google from "../components/Google";
import { useState } from "react";


const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(email, password);

  return (
    <div className="relative flex flex-col justify-center items-center h-screen w-full ">
      <div className="flex flex-col md:flex-row justify-center items-center h-full w-full bg-[url('/bgart.png')] bg-[#2a1f0b] md:bg-none md:bg-[#2a1f0b]">
        <div className="h-full w-full md:w-1/2 p-4 flex justify-center items-center text-white flex-col">
          <Label Title="Sign in" Extra="Welcome Back!"/>
          <Input 
            svg={<svg width="34" height="34" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg" className='opacity-70 m-2'><path d="M9.48036 1.49257C5.40026 1.49257 2.08887 4.80396 2.08887 8.88406C2.08887 12.9642 5.40026 16.2756 9.48036 16.2756H13.1761V14.7973H9.48036C6.27245 14.7973 3.56717 12.092 3.56717 8.88406C3.56717 5.67615 6.27245 2.97087 9.48036 2.97087C12.6883 2.97087 15.3936 5.67615 15.3936 8.88406V9.94105C15.3936 10.525 14.8688 11.1015 14.2848 11.1015C13.7009 11.1015 13.1761 10.525 13.1761 9.94105V8.88406C13.1761 6.84401 11.5204 5.18832 9.48036 5.18832C7.44031 5.18832 5.78461 6.84401 5.78461 8.88406C5.78461 10.9241 7.44031 12.5798 9.48036 12.5798C10.5004 12.5798 11.4317 12.1659 12.0969 11.4933C12.5774 12.1511 13.4052 12.5798 14.2848 12.5798C15.741 12.5798 16.8719 11.3972 16.8719 9.94105V8.88406C16.8719 4.80396 13.5605 1.49257 9.48036 1.49257ZM9.48036 11.1015C8.25337 11.1015 7.26291 10.1111 7.26291 8.88406C7.26291 7.65707 8.25337 6.66661 9.48036 6.66661C10.7073 6.66661 11.6978 7.65707 11.6978 8.88406C11.6978 10.1111 10.7073 11.1015 9.48036 11.1015Z" fill="#ff9604"/></svg>} 
            placeholder="Email" 
            onChange={(e) => {setEmail(e.target.value)}} 
            type="email"
          />
          <Input 
            svg={<svg width="34" height="34" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" className='opacity-70 m-2'><path d="M13.9159 6.83549H15.3942C15.5902 6.83549 15.7782 6.91336 15.9168 7.05198C16.0554 7.1906 16.1333 7.37861 16.1333 7.57464V16.4444C16.1333 16.6405 16.0554 16.8285 15.9168 16.9671C15.7782 17.1057 15.5902 17.1836 15.3942 17.1836H3.56776C3.37173 17.1836 3.18372 17.1057 3.04511 16.9671C2.90649 16.8285 2.82861 16.6405 2.82861 16.4444V7.57464C2.82861 7.37861 2.90649 7.1906 3.04511 7.05198C3.18372 6.91336 3.37173 6.83549 3.56776 6.83549H5.04606V6.09634C5.04606 4.92013 5.51331 3.7921 6.34501 2.9604C7.17672 2.12869 8.30475 1.66145 9.48096 1.66145C10.6572 1.66145 11.7852 2.12869 12.6169 2.9604C13.4486 3.7921 13.9159 4.92013 13.9159 6.09634V6.83549ZM12.4376 6.83549V6.09634C12.4376 5.3122 12.1261 4.56018 11.5716 4.00571C11.0171 3.45124 10.2651 3.13974 9.48096 3.13974C8.69682 3.13974 7.9448 3.45124 7.39033 4.00571C6.83586 4.56018 6.52436 5.3122 6.52436 6.09634V6.83549H12.4376ZM8.74181 11.2704V12.7487H10.2201V11.2704H8.74181ZM5.78521 11.2704V12.7487H7.26351V11.2704H5.78521ZM11.6984 11.2704V12.7487H13.1767V11.2704H11.6984Z" fill="#ff9604"/></svg>} 
            placeholder="Password" 
            onChange={(e) => {setPassword(e.target.value)}} 
            type="password"
          />
          <SubmitButton Title="Sign in"/>
          <Google text="Continue with google"/>
      </div>
      
      <div className="relative h-full w-1/2 md:flex justify-center items-center text-white flex-col p-4 hidden bg-[url('/bgart.png')]">
        <div className="font-lobster text-3xl md:text-5xl text-center">"Writing is the geometry of soul."</div>
        <div className="font-mono text-2xl md:text-3xl mt-5 font-bold text-center">- Plato</div>
      </div>

  </div>
</div>
  )
}

{/* <svg height="34" viewBox="0 0 48 48" width="34" xmlns="http://www.w3.org/2000/svg" className='opacity-50 m-2'><path d="M24 4c-11.05 0-20 8.95-20 20s8.95 20 20 20 20-8.95 20-20-8.95-20-20-20zm0 6c3.31 0 6 2.69 6 6 0 3.32-2.69 6-6 6s-6-2.68-6-6c0-3.31 2.69-6 6-6zm0 28.4c-5.01 0-9.41-2.56-12-6.44.05-3.97 8.01-6.16 12-6.16s11.94 2.19 12 6.16c-2.59 3.88-6.99 6.44-12 6.44z"/><path d="M0 0h48v48h-48z" fill="none"/></svg> */}

export default Signin