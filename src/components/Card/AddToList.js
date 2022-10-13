import React from 'react';
import { useDispatch } from 'react-redux';
import { addToList } from '../../utils/store';

const AddToList = (item) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(addToList(item));
  };

  return (
    <div className="addList-div" onClick={() => handleClick()}>
      <p className="addList">+ </p>
    </div>
  );
};

export default AddToList;
