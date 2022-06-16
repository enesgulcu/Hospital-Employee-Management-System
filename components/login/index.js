import React,{ useState, useEffect } from "react";
import {Formik} from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import {userLogin} from '../../redux/login/userSlice.js';
import { useRouter } from 'next/router';
import PuffLoader from "react-spinners/PuffLoader";


export default function Index() {

  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#f4f4f4");

  const dispatch = useDispatch();
  const router = useRouter();

  let [loginInfo, setLoginInfo] = useState(false);

  useEffect(() => {
    dispatch(userLogin(loginInfo));
  }, [loginInfo])
  
  
  return (
      <div className="flex justify-center items-center h-screen bg-gray-900">

      {loginInfo && <PuffLoader color={color} loading={loading}  size={250} />}
      
        <div className={`${loginInfo ? "hidden" : "block"}`}>
        
        <div className="flex justify-center items-center p-2 m-2 flex-col text-white">
        
          <h1 className="text-[2.5rem] font-medium">Şimşek Health Point</h1>
          <h1 className="text-[1.2rem]">Personel Giriş Paneli</h1>
        </div>
            <Formik
              initialValues={{
                email:"",
                password:""
              }}
              validationSchema={ 
                Yup.object({
                  email:Yup.string().required("Lütfen mailinizi giriniz."),
                  password:Yup.string().required("Lütfen şifrenizi giriniz.").min(6, "şifreniz 6 karakterden kısa olamaz").max(30, "şifreniz 30 karakterden uzun olamaz"),
                })
              }
              onSubmit={(values) =>{ 
                setLoginInfo(values);
              }}
            >
            {
              ({values,
                errors,
                handleChange,
                handleSubmit,
                handleReset,
                dirty,
                isSubmitting,
                touched
              }) =>(
              
              <form onSubmit={handleSubmit}>
              <div className="flex justify-center items-center flex-col p-4 bg-white rounded-xl">

                <div className="flex justify-center items-center flex-col w-full">
                  <div className="flex justify-center items-center w-full gap-2">
                    <label htmlFor="email">Email</label>
                    <input
                      className="p-2 border-2 border-gray-300 bg-white rounded-lg font-medium w-full"
                      id='email'
                      type="email"
                      name='email'
                      placeholder='email adresinizi giriniz.'
                      value={values.email}
                      onChange={handleChange}
                    />
                  </div>
                  <h5 className="mb-4">{errors.email}</h5>
                </div>

                <div className="flex justify-center items-center flex-col w-full">
                  <div className="flex justify-center items-center w-full gap-2">
                    <label htmlFor="email">Şifre</label>
                    <input
                      className="p-2 border-2 border-gray-300 bg-white rounded-lg font-medium w-full"
                      id='password'
                      type="password"
                      name='password'
                      placeholder='Şifrenizi giriniz'
                      value={values.password}
                      onChange={handleChange}
                    />
                  </div>
                  <h5 className="mb-4">{errors.password}</h5>
                </div>                
                <button onClick={(e)=>router.push("/login/login")} className="p-4 bg-green-600 w-full rounded-lg text-white font-medium text-lg" type='submit'> Go page</button>
              </div>
              </form>
              )}
            </Formik>
        
        </div>
      
               
      </div>
  )
}




