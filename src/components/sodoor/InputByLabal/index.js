import { Form, Input } from "antd";
import "antd/dist/antd.css";
import "./style.css";
import { Select, Space } from "antd";

export function InputByLabel({ label, disabled, mode, status , className }) {
  return (
    <Form.Item label={label}>
      {mode == "dropDown" ? (
        <Space direction="vertical" style={{ width: "278px" }}>
          <Select status={status} style={{ width: "278px" }} />
        </Space>
      ) : (
        <Input disabled={disabled} className={className && className}/>
      )}
    </Form.Item>
  );
}
