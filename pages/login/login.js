import React,{ useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import {securityCheck} from '../../redux/login/securitySlice.js';
import {myUser} from '../../redux/login/myUserSlice.js';
import { useRouter } from 'next/router';
import Link from 'next/link';






export async function getServerSideProps(context) {
  const res = await fetch('http://localhost:3000/api/userLogin');
   const data = await res.json();
   return {
     props: { data },
   }
 }


export default function Logined({data}) {

  const dispatch = useDispatch();
  const router = useRouter();
  

  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#f4f4f4");
  
  const enterUser = useSelector((state)=>state.user.value);
  const securityValue = useSelector((state)=>state.security.value);
  
   useEffect(() => { 
    data.map((user, index)=>{
      let userAmount = index + 1;
        if(user.email == enterUser.email && user.password == enterUser.password){   
          dispatch(securityCheck(true));
          const myuserValue = [user];
          dispatch(myUser(myuserValue));
          router.push(`/employee/${user._id}`); 
          
        }
        else{
          ()=>checkValue();
        }    
    }); 
   }, [checkValue, data, dispatch, enterUser, router])   

   // eslint-disable-next-line react-hooks/exhaustive-deps
   const checkValue = () =>{
    data.map((user, index)=>{
      let userAmount = index + 1;
        
        if(user.email == enterUser.email && user.password == enterUser.password){   
          dispatch(securityCheck(true));
          const myuserValue = [user];
          dispatch(myUser(myuserValue));
          router.push(`/employee/${user._id}`);
        }                 
    }); 
   }
   
  return (
    <div className="flex justify-center flex-col items-center h-screen bg-gray-900">  
     <h1 className="text-[1.5rem] font-medium m-2 text-red-600 text-center">Girdiğiniz email yada şifre yanlış lütfen tekrar deneyin</h1>
    <Link href='/login'><button className="p-4 bg-green-600 w-2/4 rounded-lg text-white font-medium text-lg" type='submit'>Giriş Sayfasına Git</button></Link>
    </div>
  )
}




