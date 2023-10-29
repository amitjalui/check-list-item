import { useSelector, useDispatch } from "react-redux";
import { toggleCheckBtn, moveToCheckList, moveToNonCheckList } from "@/redux/slices/checkListItemSlice";

const CheckContainer = () => {
  const nonCheckedBox = useSelector((state: RootState) => state.checkListItems.nonCheckedBox);
  const checkedBox = useSelector((state: RootState) => state.checkListItems.checkedBox);
  const dispatch = useDispatch();

  function handleCheckBoxClick(list: Item) {
    dispatch(toggleCheckBtn(list.value));
  }

  function handleIfChecked() {
    dispatch(moveToCheckList())
  }

  function handleIfNonChecked() {
    dispatch(moveToNonCheckList())
  }

  return (
    <>
      <div className="w-60 p-5 bg-green-500">
        {nonCheckedBox.map((list) => (
          <div key={list.value}>
            <input
              type="checkbox"
              className="bg-red-500"
              checked={list.check}
              name="box1"
              onChange={() => handleCheckBoxClick(list)}
            />
            <label className="pl-2 capitalize">{list.value}</label>
          </div>
        ))}
      </div>
      <div>
        <button 
          className="text-white" 
          onClick={handleIfChecked}
        >
          {"=>"}
        </button>
        <br />
        <br />
        <button 
          className="text-white" 
          onClick={handleIfNonChecked}
        >
          {"<="}
        </button>
      </div>
      <div className="w-60 p-5 bg-green-500">
        {checkedBox?.map((list) => (
          <div key={list.value}>
            <input
              type="checkbox"
              className="bg-red-500"
              checked={list.check}
              name="box2"
              onChange={() => handleCheckBoxClick(list)}
            />
            <label className="pl-2 capitalize">{list.value}</label>
          </div>
        ))}
      </div>
    </>
  );
};

export default CheckContainer;