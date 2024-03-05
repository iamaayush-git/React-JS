import styles from './Navigation.module.css'
function Navigation(){
  console.log(styles);
    return (
    <>
   <div className='container'>
    <nav className={styles.navigation}>
      <img className={styles.logo} src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg" alt=""/>
      <ul className={styles.navList}>
        <li>HOME</li>
        <li>ABOUT</li>
        <li>CONTACT</li>
      </ul>
    </nav>
   </div>
    </>
    )
}
export default Navigation