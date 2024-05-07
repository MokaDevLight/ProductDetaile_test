import { Button } from "antd";

function ButtonComponent({ type, children, ...props }) {
  return (
    <Button type={type} {...props}>
      {children}
    </Button>
  );
}

export default ButtonComponent;
