import { createSlice } from "@reduxjs/toolkit";

const initialState={
  products:[],
  searchTerm:'',
  filteredData:[],
}

const ProductSlice= createSlice({
  name:'product',
  initialState,
  reducers:{
    setProductS(state,action){
    state.products=action.payload
   },
    setSearchTerm(state, action){
    state.searchTerm=action.payload;
    state.filteredData=state.products.filter(product =>{
        product.name.toLowerCase().includes(state.searchTerm.toLowerCase())
    })
  },
},
});

export const {setProductS,setSearchTerm}=ProductSlice.actions;
export default ProductSlice.reducer;