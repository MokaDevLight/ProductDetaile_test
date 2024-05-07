import React, { useState } from "react";
import { useDispatch } from "react-redux";

import InputComponent from "components/elements/InputComponent";
import TextareaComponent from "components/elements/TextareaComponent";
import { addComment } from "../../../redux/slices/ProductDetailSlice";

function AddForm() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const data = { title, text };
    dispatch(addComment(data));
  }

  const handleInputChange = (e, setter) => setter(e.target.value);

  return (
    <div className="form_comment">
      <form onSubmit={handleSubmit}>
        <div className="title">
          <label>{"عنوان نظر"}</label>
          <InputComponent
            name={"title"}
            value={title}
            onChange={(e) => handleInputChange(e, setTitle)}
          />
        </div>
        <div className="text">
          <label>{"متن نظر"}</label>
          <TextareaComponent
            name={"text"}
            value={text}
            onChange={(e) => handleInputChange(e, setText)}
          />
        </div>
        <button className="comment_btn" type="submit">
          ثبت نظر
        </button>
      </form>
    </div>
  );
}

export default AddForm;
