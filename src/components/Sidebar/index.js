import "./style.css";
import { Menu } from "antd";
import logo from "../../assets/images/logo.png";
import {
  CreditCardOutlined,
  FileFilled,
  CarFilled,
  MailFilled,
  FileZipOutlined,
  MedicineBoxOutlined,
  RotateRightOutlined,
  FolderOpenOutlined,
} from "@ant-design/icons";

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem("ثبت نام درگاه و بازیابی رمز عبور", "sub1", <CreditCardOutlined />),
  getItem("افتتاح حساب غیر حضوری", "sub2", <FolderOpenOutlined />),
  getItem("سفته", "sub3", <FileFilled />),
  getItem("شارژ برچسب الکترونیک عوارض", "sub4", <CarFilled />),
  getItem("پرداخت قبض", "sub5", <MailFilled />),
  getItem("خرید شارژ", "sub6", <FileZipOutlined />),
  getItem("دریافت شماره شبا", "sub7", <MedicineBoxOutlined />),
  getItem("خدمات تسهیلات", "sub8", <RotateRightOutlined />),
];
export function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">
        <div>
          <img src={logo} width="35px" height="35px" />
        </div>
        <div className="logo-text">
          <p style={{ fontSize: "14px" }}>بانک مسکن</p>
          <p style={{ fontSize: "9px" }}>بانکداری الکترونیک</p>
        </div>
      </div>
      <Menu
        theme="dark"
        defaultOpenKeys={["sub1"]}
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={items}
      />
    </div>
  );
}
