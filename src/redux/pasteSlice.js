import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

const initialState = {
  pastes: (() => {
    try {
      // Get the pastes from localStorage
      const storedPastes = localStorage.getItem("pastes");
      // If there is something in localStorage, parse it; otherwise, return an empty array
      return storedPastes ? JSON.parse(storedPastes) : [];
    } catch (error) {
      console.error("Error parsing pastes from localStorage:", error);
      return []; // Return an empty array if parsing fails
    }
  })()
};

export const pasteSlice = createSlice({
  name: 'paste',
  initialState,
  reducers: {
    addPaste: (state, action) => {
      const paste = action.payload;
      const index = state.pastes.findIndex((item) => item._id === paste._id);

      if (index >= 0) {
        toast.error("Paste already exists");
        return;
      }

      state.pastes.push(paste);
      localStorage.setItem("pastes", JSON.stringify(state.pastes)); // Store updated pastes to localStorage
      toast.success("Paste created successfully");
    },
    updatePaste: (state, action) => {
      const paste = action.payload;
      const index = state.pastes.findIndex((item) => item._id === paste._id);

      if (index >= 0) {
        state.pastes[index] = paste;
        localStorage.setItem("pastes", JSON.stringify(state.pastes)); // Store updated pastes to localStorage
        toast.success("Paste updated successfully");
      }
    },
    resetPaste: (state, action) => {
      state.pastes = [];
      localStorage.removeItem("pastes"); // Remove pastes from localStorage
    },
    removePaste: (state, action) => {
      const paste = action.payload;
      const index = state.pastes.findIndex((item) => item._id === paste);

      if (index >= 0) {
        state.pastes.splice(index, 1);
        localStorage.setItem("pastes", JSON.stringify(state.pastes)); // Store updated pastes to localStorage
        toast.success("Paste deleted successfully");
      }
    }
  }
});

// Action creators are generated for each case reducer function
export const { addPaste, updatePaste, resetPaste, removePaste } = pasteSlice.actions;

export default pasteSlice.reducer;
