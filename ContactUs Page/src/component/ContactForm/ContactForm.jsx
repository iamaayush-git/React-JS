import Button from "../Button/Button";
import styles from "./ContactForm.module.css";
import { MdOutlineMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

function ContactForm() {
  return (
    <>
      <div className={styles.form_container}>
        <div className={styles.contact_form}>
          <div className={styles.top_btn}>
            <Button
              text="VIA SUPPORT CHAT"
              icon={<MdOutlineMessage fontSize="25px" />}
            />
            <Button text="VIA CALL" icon={<FaPhoneAlt fontSize="25px" />} />
          </div>
        </div>
        <div className={styles.contact_imgdiv}>
          <img
            className={styles.contact_img}
            src="https://w7.pngwing.com/pngs/179/27/png-transparent-24-7-service-illustration-24-7-service-handyman-los-angeles-customer-service-twenty-four-company-text-service-thumbnail.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
}
export default ContactForm;
