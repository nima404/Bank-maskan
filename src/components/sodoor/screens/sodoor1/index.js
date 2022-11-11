import { FileTextOutlined, UserSwitchOutlined } from "@ant-design/icons";
import { UserAddOutlined } from "@ant-design/icons";
import { InputByLabel } from "../../../InputByLabal";
import { ButtonN } from "../../ButtonN";
import { SubmitButtonBoxN } from "../../SubmitButtonBoxN";
import { DiffrentInputByLable } from "../../TextArea";
import { InformationBoxN } from '../../InformationBoxN'
import { InputGroupBoxN } from '../../InputGroupBoxN'
import { NotificationText } from '../../../NotificationText'
import styles from './style.module.css';
import { Form, Input } from "antd";
import { InputForPriceN } from "../../InputForPriceN";

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
                <InputGroupBoxN >
                    <InputByLabel label={" نام و نام خانوادگی "} disabled={true}></InputByLabel>
                    <InputByLabel label={" کدملی "} disabled={true}></InputByLabel>
                    <InputByLabel label={" شماره همراه "} disabled={true}></InputByLabel>
                    <InputByLabel status={"error"} mode={"dropDown"} label={" شماره حساب "} disabled={true}></InputByLabel>
                </InputGroupBoxN>
                <InputGroupBoxN>
                    <InputByLabel label={" کدپستی "}></InputByLabel>
                    <DiffrentInputByLable label={'آدرس'} rows={3}></DiffrentInputByLable>
                </InputGroupBoxN>
            </InformationBoxN>
            <InformationBoxN icon={<FileTextOutlined />} title={"اطلاعات سفته"} number={'2'}>
                <InputGroupBoxN >
                    <InputForPriceN label={'مبلغ تعهد'} ></InputForPriceN>
                    <InputByLabel label={"تاریخ صدور"} />
                </InputGroupBoxN>
                <InputGroupBoxN >
                    <InputByLabel label={"محل پرداخت"} />
                    <InputByLabel label={"تاریخ سررسید"} />
                </InputGroupBoxN>
            </InformationBoxN>
            <InformationBoxN title={" اطلاعت گیرنده "} icon={<UserAddOutlined />} number={'3'}>
                <InputGroupBoxN >
                    <InputByLabel label={" نام و نام خانوادگی "}></InputByLabel>
                    <InputByLabel label={" کدملی "}></InputByLabel>
                    <InputByLabel label={" شماره همراه "}></InputByLabel>
                </InputGroupBoxN>
                <InputGroupBoxN >
                    <DiffrentInputByLable label={'توضیخات'} rows={3}></DiffrentInputByLable>
                </InputGroupBoxN>
            </InformationBoxN>
            <SubmitButtonBoxN>
                <ButtonN type="button" mode='submit' text='ارسال درخواست صدور سفته'></ButtonN>
                <ButtonN type="button" text='مرحله قبل'></ButtonN>
            </SubmitButtonBoxN>
        </div>
    )
}