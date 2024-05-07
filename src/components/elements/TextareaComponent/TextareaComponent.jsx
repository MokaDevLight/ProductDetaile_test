import { Input } from "antd";

function TextareaComponent({ maxLength, rows, ...props }) {
  const { TextArea } = Input;
  return <TextArea rows={rows} maxLength={maxLength} {...props} />;
}

export default TextareaComponent;
