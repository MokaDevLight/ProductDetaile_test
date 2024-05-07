import React from "react";
import { useDispatch, useSelector } from "react-redux";

import ButtonComponent from "components/elements/ButtonComponent";
import PriceLabelComponent from "components/elements/PriceLabelComponent";
import SelectComponent from "components/elements/SelectComponent";
import {
  changeColor,
  changeSize,
} from "../../../redux/slices/ProductDetailSlice";

import { SlBasket } from "react-icons/sl";

import "styles/information_products.css";

function InformationProducts() {
  const dispatch = useDispatch();
  const dataProduct = useSelector((state) => state.feature);
  const colorOption = [
    { value: "RED", label: "قرمز" },
    { value: "BLUE", label: "آبی" },
    { value: "YELLOW", label: "زرد" },
    { value: "BLACK", label: "مشکی" },
  ];
  const sizeOption = [
    { value: "LARGE", label: "بزرگ" },
    { value: "MED", label: "متوسط" },
    { value: "SMALL", label: "کوچک" },
  ];

  function handleChangeColor(e) {
    dispatch(changeColor(e));
  }

  function handleChangeSize(e) {
    dispatch(changeSize(e));
  }

  return (
    <>
      <div className="information_products">
        <h1 className="information_products_title">
          {dataProduct?.titleProduct}
        </h1>
      </div>
      <div className="information_products_description">
        <p className="information_products_description_text">
          {dataProduct?.descriptionProduct}
        </p>
      </div>
      <div className="information_products_title_item">
        <ul className="information_products_title_ul">
          {dataProduct?.featureItem?.map((item) => (
            <li key={item.id}>
              <span className="information_products_title_key">{`${item.key} : `}</span>
              <span className="information_products_title_value">
                {item.value}
              </span>
            </li>
          ))}
        </ul>
        <hr />
        <div className="information_products_feature">
          <div className="feature_dropdown">
            <SelectComponent
              placeholder=" رنگ مورد نظر را انتخاب کنید"
              showSearch
              options={colorOption}
              placement={"bottomRight"}
              className={"color_dropdown"}
              onChange={(e) => {
                handleChangeColor(e);
              }}
            />
            <SelectComponent
              placeholder=" اندازه مورد نظر را انتخاب کنید"
              showSearch
              options={sizeOption}
              placement={"bottomRight"}
              className={"size_dropdown"}
              onChange={(e) => {
                handleChangeSize(e);
              }}
            />
          </div>
        </div>
        <hr />
        <div className="information_products_price">
          <div className="information_products_price_value">
            <PriceLabelComponent price={dataProduct?.price} />
          </div>
          <div>
            <ButtonComponent
              size={"larg"}
              type={"primary"}
              className="information_products_button"
              onClick={() => alert("به سبد خرید افزوده شد")}
            >
              <SlBasket size={23} />
              <span>{"افزودن به سبد خرید"}</span>
            </ButtonComponent>
          </div>
        </div>
      </div>
    </>
  );
}

export default InformationProducts;
