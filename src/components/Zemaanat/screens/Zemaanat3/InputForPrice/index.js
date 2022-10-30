import { Form, Input } from "antd";
import "antd/dist/antd.css";
import "./style.css";
export function InputForPrice({ label, disabled, value }) {
  const formatChanger = (num) => {
    return new Intl.NumberFormat("fa-Ir", {
      style: "currency",
      currency: "IRR",
    })
      .format(num)
      .slice(0, -3);
  };
  const priceValue = formatChanger(value);
  return (
    <div className="input-price">
      <Form.Item label={label}>
        <Input disabled={disabled} value={priceValue} />
      </Form.Item>
    </div>
  );
}
