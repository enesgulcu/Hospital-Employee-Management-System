// burada bir Slice (State) ve bunu değiştirecek fonksiyonlar tanımlarız.
import { createSlice } from "@reduxjs/toolkit";
// bu veriyi store 'da kullanmak üzere export ediyoruz.
export const myUserSlice = createSlice({
    //State İsmi
    name:"myUserSlice",
   
    initialState:{
        //State değeri (burada obje - array gibi yapılar da olabilir)
        value:[],
    },    

    // state'i değiştirecek hazır fonksiyonların bulunduğu yer .
    reducers:{

        myUser:(state, action)=>{
        // fonksiyona gönderilen parametre (action.payload) olarak yakalanır.  
        state.value = action.payload;
        }
        
    }
});
// fonksiyonlarımızı başka yerlerde kullanabilmek için export ile dışa aktarırız.
export const {myUser} = myUserSlice.actions;
export default myUserSlice.reducer;