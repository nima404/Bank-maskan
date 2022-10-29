import React from "react";
import style from "./Style.module.css";
import { DownOutlined } from "@ant-design/icons";
import { Button, Dropdown, Space } from "antd";

const index = () => {
  return (
    <div className={style.container}>
      <Dropdown overlay={"ali"}>
        <Button>
          <Space>
            Button
            <DownOutlined />
          </Space>
        </Button>
      </Dropdown>
      <div className={style.user}>
        <div className={style.users_column}>
          <div className={style.user_title}>
            <p>نام کامل دریافت‌کننده</p>
            <p>مبلغ تعهد</p>
          </div>
          <div>
            <p>مجتبی خوش‌سخن</p>
            <p>۴۰.۰۰۰.۰۰۰ ریال</p>
          </div>
        </div>
        <div className={style.users_column}>
          <div className={style.user_title}>
            <p>تاریخ سررسید</p>
            <p>شناسه یکتا</p>
          </div>
          <div>
            <p>عند المطالبه</p>
            <p>۱۰۰۳۰۲۰۵۰۰۲۰۰۲۰۳</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
