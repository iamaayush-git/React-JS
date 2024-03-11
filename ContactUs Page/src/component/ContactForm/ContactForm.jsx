import Button from "../Button/Button";
import styles from "./ContactForm.module.css";
import { MdOutlineMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useState } from "react";

function ContactForm() {
  let [name,setName] = useState("");
  let [e_mail,setE_mail] = useState("");
  let [text,setText] = useState("");
  // let name,e_mail,text;
  function submitted(e) {
  setName(e.target[0].value);
  setE_mail(e.target[1].value);
  setText(e.target[2].value);
    e.preventDefault();
  }
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
          <Button
            isOutline={true}
            text="VIA Email Form"
            icon={<MdEmail fontSize="25px" />}
          />
          <form onSubmit={submitted}>
            <div className={styles.form_control}>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" />
            </div>
            <div className={styles.form_control}>
              <label htmlFor="email">E-Mail</label>
              <input type="email" name="email" />
            </div>
            <div className={styles.form_control}>
              <label htmlFor="text">Text</label>
              <textarea id="text"></textarea>
            </div>
            <div className={styles.submitbtn}>
              <Button text="Submit" />
            </div>
          </form>
        </div>
        <div className={styles.contact_imgdiv}>
          <img
            className={styles.contact_img}
            src="https://w7.pngwing.com/pngs/179/27/png-transparent-24-7-service-illustration-24-7-service-handyman-los-angeles-customer-service-twenty-four-company-text-service-thumbnail.png"
            alt=""
          />
        </div>
      </div>
      {
         "Name: "+ name+ "  Email: "+ e_mail + "  Text: "+ text 
        }
    </>
  );
}
export default ContactForm;
