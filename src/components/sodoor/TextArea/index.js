import { Form  } from "antd";
import { Input } from 'antd';
const { TextArea } = Input;
export function DiffrentInputByLable(props) {
    
    return(
    <Form.Item label={props.label}>
        <TextArea rows={props.rows} placeholder={props.placeholder} maxLength={props.maxLength} />
    </Form.Item>
    )
}