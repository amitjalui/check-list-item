// Define a type for the item
type Item = {
  check: boolean;
  value: string;
};

// Define the shape of the Redux state
type RootState = {
  checkListItems: {
    nonCheckedBox: Item[];
    checkedBox: Item[];
  };
};