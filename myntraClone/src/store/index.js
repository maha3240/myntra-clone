import { configureStore} from "@reduxjs/toolkit";
import itemSlice from "./ItemSlice";
import fetchingStatusSlice from "./fetchingStatusSlice";
import bagSlice from "./bagSlice";



const myntraStore = configureStore({
  reducer: {
    items : itemSlice.reducer,
    fetchingStatus: fetchingStatusSlice.reducer,
    bag : bagSlice.reducer
  }
});
export default myntraStore;
