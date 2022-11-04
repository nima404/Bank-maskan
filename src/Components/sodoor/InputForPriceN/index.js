import { Form, Input } from "antd";
import "antd/dist/antd.css";
import "./style.css";
export function InputForPriceN({ label, disabled, value = 0 , onChange}) {
  const formatChanger = (num) => {
    return new Intl.NumberFormat("fa-Ir").format(num);
  };
  const priceValue = formatChanger(value);
  return (
    <div className="input-price_n">
      <span className="currency_n">ریال</span>
      <Form.Item label={label}>
        <Input disabled={disabled} value={priceValue} onChange={onChange} />
      </Form.Item>
    </div>
  );
}