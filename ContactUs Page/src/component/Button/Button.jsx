import styles from "./Button.module.css";
function Button({ isOutline, icon, text}) { 
  return (
    <>
      <button className={isOutline ? styles.outline_btn : styles.btn}>
        {icon}
        {text}
      </button>
    </>
  );
}
export default Button;
