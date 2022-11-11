import { Form } from "antd";
import { Input } from "antd";
const { TextArea } = Input;
export function DiffrentInputByLable(props) {
  return (
    <Form.Item label={props.label}>
      <TextArea
        rows={props.rows}
        placeholder={props.placeholder}
        value={props.value}
        onChange={(e) => props.onChange(e.currentTarget.value)}
        maxLength={props.maxLength}
      />
    </Form.Item>
  );
}
