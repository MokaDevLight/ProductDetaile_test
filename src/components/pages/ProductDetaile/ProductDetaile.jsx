import React from "react";

import InformationProducts from "components/container/InformationProducts";
import SliderProducts from "components/container/SliderProducts";
import Comments from "components/container/Comments/Comments";
import AddForm from "components/container/Comments/AddForm";

import "styles/productDetaile.css";
import "styles/formComments.css";

function ProductDetaile() {
  return (
    <>
      <div className="product_detaile">
        <div className="product_detaile_slider">
          <SliderProducts />
        </div>
        <div className="product_detaile_info">
          <InformationProducts />
        </div>
      </div>
      <p className="comment_title">دیدگاه کاربران</p>
      <div>
        <AddForm />
        <Comments />
      </div>
    </>
  );
}

export default ProductDetaile;
