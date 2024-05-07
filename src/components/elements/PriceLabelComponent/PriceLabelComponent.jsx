import { digitToFaAndComma } from "utils/toPersianNumber";

function PriceLabelComponent({ price }) {
  return (
    <div className="flex justify-center items-center p-2">
      <strong className="px-0.5 font-bold text-center">
        {digitToFaAndComma(price)}
      </strong>
      <span className="pr-1">تومان</span>
    </div>
  );
}

export default PriceLabelComponent;
