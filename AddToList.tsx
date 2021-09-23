import React, { useState } from "react";
import { IState as Props } from "./App";

interface IProps {
  people: Props["people"]
  setPeople: React.Dispatch<React.SetStateAction<Props['people']>>
}

const AddToList: React.FC<IProps> = ({people, setPeople}) => {
  const [input, setinput] = useState({
    name: "",
    age: "",
    note: "",
    img: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setinput({ ...input, [e.target.name]: e.target.value });
  };

  const handleClick = (): void => {
    if(!input.name || !input.age || !input.img) {
      return
    }
    setPeople([
      ...people,
      {
        name: input.name,
        age: parseInt(input.age),
        url: input.img,
        notes: input.note
      }
    ]);
    
    setinput({
      name: "",
      age: "",
      note: "",
      img: "",
    });
  }

  return (
    <div className="AddToList">
      <input
        type="text"
        value={input.name}
        placeholder="Name"
        className="AddToList-input"
        onChange={handleChange}
        name="name"
      />
      <input
        type="text"
        value={input.age}
        placeholder="Age"
        className="AddToList-input"
        onChange={handleChange}
        name="age"
      />
      <input
        type="text"
        value={input.img}
        placeholder="Image"
        className="AddToList-input"
        onChange={handleChange}
        name="img"
      />
      <textarea
        value={input.note}
        placeholder="Note"
        className="AddToList-input"
        onChange={handleChange}
        name="note"
      />
      <button className='AddToList-btn' onClick={handleClick}>
        Add To List
      </button>
    </div>
  );
};

export default AddToList;
