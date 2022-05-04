const cartReducer = (state = [], action) => {

   switch (action.type) {
     case "@cart/ADD":
       return [...state, action.product];
 
     case "@cart/REMOVE":
       const index = state.findIndex((item) => item === action.product)

       const newList = [...state]
       newList.splice(index, 1)
       return newList

     default:
       return state;
   }
 };
  
export default cartReducer;