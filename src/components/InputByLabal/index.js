import { Form, Input } from "antd";
import "antd/dist/antd.css";
import "./style.css";
import { Select, Space } from "antd";

export function InputByLabel({ label, disabled, mode,value ,status, onchange }) {
  return (
    <Form.Item label={label}>
      {mode == "dropDown" ? (
        <Space direction="vertical" style={{ width: "278px" }}>
          <Select status={status} style={{ width: "278px" }} />
        </Space>
      ) : (
        <Input disabled={disabled} value={value} onChange={(e)=>onchange(e.currentTarget.value)} />
      )}
    </Form.Item>
  );
}
