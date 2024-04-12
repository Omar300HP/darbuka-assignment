import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'providers/index';
import type { PayloadAction } from '@reduxjs/toolkit';
import { GlobalModals } from 'types/enums';

interface ModalsState {
  modalOpened: `${GlobalModals}` | '';
  extra?: unknown;
}

const initialState: ModalsState = { modalOpened: '' };

const modalsSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    clearModal: (state) => {
      state.modalOpened = '';
    },
    toggleModal: (
      state,
      action: PayloadAction<
        GlobalModals | { modalName: GlobalModals; extra: unknown }
      >
    ): void => {
      if (
        typeof action.payload === 'string' &&
        Object.values(GlobalModals).includes(action.payload)
      ) {
        if (state.modalOpened === action.payload) {
          state.modalOpened = '';
          return;
        }
        state.modalOpened = action.payload;
      }

      if (typeof action.payload === 'object') {
        if (
          Object.values(GlobalModals).includes(action.payload.modalName) &&
          state.modalOpened === action.payload.modalName
        ) {
          state.modalOpened = '';
          return;
        }
        state.modalOpened = action.payload.modalName;

        if (action.payload.extra) {
          state.extra = action.payload.extra;
        }
      }
    }
  }
});

export const { toggleModal, clearModal } = modalsSlice.actions;

export const selectOpenedModal = (state: RootState): `${GlobalModals}` | '' =>
  state.modals.modalOpened;
export const selectModalExtra = (state: RootState) => state.modals.extra;

export const modalsReducer = modalsSlice.reducer;
