import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Button, Modal, Space } from 'antd';

export const VerifyModal = ({ Title, Content }) => {
    const { confirm } = Modal;
    const showConfirm = () => {
        confirm({
            title: Title,
            icon: <ExclamationCircleOutlined />,
            content: Content,
            onOk() {
            },
            onCancel() {
            },
            okText: "تایید",
            cancelText: "ویرایش",
            style: { textAlign: 'right' }
        });
    };
    return (
        <div>
            <Space wrap>
                <Button onClick={showConfirm}>Modal</Button>
            </Space>
        </div>
    )
}