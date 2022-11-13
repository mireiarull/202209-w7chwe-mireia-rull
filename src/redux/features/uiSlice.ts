import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UiState } from "./types";

const initialState: UiState = {
  modal: "",
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    openModal: (ui, action: PayloadAction<string>) => ({
      ...ui,
      modal: action.payload,
    }),
    closeModal: (ui) => ({ ...ui, modal: "" }),
  },
});

export const uiReducer = uiSlice.reducer;

export const {
  openModal: openModalActionCreator,
  closeModal: closeModalActionCreator,
} = uiSlice.actions;
