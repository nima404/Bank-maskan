import { Input } from "antd";
import "./style.css";
export default function MultiInput({
  maxLength = 1,
  type,
  value,
  setValue,
  seperator,
  style = {},
  label,
  autoFocus = false,
  parentStyle = {},
}) {
  function handelChange(event, index) {
    let text = event.target.value;
    setValue((prev) => prev.map((node, ind) => (ind === index ? text : node)));
    if (text.length >= maxLength && event.target.nextSibling) {
      event.target.nextSibling.focus();
    }
  }
  function handleKeyDown(event) {
    const element = event.target;
    if (event.keyCode === 8 && element.value.length === 0) {
      let previous = element.previousSibling;
      if (previous && previous.tagName === "INPUT") {
        element.previousSibling.focus();
      }
    }
  }
  function handleOnKeyPress(event) {
    if ((!/[0-9]/.test(event.key) && type === "number") || event.key === " ") {
      event.preventDefault();
    }
  }
  return (
    <div className="card-number-container ant-form-item-label">
      <label>{label}</label>
      <div className="card-inputs" style={{ ...parentStyle }}>
        {seperator}
        {value.map((otp, index) => {
          return (
            <Input
              style={{ ...style }}
              onKeyPress={(event) => handleOnKeyPress(event)}
              type={label === "رمز کارت" ? "password" : "text"}
              key={`${index}_${label}`}
              autoFocus={index === 0 && autoFocus}
              name={"otp" + index}
              maxLength={maxLength}
              onKeyDown={(event) => handleKeyDown(event)}
              onChange={(event) => handelChange(event, index)}
              defaultValue={otp[index]}
              className="otp-input-fields"
              onFocus={(e) => e.target.select}
            />
          );
        })}
      </div>
    </div>
  );
}
