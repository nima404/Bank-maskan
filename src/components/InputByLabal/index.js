import { Form, Input } from "antd";
import "antd/dist/antd.css";
import "./style.css";
export function InputByLabel({ label }) {
  return (
    <Form.Item label={label}>
      <Input />
    </Form.Item>
  );
}
