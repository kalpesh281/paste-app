import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
const initialState = {
  pastes: localStorage.getItem("pastes")
    ? JSON.parse(localStorage.getItem("pastes"))
    : [],
};

export const pasteSlice = createSlice({
  name: "paste",
  initialState,
  reducers: {
    addToPastes: (state, action) => {
      const paste = action.payload;
      const titleExists = state.pastes.some((p) => p.title === paste.title);

      if (titleExists) {
        toast.error("A paste with this title already exists!");
        return;
      }

      state.pastes.push(paste);
      localStorage.setItem("pastes", JSON.stringify(state.pastes));
      toast.success("Paste added successfully!");
    },
    updateToPastes: (state, action) => {
      const paste = action.payload;
      const index = state.pastes.findIndex((p) => p._id === paste._id);
      if(index>=0){
        state.pastes[index]= paste;
        localStorage.setItem("pastes", JSON.stringify(state.pastes));
        toast.success("Paste updated successfully!");
      }
    },
    resetAllPastes: (state, action) => {
        state.pastes = [];
        localStorage.removeItem("pastes");
        toast.success("All pastes removed successfully!");
    },
    removeFromPastes: (state, action) => {
        const pasteId = action.payload;
        const index = state.pastes.findIndex((p) => p._id === pasteId);
        if(index>=0){ state.pastes.splice(index, 1);localStorage.setItem("pastes", JSON.stringify(state.pastes ));}
        else { toast.error("Paste not found!"); }
        toast.success("Paste deleted successfully!");
    },
  },
});

export const { addToPastes, updateToPastes, resetAllPastes, removeFromPastes } =
  pasteSlice.actions;

export default pasteSlice.reducer;
