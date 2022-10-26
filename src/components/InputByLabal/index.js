import styles from "./styles.module.css";
import { Button, Form, Input, Radio } from 'antd';
import 'antd/dist/antd.css';

export function InputByLabel({ label }) {
  return (
    <Form.Item label={label}>
      <Input />
    </Form.Item>
  );
}
