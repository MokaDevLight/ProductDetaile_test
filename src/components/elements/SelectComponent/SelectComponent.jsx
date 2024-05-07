import React from "react";
import { Select } from "antd";

function SelectComponent({
  options,
  handleChange,
  defaultValue,
  placement, ///"topLeft" || "topRight" || "bottomLeft" || "bottomRight"
  ...props
}) {
  return (
    <Select
      defaultValue={defaultValue}
      onChange={handleChange}
      options={options}
      placement={placement}
      size="large"
      {...props}
    />
  );
}

export default SelectComponent;
