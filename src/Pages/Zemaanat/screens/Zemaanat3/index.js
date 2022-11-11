import { useState } from "react";
import { Maybe } from "../../../../components/Maybe";
import { NotificationText } from "../../../../components/NotificationText";
import styles from "./styles.module.css";
import "./style.css";
import { SafteInformaion } from "./components/SafteInformation";
import { Payment } from "./components/Payment";
import { useLocation } from "react-router-dom";
export function Zemaanet3() {
  const [code, setCode] = useState("۷۸۹۴۵۶");
  const [signError, setsignError] = useState(false);
  const [signed, setSigned] = useState(false);
  const location = useLocation();
  const safte = location.state.safteInformation;
  return (
    <div className={styles.Zemaanet3}>
      <section className={styles.Zemaanet3__notification}>
        <NotificationText type={"success"}>
          کاربر گرامی اطلاعات شما تا این مرحله ذخیره گردیده است. همچنین
          می‌توانید با استفاده از کد پی‌گیری، فرایند جاری را ادامه دهید. کد
          پی‌گیری: {code}
        </NotificationText>
        <NotificationText type={"inform"}>
          کاربر گرامی، جهت خرید سفته مورد نظر خود می‌بایست ابتدا آن را امضا
          نمایید. لطفا پیش از ارسال درخواست امضای سفته، راهنمای امضا را مطالعه
          نمایید.
        </NotificationText>
        <Maybe condition={signError}>
          <NotificationText type={"error"}>
            امضای سفته با خطا مواجه شد، لطفا مجددا تلاش کنید.
          </NotificationText>
        </Maybe>
      </section>
      <section className={styles.Zemaanet3__body}>
        {/* safte information section */}
        <SafteInformaion
          safte={safte}
          signed={signed}
          setSigned={setSigned}
          signError={signError}
          setsignError={setsignError}
        />
        {/* payment information section */}
        <Maybe condition={signed}>
          <Payment />
        </Maybe>
      </section>
    </div>
  );
}
