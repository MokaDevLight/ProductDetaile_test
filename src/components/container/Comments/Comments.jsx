import React from "react";
import { useSelector } from "react-redux";

import "styles/formComments.css";

function Comments() {
  const comments = useSelector((state) => state.feature.comments);
  return (
    <div className="comments_form">
      {comments?.map((item, index) => (
        <div key={index}>
          <h4>{item?.title}</h4>
          <p>{item?.text}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Comments;
