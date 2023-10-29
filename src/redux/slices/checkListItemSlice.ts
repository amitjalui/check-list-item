import { createSlice, PayloadAction  } from "@reduxjs/toolkit";

interface ItemState {
  nonCheckedBox: Item[];
  checkedBox: Item[];
}

const initialState: ItemState = {
  nonCheckedBox: [
    {
      check: false,
      value: "Sample 1",
    },
    {
      check: false,
      value: "Sample 2",
    },
    {
      check: false,
      value: "Sample 3",
    },
  ],
  checkedBox: [],
};

const checkListItemSlice = createSlice({
  name: 'checkListItems',
  initialState,
  reducers: {
    toggleCheckBtn: (state, action: PayloadAction<string>) => {
      const { payload: value } = action;
      const findListItem = state.nonCheckedBox.find(item => item.value === value) || state.checkedBox.find(item => item.value === value);

      if (findListItem) findListItem.check = !findListItem.check;
    },
    moveToCheckList: (state) => {
      state.checkedBox.push(...state.nonCheckedBox.filter(item => item.check));
      state.nonCheckedBox = state.nonCheckedBox.filter(item => !item.check);
    },
    moveToNonCheckList: (state) => {
      state.nonCheckedBox.push(...state.checkedBox.filter(item => !item.check));
      state.checkedBox = state.checkedBox.filter(item => item.check);
    }
  },
});

export const { toggleCheckBtn, moveToCheckList, moveToNonCheckList} = checkListItemSlice.actions;

const checkListItemReducer = checkListItemSlice.reducer;
export default checkListItemReducer;