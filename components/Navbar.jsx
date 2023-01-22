import Image from 'next/image';
import styles from '../styles/Navbar.module.css'
const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}></div>
      <div className={styles.callButton}>
        <Image src="/images/telephone.png" alt="telephone icon" width='32' height='32'/>
      </div>
      <div className={styles.texts}>
        <div className={styles.text}>ORDER NOW!</div>
        <div className={styles.text}>959-400-141</div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>HomePage</li>
          <li className={styles.listItem}>Products</li>
          <li className={styles.listItem}>Menu</li>
          <Image src="/images/logo.png" alt="company logo" width={160} height={96}/>
          <li className={styles.listItem}>Events</li>
          <li className={styles.listItem}>Blog</li>
          <li className={styles.listItem}>Contact</li>
        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.cart}>
          <Image src="/images/cart.png" width={30} height={30} alt="cart icon"/>
          <div className={styles.counter}>
            2
          </div>
        </div>
      </div>
    </div>
  )
};

export default Navbar;
