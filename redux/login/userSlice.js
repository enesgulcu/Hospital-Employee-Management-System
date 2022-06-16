// burada bir Slice (State) ve bunu değiştirecek fonksiyonlar tanımlarız.
import { createSlice } from "@reduxjs/toolkit";
// bu veriyi store 'da kullanmak üzere export ediyoruz.
export const userSlice = createSlice({
    //State İsmi
    name:"user",
   
    initialState:{
        //State değeri (burada obje - array gibi yapılar da olabilir)
        value:"",
    },    

    // state'i değiştirecek hazır fonksiyonların bulunduğu yer .
    reducers:{

        userLogin:(state, action)=>{
        // fonksiyona gönderilen parametre (action.payload) olarak yakalanır.  
        state.value = action.payload;
        }
        
    }
});
// fonksiyonlarımızı başka yerlerde kullanabilmek için export ile dışa aktarırız.
export const {userLogin} = userSlice.actions;
export default userSlice.reducer;