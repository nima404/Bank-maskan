import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Button, Modal, Space } from 'antd';
import {
    LoadingOutlined,
} from '@ant-design/icons';
import { useState } from 'react';

export const VerifyModal = ({ Title, Content }) => {
    const { confirm } = Modal;
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const showConfirm = () => {
        confirm({
            title: Title,
            icon: <ExclamationCircleOutlined />,
            content: Content,
            onOk() {
                setConfirmLoading(true);
                setTimeout(() => {
                    setOpen(false);
                    setConfirmLoading(false);
                }, 2000);
            },
            onCancel() {
            },

            okText: "jj",
            cancelText: "ویرایش",
            style: { textAlign: 'right' },
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