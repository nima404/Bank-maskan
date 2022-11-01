import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Button, Modal, Space } from 'antd';
import { useState } from 'react';

export const VerifyModal = ({ Title, Content, mode, handleOnOk }) => {
    mode === "justMain" ? Modal.confirm({

        title: Title,
        icon: <ExclamationCircleOutlined />,
        content: Content,
        onOk: () => {
            handleOnOk()
            return new Promise((resolve, reject) => {
                setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
            }).catch(() => console.log('Oops errors!'));
        },
        onCancel: () => {
            handleOnOk()
        },
        okButtonProps: {
            style: {
                display: "none",
            }
        },
        cancelButtonProps: {
            style: {
                display: "none",
            }
        }
    }) : Modal.confirm({

        title: Title,
        icon: <ExclamationCircleOutlined />,
        content: Content,
        onOk: () => {
            handleOnOk()
            return new Promise((resolve, reject) => {
                setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
            }).catch(() => console.log('Oops errors!'));
        },
        onCancel: () => {
            handleOnOk()
        }
    })

}