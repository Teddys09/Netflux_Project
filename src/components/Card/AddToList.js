import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToList } from '../../utils/store';

const AddToList = (item) => {
  const dispatch = useDispatch();
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(true);
    dispatch(addToList(item));
    //after 2 seconds, set click to false
    setTimeout(() => {
      setClick(false);
    }, 2000);
  };

  return (
    <div className="addList-div" onClick={() => handleClick()}>
      <p className="addList">+ </p>

      {click ? <p className="addList-text">Added</p> : null}
    </div>
  );
};

export default AddToList;
