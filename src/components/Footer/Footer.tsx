import {ComponentPropsWithoutRef, useState} from "react";
import { FooterVariants, footerVariants } from "./footerVariants";
import package_json from "@/../package.json";
import styles from "./Footer.module.scss";
import Link from "next/link";
import {CyberzoneLogo} from "../../../public/icons/MainLogo";
import {VK} from "../../../public/icons/VK";
import {Twitch} from "../../../public/icons/Twitch";
import {Telegram} from "../../../public/icons/Telegram";
import {Shevron} from "../../../public/icons/Shevron";
import clsx from "clsx";

type informationElementType = {
  value: string;
  link: string;
}

type informationColumnType = {
  title: string;
  column: Array<informationElementType>;
}

type FooterProps = ComponentPropsWithoutRef<"footer"> & FooterVariants & {
    information: Array<informationColumnType>
};

export const Footer = ({
  className,
  information
}: FooterProps) => {

  const [isVisible, setIsVisible] = useState<Array<boolean>>(
    () => Array<boolean>(information.length).fill(false)
  );
  const [isCanAnimation, setIsCanAnimation] = useState<Array<boolean>>(
    () => Array<boolean>(information.length).fill(false)
  );

  const onChangeIsVisibleSubClauses = (index: number) => {
    setIsVisible(prev =>
      prev.map((_, elIndex) => elIndex === index ?
        !isVisible[index]
        : isVisible[elIndex])
    );
    if (!isCanAnimation[index]) {
      setIsCanAnimation(prev =>
        prev.map((value, elIndex) => elIndex === index ?
          true
          : value)
      );
    }
  }

  return (
    <div className={footerVariants({className})}>
      <div className={styles.root}>
        <div className={styles.social_media}>
          <h2 className={styles.social_media_text}>СОЦ СЕТИ</h2>
          <div className={styles.social_media_icons}>
            <Link className={styles.standard_icon} href={'https://vk.com/esports.mirea'}>
              <VK/>
            </Link>
            <Link className={styles.standard_icon} href={'https://www.twitch.tv/rtu_mirea'}>
              <Twitch/>
            </Link>
            <Link className={styles.standard_icon} href={'https://t.me/mirea_esports'}>
              <Telegram/>
            </Link>
            <Link className={styles.standard_icon} href={'https://t.me/mirea_esports900'}>
              <Telegram/>
            </Link>
          </div>
        </div>
          <div className={styles.desktop}>
            <div className={styles.line}></div>
              <div className={styles.information}>
                {information.map(block => (
                  <div key={block.title + block.title} className={styles.column}>
                    <div key={block.title} className={styles.title_of_information}>{block.title}</div>
                    {block.column.map((column) => (
                      <Link
                        key={column.link}
                        href={column.link}
                        className={styles.text_of_information}>
                        {column.value}
                      </Link>
                    ))}
                  </div>
                ))
                }
              </div>
              <div className={styles.line}></div>
            </div>
            <div className={styles.mobile}>
              <div className={styles.mini_line}></div>
              <div className={styles.information}>
                {information.map((block, index) =>
                  <div key={block.title + block.title} className={styles.column}
                    onClick={() => onChangeIsVisibleSubClauses(index)}>
                    <div className={styles.div_information_title_and_shevron}>
                      <div key={block.title} className={styles.title_of_information}>
                        {block.title}
                      </div>
                      <div className={clsx(styles.shevron, isCanAnimation && isVisible[index] && styles.to_rotate_shevron)}>
                        <Shevron color={"none"}/>
                      </div>
                    </div>
                      <div
                        className={clsx(
                          styles.text_of_information,
                          isCanAnimation[index] && (isVisible[index] ? styles.is_active : styles.is_closing)
                        )}
                      >
                        {block.column.map((column) => (
                          <Link
                            key={column.value + column.link}
                            href={column.link}
                            className={styles.element_of_text_of_information}
                          >
                            {column.value}
                          </Link>
                        ))}
                      </div>
                    {index !== (information.length - 1) && <div className={styles.mini_line}></div>}
                  </div>
                )}
              </div>
              <div className={styles.line}></div>
            </div>
        <div className={styles.bottom_part}>
          <Link href={"https://esports.mirea.ru"}>
            <CyberzoneLogo width={158} height={45.4}/>
          </Link>
          <div className={styles.copyrights}>
            © 2024 Киберспортивный центр РТУ МИРЭА. Все права защищены.
          </div>
          <div className={styles.version_text}>
            Версия: {package_json.version}
          </div>
        </div>
        <div className={styles.version_text_mini}>Версия: {package_json.version}</div>
        <div className={styles.copyrights_mini}>
          © 2024 Киберспортивный центр РТУ МИРЭА. Все права защищены.
        </div>
      </div>
    </div>
  )
};