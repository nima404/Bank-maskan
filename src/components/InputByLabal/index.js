import { Form, Input } from "antd";
import "antd/dist/antd.css";
import "./style.css";
import { Select, Space } from "antd";

<<<<<<< HEAD
export function InputByLabel({ label, disabled, mode,value ,status, onchange }) {
=======
export function InputByLabel({
  label,
  disabled,
  mode,
  status,
  maxLength,
  type,
  value,
  onChange,
}) {
>>>>>>> fa2afc6188308df5af59b437872ca8f5daa273fa
  return (
    <Form.Item label={label}>
      {mode === "dropDown" ? (
        <Space direction="vertical" style={{ width: "278px" }}>
          <Select status={status} style={{ width: "278px" }} />
        </Space>
      ) : (
<<<<<<< HEAD
        <Input disabled={disabled} value={value} onChange={(e)=>onchange(e.currentTarget.value)} />
=======
        <Input
          value={value}
          onChange={(e) => onChange(e.currentTarget.value)}
          disabled={disabled}
          type={type}
          maxLength={maxLength}
        />
>>>>>>> fa2afc6188308df5af59b437872ca8f5daa273fa
      )}
    </Form.Item>
  );
}
