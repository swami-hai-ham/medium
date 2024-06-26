import React from 'react';
import { signInWithGoogle } from "../firebase/firebase";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


interface Text {
  text: string;
  signup: boolean;
}

const Google: React.FC<Text> = ({ text, signup }) => {
  const navigate = useNavigate()
  const handleLogin = async () => {
    try {
      const user = await signInWithGoogle();
      // const token = await user.getIdToken();
      if(signup){
        axios.post("https://medium-back.swamiatharva15104.workers.dev/api/v1/user/signup", {
          "username": user.email,
          "password": user.uid,
          "name": user.displayName
        }).then(response => {
          console.log(response);
          localStorage.setItem("token", response.data.jwt);
          navigate('/');
        }).catch(error => {
            console.log(error)
        });
      }else{
        axios.post("https://medium-back.swamiatharva15104.workers.dev/api/v1/user/signin", {
          "username": user.email,
          "password": user.uid
        }).then(response => {
          console.log(response);
          localStorage.setItem("token", response.data.jwt);
          navigate('/');
        }).catch(error => {
            console.log(error)
        });
      }      
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <button
      className=' bg-white border-[3px] border-[#0b45543f] w-full h-full shadow-[rgba(0,0,15,0.5)_5px_5px_5px_0px] text-black flex justify-center items-center rounded-lg focus:bg-gray-300'
      onClick={handleLogin}
    >
      <svg width="20" height="19" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg" className='m-2'>
        <g clipPath="url(#clip0_2_978)">
          <path d="M3.55634 4.91254C3.7869 4.215 4.23185 3.60809 4.82773 3.1784C5.42361 2.7487 6.13998 2.51816 6.87463 2.51967C7.7074 2.51967 8.46035 2.81533 9.05167 3.29922L10.7724 1.57898C9.7238 0.664895 8.38003 0.100677 6.87463 0.100677C4.54384 0.100677 2.5373 1.43016 1.57246 3.37757L3.55634 4.91254Z" fill="#EA4335" />
          <path d="M8.86542 8.97689C8.3283 9.32331 7.64631 9.5081 6.87464 9.5081C6.14292 9.5096 5.42926 9.2809 4.83471 8.85437C4.24015 8.42784 3.79482 7.8251 3.56177 7.13148L1.571 8.6428C2.05945 9.63143 2.81537 10.4633 3.75288 11.0438C4.6904 11.6244 5.77193 11.9304 6.87464 11.9271C8.31993 11.9271 9.70066 11.4131 10.735 10.4488L8.86591 8.97689H8.86542Z" fill="#34A853" />
          <path d="M10.7348 10.4488C11.8165 9.43959 12.5187 7.93763 12.5187 6.01388C12.5187 5.66401 12.4649 5.28803 12.3846 4.93866H6.87451V7.22362H10.046C9.88975 7.99184 9.46942 8.58661 8.86578 8.97688L10.7348 10.4488Z" fill="#4A90E2" />
          <path d="M3.56181 7.13147C3.44126 6.77122 3.38001 6.39377 3.38047 6.01388C3.38047 5.62854 3.44207 5.25847 3.55639 4.91255L1.57251 3.37758C1.16666 4.19689 0.957444 5.09956 0.961483 6.01388C0.961483 6.95999 1.18076 7.8519 1.57103 8.64279L3.56181 7.13147Z" fill="#FBBC05" />
        </g>
        <defs>
          <clipPath id="clip0_2_978">
            <rect width="11.8264" height="11.8264" fill="white" transform="translate(0.961426 0.100677)" />
          </clipPath>
        </defs>
      </svg>
      <div className='font-athiti text-[16px] text-opacity-60 '>{text}</div>
    </button>
  );
};

export default Google;
