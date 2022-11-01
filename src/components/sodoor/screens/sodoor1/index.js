import { FileTextOutlined, UserSwitchOutlined } from "@ant-design/icons";
import { UserAddOutlined } from "@ant-design/icons";
import { InputByLabel } from "../../../sodoor/InputByLabal";
import { Button } from "../../../sodoor/Button";
import { SubmitButtonBox } from "../../SubmitButtonBox";
import { DiffrentInputByLable } from "../../TextArea";
import { InformationBoxN } from '../../InformationBoxN'
import { InputGroupBox } from '../../InputGroupBox'
import { NotificationText } from '../../NotificationText'
import styles from './style.module.css';
import { Form, Input } from "antd";
import { InputForPrice } from "../../InputForPrice";

export function Sodoor1() {
    return (
        <div className={styles.sodoor_container}>
            <NotificationText type={"success"}>
                کاربر گرامی اطلاعات شما تا این مرحله ذخیره گردیده است. همچنین می‌توانید با استفاده از کد پی‌گیری، فرایند جاری را ادامه دهید. کد پی‌گیری: ۷۸۹۴۵۶
            </NotificationText>
            <NotificationText type={"inform"}>
                کاربرگرامی، لطفا ضمن انتخاب شماره حساب موردنظر خود، نسبت به تکمیل اطلاعات سفته و گیرنده آن اقدام نمایید.
            </NotificationText>
            <InformationBoxN title={" اطلاعت متعهد "} icon={<UserSwitchOutlined />} number={'1'}>
                <InputGroupBox>
                    <InputByLabel label={" نام و نام خانوادگی "} disabled={true}></InputByLabel>
                    <InputByLabel label={" کدملی "} disabled={true}></InputByLabel>
                    <InputByLabel label={" شماره همراه "} disabled={true}></InputByLabel>
                    <InputByLabel status={"error"} mode={"dropDown"} label={" شماره حساب "} disabled={true}></InputByLabel>
                </InputGroupBox>
                <InputGroupBox>
                    <InputByLabel label={" کدپستی "}></InputByLabel>
                    <DiffrentInputByLable label={'آدرس'} rows={3}></DiffrentInputByLable>
                </InputGroupBox>
            </InformationBoxN>
            <InformationBoxN icon={<FileTextOutlined />} title={"اطلاعات سفته"} number={'2'}>
                <InputGroupBox>
                    <InputForPrice label={'مبلغ تعهد'} ></InputForPrice>
                    <InputByLabel label={"تاریخ صدور"} />
                </InputGroupBox>
                <InputGroupBox>
                    <InputByLabel label={"محل پرداخت"} />
                    <InputByLabel label={"تاریخ سررسید"} />
                </InputGroupBox>
            </InformationBoxN>
            <InformationBoxN title={" اطلاعت گیرنده "} icon={<UserAddOutlined />} number={'3'}>
                <InputGroupBox>
                    <InputByLabel label={" نام و نام خانوادگی "}></InputByLabel>
                    <InputByLabel label={" کدملی "}></InputByLabel>
                    <InputByLabel label={" شماره همراه "}></InputByLabel>
                </InputGroupBox>
                <InputGroupBox>
                    <DiffrentInputByLable label={'توضیخات'} rows={3}></DiffrentInputByLable>
                </InputGroupBox>
            </InformationBoxN>
            <SubmitButtonBox>
                <Button type="button" mode='submit' text='ارسال درخواست صدور سفته'></Button>
                <Button type="button" text='مرحله قبل'></Button>
            </SubmitButtonBox>
        </div>
    )
}