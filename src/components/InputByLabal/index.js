import { Form, Input } from "antd";
import "antd/dist/antd.css";
import "./style.css";
export function InputByLabel({ label, disabled }) {
  return (
    <Form.Item label={label}>
      <Input disabled={disabled} />
    </Form.Item>
  );
}
