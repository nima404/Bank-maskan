import React from "react";
import { Form, Input } from "antd";
import "antd/dist/antd.css";
import Style from "./Style.module.css"
export default function AlignInputbyLable({ label , onChange}) {
  return (
    <div className={Style.AlignInputbyLable}>
      <label className={Style.label}>{label}</label>
      <Input 
      onChange={(e) => onChange(e.currentTarget.value)}
      />
    </div>

  )
}