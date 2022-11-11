import { Form, Input } from "antd";
import "antd/dist/antd.css";
import { useState } from "react";
import "./style.css";
export function InputForPriceN({ label, disabled, value = 0, onChange }) {
  const [priceValue, setPriceValue] = useState("");
  const formatChanger = (num) => {
    // return new Intl.NumberFormat("fa-Ir").format(num);
    return num;
  };
  function handleChange(e) {
    setPriceValue(formatChanger(e.currentTarget.value));
    onChange(e.currentTarget.value);
  }
  function handleOnKeyPress(event) {
    if (!/[0-9]/.test(event.key) || event.key === " ") {
      event.preventDefault();
    }
  }
  return (
    <div className="input-price_n">
      <span className="currency_n">ریال</span>
      <Form.Item label={label}>
        <Input
          disabled={disabled}
          value={priceValue}
          onKeyPress={(event) => handleOnKeyPress(event)}
          onChange={(e) => handleChange(e)}
        />
      </Form.Item>
    </div>
  );
}
