import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {securityCheck} from '../../../redux/login/securitySlice.js';
import Link from 'next/link';

export default function Index() {

  const security = useSelector((state)=>state.security.value);

  return (
    <div>
    {security ?
    <h1>Hasta Kayıt</h1>
    :
    <div className="flex justify-center flex-col items-center h-screen bg-gray-900">   
        <h1 className="text-[1.5rem] font-medium m-2 text-red-600 text-center">Bir hata oluştu lütfen tekrar deneyin.</h1>
        <Link href='/login'><button className="p-4 bg-green-600 w-2/4 rounded-lg text-white font-medium text-lg" type='submit'>Giriş Sayfasına Git</button></Link>
    </div>
    }
    
    </div>
  )
}