import { useState } from "react"
import { Button } from "../../../Button"
import { Details } from "../../../Details"
import { InformationBox } from "../../../InformationBox"
import { InputByLabel } from "../../../InputByLabal"
import { InputGroupBox } from "../../../InputGroupBox"
import { NotificationText } from "../../../NotificationText"
import { SubmitButtonBox } from "../../../SubmitButtonBox"
import { VerifyModal } from "./components/VerifyModal"
import styles from "./style.module.css";
import { numberToWords } from "@persian-tools/persian-tools";

import { UserOutlined, IdcardOutlined, UserDeleteOutlined } from '@ant-design/icons';
import { StepsBox } from "../../../Steps"

export const Zemanat2 = () => {
    const [trackingCode, setTrackingCode] = useState("654978")
    const [price, setPrice] = useState("")

    const stepListObject = [
        { name: "Test1", status: "process" },
        { name: "Test2", status: "wait" },
        { name: "Test3", status: "wait" },
        { name: "Test4", status: "wait" },
    ]
    return (
        <div className={styles.Zemanat3_container}>

            <StepsBox stepsList={stepListObject} />

            <NotificationText type={"success"}>
                کاربر گرامی اطلاعات شما تا این لحظه ذخیره گردیده است. همچنین میتوانید با استفاده از کد پیگیری، فرایند جاری را ادامه دهید. کد پیگیری: {trackingCode}
            </NotificationText>
            <NotificationText type={"inform"}>
                کاربر گرامی، لطفا ضمن انتخاب شماره حساب مورد نظر خود، نسبت به تکمیل اطلاعات سفته و گیرنده آن اقدام نمایید.
            </NotificationText>

            <Details headerTitle={"اطلاعات سفته"}>
                <InformationBox title={"اطلاعات صادر کننده"} icon={<UserOutlined />}>
                    <div className={styles.input_section}>
                        <InputGroupBox >
                            <InputByLabel label={"نوع شخص"} />
                            <InputByLabel label={"نام و نام خانوداگی"} />
                            <InputByLabel label={"شماره / شناسه ملی"} />
                            <InputByLabel label={"شماره همراه"} />
                            <InputByLabel label={"کد ثنا"} />
                        </InputGroupBox>
                        <InputGroupBox>
                            <InputByLabel label={"شماره حساب"} />
                            <InputByLabel label={"کد پستی"} />
                            <InputByLabel label={"محل اقامت"} />
                        </InputGroupBox>
                    </div>
                </InformationBox>

                <InformationBox title={"اطلاعات سفته"} icon={<IdcardOutlined />}>
                    <div className={styles.input_section}>
                        <InputGroupBox>
                            <InputByLabel value={price} onchange={(val) => setPrice(val)} label={"مبلغ تعهد"} />
                            <p className={styles.persian_price}>{numberToWords(price)}</p>
                            <InputByLabel label={"تاریخ و زمان صدور"} />
                            <InputByLabel label={"محل پرداخت"} />
                            <InputByLabel label={"شماره همراه"} />
                        </InputGroupBox>
                        <InputGroupBox>
                            <InputByLabel label={"نام عامل ثبت کننده"} />
                            <InputByLabel label={"شناسه پرداخت"} />
                            <InputByLabel label={"تاریخ سر رسید"} />
                            <InputByLabel label={"وضعیت سفته"} />
                        </InputGroupBox>
                    </div>
                </InformationBox>

                <InformationBox title={"اطلاعات دریافت کننده"} icon={<UserDeleteOutlined />}>
                    <div className={styles.input_section}>
                        <InputGroupBox>
                            <InputByLabel label={"نوع شخص"} />
                            <InputByLabel label={"نام و نام خانوادگی"} />
                            <InputByLabel label={"شماره / شناسه ملی"} />
                            <InputByLabel label={"شماره همراه"} />
                        </InputGroupBox>
                        <InputGroupBox>
                            <InputByLabel label={"کد ثنا"} />
                            <InputByLabel label={"توضیحات"} />
                        </InputGroupBox>
                    </div>
                </InformationBox>
            </Details>

            <Details headerTitle={"اطلاعات ظهر نویسان"}>
            </Details>

            <Details headerTitle={"اطلاعات ضامن ها"}>
            </Details>

            <hr />

            <InformationBox title={"اطلاعات ضامن جدید"}>
                <div className={styles.input_section}>
                    <InputGroupBox>
                        <InputByLabel label={"نوع شخص ضامن"} />
                        <InputByLabel label={"نام و نام خانوداگی"} />
                        <InputByLabel label={"شماره / شناسه ملی"} />
                        <InputByLabel label={"تاریخ تولد"} />
                        <InputByLabel label={"شماره همراه"} />
                        <InputByLabel label={"کد ثنا"} />
                    </InputGroupBox>
                    <InputGroupBox>
                        <InputByLabel label={"شماره حساب"} mode="dropDown" status={"error"} />

                        <InputByLabel label={"شناسه یکتا"} />
                        <InputByLabel label={"آدرس"} />
                        <InputByLabel label={"توضیحات"} />
                    </InputGroupBox>
                </div>
            </InformationBox>

            <SubmitButtonBox>
                <Button mode={"submit"} text="ارسال درخواست ضمانت نامه" />
                <Button mode={"cancle"} text="مرحله قبل" />
            </SubmitButtonBox>

            <VerifyModal Title={"testTitle"} />

            <br />
        </div>
    )
}