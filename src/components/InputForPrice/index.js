import { Form, Input } from "antd";
import "antd/dist/antd.css";
import "./style.css";
export function InputForPrice({ label, disabled, value }) {
  const formatChanger = (num) => {
    return new Intl.NumberFormat("fa-Ir").format(num);
  };
  const priceValue = formatChanger(value);
  return (
    <div className="input-price">
      <span className="currency">ریال</span>
      <Form.Item label={label}>
        <Input disabled={disabled} value={priceValue} />
      </Form.Item>
    </div>
  );
}
