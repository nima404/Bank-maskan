import { Form, Input } from "antd";
import "antd/dist/antd.css";
import "./style.css";
import { Select, Space } from "antd";

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
  return (
    <Form.Item label={label}>
      {mode === "dropDown" ? (
        <Space direction="vertical" style={{ width: "278px" }}>
          <Select status={status} style={{ width: "278px" }} />
        </Space>
      ) : (
        <Input
          value={value}
          onChange={(e) => onChange(e.currentTarget.value)}
          disabled={disabled}
          type={type}
          maxLength={maxLength}
        />
      )}
    </Form.Item>
  );
}
