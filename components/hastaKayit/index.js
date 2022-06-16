import React,{ useState, useEffect } from "react";
import {Formik} from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Index() {

  const router = useRouter();
  const [hastaKayitData, setHastaKayitData] = useState();

  return (
    <div className="bg-gray-900">
      <Formik
              initialValues={{
                name:"",
                country:"",
                dateOfBirth:"",
                city:"",
                country:"",
                whoSays:"",
                weightKg:"",
                heightCm:"",
                phone:"",
                e_mail:"",
                adress:"",
                note:"",
              }}
              validationSchema={ 
                Yup.object({
                  name:Yup.string(),
                  region:Yup.string(),
                  dateOfBirth:Yup.date(),
                  country:Yup.string(),
                  city:Yup.string(),
                  whoSays:Yup.string(),
                  weightKg:Yup.string(),
                  heightCm:Yup.string(),
                  phone:Yup.string(),
                  e_mail:Yup.string(),
                  adress:Yup.string(),
                  note:Yup.string(),
                })
              }
              onSubmit={(values) =>{ 
                setHastaKayitData(values);
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
              <div className="flex justify-center items-center flex-col p-4 rounded-xl">

                <div className="flex justify-center items-center w-[90%] min-w-[15rem] max-w-[40rem] flex-col m-1">
                  <div className="flex justify-center flex-col items-center w-full gap-2">
                    <label className="text-white ml-2 font-medium self-start" htmlFor="name">Adı Soyadı</label>
                    <input
                      className="p-2 border-2 border-gray-300 bg-white rounded-lg font-medium w-full"
                      id='name'
                      type="text"
                      name='name'
                      placeholder='Hastanın adı soyadı'
                      value={values.name}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="flex justify-center items-center w-[90%] min-w-[15rem] max-w-[40rem] flex-col m-1">
                  <div className="flex justify-center flex-col items-center w-full gap-2">
                    <label className="text-white ml-2 font-medium self-start" htmlFor="dateOfBirth">Doğum Tarihi</label>
                    <input
                      className="p-2 border-2 border-gray-300 bg-white rounded-lg font-medium w-full"
                      id='dateOfBirth'
                      type="Date"
                      name='dateOfBirth'
                      value={values.dateOfBirth}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="flex justify-center items-center w-[90%] min-w-[15rem] max-w-[40rem] flex-col m-1">
                  <div className="flex justify-center flex-col items-center w-full gap-2">
                    <label className="text-white ml-2 font-medium self-start" htmlFor="country">Ülke</label>
                    <input
                      className="p-2 border-2 border-gray-300 bg-white rounded-lg font-medium w-full"
                      id='country'
                      type="text"
                      name='country'
                      placeholder='Ülke'
                      value={values.country}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="flex justify-center items-center w-[90%] min-w-[15rem] max-w-[40rem] flex-col m-1">
                  <div className="flex justify-center flex-col items-center w-full gap-2">
                    <label className="text-white ml-2 font-medium self-start" htmlFor="city">Şehir</label>
                    <input
                      className="p-2 border-2 border-gray-300 bg-white rounded-lg font-medium w-full"
                      id='city'
                      type="text"
                      name='city'
                      placeholder='yaşadığı şehir'
                      value={values.city}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="flex justify-center items-center w-[90%] min-w-[15rem] max-w-[40rem] flex-col m-1">
                  <div className="flex justify-center flex-col items-center w-full gap-2">
                    <label className="text-white ml-2 font-medium self-start" htmlFor="whoSays">Kim tavsiye etti ?</label>
                    <input
                      className="p-2 border-2 border-gray-300 bg-white rounded-lg font-medium w-full"
                      id='whoSays'
                      type="text"
                      name='whoSays'
                      placeholder='Hastayı yönlendiren/Tavsiye eden kişi'
                      value={values.whoSays}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="flex justify-center items-center w-[90%] min-w-[15rem] max-w-[40rem] flex-col m-1">
                  <div className="flex justify-center flex-col items-center w-full gap-2">
                    <label className="text-white ml-2 font-medium self-start" htmlFor="weightKg">Kilo (kg)</label>
                    <input
                      className="p-2 border-2 border-gray-300 bg-white rounded-lg font-medium w-full"
                      id='weightKg'
                      type="text"
                      name='weightKg'
                      placeholder='80 kg'
                      value={values.weightKg}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="flex justify-center items-center w-[90%] min-w-[15rem] max-w-[40rem] flex-col m-1">
                  <div className="flex justify-center flex-col items-center w-full gap-2">
                    <label className="text-white ml-2 font-medium self-start" htmlFor="heightCm">Boy (cm)</label>
                    <input
                      className="p-2 border-2 border-gray-300 bg-white rounded-lg font-medium w-full"
                      id='heightCm'
                      type="text"
                      name='heightCm'
                      placeholder='180 cm'
                      value={values.heightCm}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="flex justify-center items-center w-[90%] min-w-[15rem] max-w-[40rem] flex-col m-1">
                  <div className="flex justify-center flex-col items-center w-full gap-2">
                    <label className="text-white ml-2 font-medium self-start" htmlFor="phone">Telefon</label>
                    <input
                      className="p-2 border-2 border-gray-300 bg-white rounded-lg font-medium w-full"
                      id='phone'
                      type="text"
                      name='phone'
                      placeholder='+90 222 555 33 44'
                      value={values.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="flex justify-center items-center w-[90%] min-w-[15rem] max-w-[40rem] flex-col m-1">
                  <div className="flex justify-center flex-col items-center w-full gap-2">
                    <label className="text-white ml-2 font-medium self-start" htmlFor="e_mail">E-mail</label>
                    <input
                      className="p-2 border-2 border-gray-300 bg-white rounded-lg font-medium w-full"
                      id='e_mail'
                      type="email"
                      name='e_mail'
                      placeholder='Email'
                      value={values.e_mail}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="flex justify-center items-center w-[90%] min-w-[15rem] max-w-[40rem] flex-col m-1">
                  <div className="flex justify-center flex-col items-center w-full gap-2">
                    <label className="text-white ml-2 font-medium self-start" htmlFor="adress">Adres</label>
                    <input
                      className="p-2 border-2 border-gray-300 bg-white rounded-lg font-medium w-full"
                      id='adress'
                      type="text"
                      name='adress'
                      placeholder='Adres'
                      value={values.adress}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="flex justify-center items-center w-[90%] min-w-[15rem] max-w-[40rem] flex-col m-1">
                  <div className="flex justify-center flex-col items-center w-full gap-2">
                    <label className="text-white ml-2 font-medium self-start" htmlFor="note">Not</label>
                    <input
                      className="p-2 border-2 border-gray-300 bg-white rounded-lg font-medium w-full"
                      id='note'
                      type="text"
                      name='note'
                      placeholder='Hasta hakkında ek bilgi'
                      value={values.note}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                

                <button onClick={(e)=>router.push("/login/login")} className="p-2 w-[90%] max-w-[40rem] mt-2 min-w-[15rem]  bg-green-600 rounded-lg text-white font-medium text-lg" type='submit'> Bilgileri Kaydet</button>
              </div>
              </form>
              )}
            </Formik>
    </div>
  )
}
