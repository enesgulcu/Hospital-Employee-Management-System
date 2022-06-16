import React,{useState, useEffect} from 'react'
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux'
import {securityCheck} from '../../redux/login/securitySlice.js';
import {myUser} from '../../redux/login/myUserSlice.js';
import Link from 'next/link';

export default function User() {



  const myUserValue = useSelector((state)=>state.myUser.value[0]);
  const security = useSelector((state)=>state.security.value);
  const dispatch = useDispatch();
  //dispatch(securityCheck(false));

  const router = useRouter();
  const userID = router.query.user;


  return (
    <div>
    
    {
      security ? 
      <div className="flex justify-center flex-col items-center h-screen bg-gray-900">
        <h1 className='text-white p-2 m-2'>Hoşgeldin {myUserValue.name}</h1>
        <div>
          <ul>
          <Link href='/hasta/hastaKayit'><li className=' cursor-pointer hover:bg-green-600 hover:text-white  p-2 m-2 w-60 bg-white rounded-xl text-center font-medium '>hasta kayıt</li></Link>
          <Link href='/hasta/hastaKayitGuncelle'><li className='cursor-pointer hover:bg-green-600 hover:text-white  p-2 m-2 w-60 bg-white rounded-xl text-center font-medium '>hasta kayıt güncelleme</li></Link>
          <Link href='/hasta/hastaKontrol'><li className='cursor-pointer hover:bg-green-600 hover:text-white  p-2 m-2 w-60 bg-white rounded-xl text-center font-medium '>hasta kontrol</li></Link>
          <Link href='/hasta/hastaOperasyonDetay'><li className='cursor-pointer hover:bg-green-600 hover:text-white  p-2 m-2 w-60 bg-white rounded-xl text-center font-medium '>hasta operasyon planlama</li></Link>
          <Link href='/hasta/hastaOperasyonPlan'><li className='cursor-pointer hover:bg-green-600 hover:text-white  p-2 m-2 w-60 bg-white rounded-xl text-center font-medium '>hasta operasyon detayları</li></Link>
          <Link href='/login'><li className='flex justify-center cursor-pointer hover:bg-red-700 text-white p-2 m-2 mt-6 w-60 bg-red-600 rounded-xl text-center font-medium '>Çıkış yap</li></Link>
          </ul>
        </div>
      </div>
      : 
      <div className="flex justify-center flex-col items-center h-screen bg-gray-900">   
        <h1 className="text-[1.5rem] font-medium m-2 text-red-600 text-center">Bir hata oluştu lütfen tekrar deneyin.</h1>
        <Link href='/login'><button className="p-4 bg-green-600 w-2/4 rounded-lg text-white font-medium text-lg" type='submit'>Giriş Sayfasına Git</button></Link>
      </div>
    }
      
    </div>  
    
  )
}

