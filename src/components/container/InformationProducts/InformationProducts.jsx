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
  const price = useSelector((state) => state.feature.price);
  const dispatch = useDispatch();
  const featureItem = [
    { id: 1, key: "حافظه داخلی", value: "250 گیگ" },
    { id: 2, key: "حافظه رم", value: "250 گیگ" },
    { id: 3, key: "تعداد سیم کارت", value: "250 گیگ" },
    { id: 4, key: "بلوتوث", value: "250 گیگ" },
    { id: 5, key: "حافظه داخلی", value: "250 گیگ" },
  ];
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
          {"گوشی موبایل سامسونگ مدل S23"}
        </h1>
      </div>
      <div className="information_products_description">
        <p className="information_products_description_text">
          {
            "گوشی موبایل سامسونگ مدل Galaxy S23 Ultra دو سیم کارت ظرفیت 256 گیگابایت و رم 12 گیگابایت"
          }
        </p>
      </div>
      <div className="information_products_title_item">
        <ul className="information_products_title_ul">
          {featureItem?.map((item) => (
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
            <PriceLabelComponent price={price} />
          </div>
          <div>
            <ButtonComponent
              size={"larg"}
              type={"primary"}
              className="information_products_button"
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
