// burada bir Slice (State) ve bunu değiştirecek fonksiyonlar tanımlarız.
import { createSlice } from "@reduxjs/toolkit";
// bu veriyi store 'da kullanmak üzere export ediyoruz.
export const securitySlice = createSlice({
    //State İsmi
    name:"security",
   
    initialState:{
        //State değeri (burada obje - array gibi yapılar da olabilir)
        value:false,
    },    

    // state'i değiştirecek hazır fonksiyonların bulunduğu yer .
    reducers:{

        securityCheck:(state, action)=>{
        // fonksiyona gönderilen parametre (action.payload) olarak yakalanır.  
        state.value = action.payload;
        }
        
    }
});
// fonksiyonlarımızı başka yerlerde kullanabilmek için export ile dışa aktarırız.
export const {securityCheck} = securitySlice.actions;
export default securitySlice.reducer;