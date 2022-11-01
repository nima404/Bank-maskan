import React from 'react';
import { InformationBox } from './InformationBox';
import { NotificationText } from '../../NotificationText';
import { PrinterOutlined } from '@ant-design/icons';
import { Button4 } from './Button4';
import { SubmitButtonBox } from '../../SubmitButtonBox';
import { Button } from '../../Button';
import styles from './style.module.css';
import maskan_icon from '../../../../asets/maskan_icon.jpg'
import "./style.css";

const Sodoor4 = ({ bankResponse = "failed" }) => (
    <div className={styles.sodoor_container}>
        {
            bankResponse === 'success'
                ?
                <NotificationText type={"success"}>
                    کاربر گرامی اطلاعات شما تا این مرحله ذخیره گردیده است. همچنین می‌توانید با استفاده از کد پی‌گیری، فرایند جاری را ادامه دهید. کد پی‌گیری: ۷۸۹۴۵۶
                </NotificationText>
                :
                <>
                    <NotificationText type={"success"}>
                        کاربر گرامی اطلاعات شما تا این مرحله ذخیره گردیده است. همچنین می‌توانید با استفاده از کد پی‌گیری، فرایند جاری را ادامه دهید. کد پی‌گیری: ۷۸۹۴۵۶
                    </NotificationText>
                    <NotificationText type={"error"}>
                        صدور سفته با خطا مواجه شد.
                    </NotificationText>
                </>
        }
        <InformationBox>
            <div className={styles.div_main}>
                <div className='div_img'>
                    <img src={maskan_icon} />
                    <h4 className='img_h4'>بانک مسکن</h4>
                    <span className='img_span'>بانکداری الکترونیک</span>
                </div>
                <div className={styles.div_table}>
                    <table className={styles.table}>
                        <thead></thead>
                        <tbody>
                            <tr className={styles.normal_tr}>
                                <td>تاریخ و ساعت </td>
                                <td className={styles.diffrent_td}> تاریخ و ساعت </td>
                            </tr>
                            <tr className={styles.diffrent_tr}>
                                <td> کارت مبدا </td>
                                <td className={styles.diffrent_td}> کارت مبدا </td>
                            </tr>
                            <tr className={styles.normal_tr}>
                                <td> کد پی گیری </td>
                                <td className={styles.diffrent_td}> کد پی گیری </td>
                            </tr>
                            <tr className={styles.diffrent_tr}>
                                <td> شناسه یکتا </td>
                                <td className={styles.diffrent_td}> شناسه یکتا </td>
                            </tr>
                            <tr className={styles.normal_tr}>
                                <td> تاریخ صدور </td>
                                <td className={styles.diffrent_td}> تاریخ صدور </td>
                            </tr>
                            <tr className={styles.diffrent_tr}>
                                <td> تاریخ سررسید </td>
                                <td className={styles.diffrent_td}> تاریخ سررسید </td>
                            </tr>
                            <tr className={styles.normal_tr}>
                                <td> مبلغ تعهد </td>
                                <td className={styles.diffrent_td}> مبلغ تعهد </td>
                            </tr>
                            <tr className={styles.diffrent_tr}>
                                <td> کد خطا </td>
                                <td className={styles.diffrent_td}> کد خطا </td>
                            </tr>
                            <tr className={styles.normal_tr}>
                                <td> شرح </td>
                                <td className={styles.diffrent_td}> شرح </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='div_icon'>
                    <Button4 icon={<PrinterOutlined />}></Button4>
                </div>
            </div>
        </InformationBox>
        {
            bankResponse === "success"
                ?
                <SubmitButtonBox>
                    <Button type="button" mode='submit' text='سفته PDF دریافت فایل'></Button>
                    <Button type="button" text='صفخه اصلی'></Button>
                </SubmitButtonBox>
                :
                ""
        }
    </div>
);
export default Sodoor4;