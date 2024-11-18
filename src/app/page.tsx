import Image from "next/image";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <Image src="/logo.svg" alt="Logo" width={100} height={100}></Image>
          <p className={styles.text}>CYBERZONE UI</p>
        </div>
        <div className={styles.middle}>ТЕХНОЛОГИИ:</div>
        <div className={styles.bottom}>
          <Image src="/next.svg" alt="Logo" width={60} height={60}></Image>
          <Image src="/react.svg" alt="Logo" width={60} height={60}></Image>
          <Image
            src="/typescript.svg"
            alt="Logo"
            width={60}
            height={60}
          ></Image>
          <Image src="/scss.svg" alt="Logo" width={60} height={60}></Image>
          <Image src="/cva.svg" alt="Logo" width={60} height={60}></Image>
          <Image src="/storybook.svg" alt="Logo" width={60} height={60}></Image>
        </div>
      </div>
    </div>
  );
}
