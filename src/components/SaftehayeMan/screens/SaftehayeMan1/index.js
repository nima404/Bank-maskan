import { DatePicker, Space } from 'antd';
import React from "react";
import AlignInputbyLable from "../../../AlignInputByLable";
import { InformationBox } from "../../../InformationBox";
import { Checkbox } from 'antd';
import Style from "./style.module.css"
import { Button } from 'antd';
import { Details } from '../../../Details';


export default function SaftehayeMan1() {
    return (
        <>
            <InformationBox>
                <AlignInputbyLable label={"نام گیرنده سفته"}></AlignInputbyLable>
                <AlignInputbyLable label={"شناسه یکتای سفته"}></AlignInputbyLable>
                <div>
                    <label className={Style.labelDate}>تاریخ سررسید سفته</label>
                    <Space direction="vertical" className={Style.date}>
                        <DatePicker />
                        <DatePicker />
                    </Space>
                </div>
                <Checkbox>عندالمطالبه</Checkbox>
                <Button type="primary" >
                    جستجو
                </Button>
            </InformationBox>
            <Details headerTitle={"صادر کننده سفته"} className={Style.Datail}>
                <p className={Style.InnerDetail}> سفته‌ای جهت نمایش وجود ندارد</p>
            </Details>
            <Details headerTitle={"دارنده/دارنده جدید سفته"}></Details>
            <Details headerTitle={"ظهر نویسی سفته"}></Details>
            <Details headerTitle={"ضامن سفته"}></Details>
        </>

    )
}