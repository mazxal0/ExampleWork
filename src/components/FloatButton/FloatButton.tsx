import {ComponentPropsWithoutRef, useEffect, useState} from "react";
import {FloatButtonVariants, floatButtonVariants} from "@/components/FloatButton/FloatButtonVariants";
import styles from "./FloatButton.module.scss";
import clsx from "clsx";
import Cross from "@/../public/icons/Cross";
import Arrow from "../../../public/icons/Arrow";

type buttonArray = {
  icon: React.ReactNode;
  otherOpeningButtons?: Array<React.ReactNode>;
  switchIconsForOpening?: Array<React.ReactNode>;
  distanceForStartScrolling?: number;
}

type FloatButtonProps = ComponentPropsWithoutRef<'button'> & FloatButtonVariants & buttonArray;

export const FloatButton = ({
                              variant,
                              position,
                              typeFloatButton,
                              floatButtonText,
                              distanceForStartScrolling,
                              icon = [<Cross key="key1"/>],
                              otherOpeningButtons = [<Cross key={123}/>, <Cross key={1234}/>, <Cross key={54321}/>],
                              switchIconsForOpening = [<Arrow key={981234} width={20} height={20}/>, <Cross key={51234}/>],
                              className,
                              ...props
}: FloatButtonProps) => {

  const [showButton, setShowButton] = useState<boolean>(false);
  const changeScrolling = () => {
    if (window.scrollY >= distanceForStartScrolling!) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  }

  const [isOpenOtherButtons, setIsOpenOtherButtons] = useState<boolean>(false);
  const [isRenderOpeningFloatButtons, setIsRenderOpeningFloatButtons] = useState<boolean>(false);
  const changeStateOtherButtons = () => {
    setIsOpenOtherButtons(prevState => !prevState);
    if(!isRenderOpeningFloatButtons) {
      setIsRenderOpeningFloatButtons(true);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", changeScrolling);
    return () => window.removeEventListener("scroll", changeScrolling);
  }, [])

  const scrollToTop = () => {
    console.log(distanceForStartScrolling);
    window.scrollTo({top: 0, behavior: "smooth"});
  }

  const onClickOnButton = () => {
    if (typeFloatButton === "scrollingToTop") {
      scrollToTop();
    } else if (typeFloatButton === "opening") {
      changeStateOtherButtons();
    }
  }

  return (
    <button onClick={onClickOnButton} {...props} className={
      clsx(
        styles.button,
        floatButtonVariants({variant, position, typeFloatButton, className}),
        typeFloatButton === "scrollingToTop" && (showButton && styles.is_show),
      )}
    >
      {typeFloatButton === "text" ?
        <>
          <div className={styles.standard_div_image_style}>
            {icon}
          </div>
          <div className={styles.float_button_information}>
            {floatButtonText}
          </div>
        </>
        :
        typeFloatButton === "scrollingToTop" ?
          <div className={styles.standard_div_image_style}>
            {icon}
          </div>
          :
          typeFloatButton === "opening" ?
            <div className={styles.div_change_icons}>
              <div className={clsx(styles.icon, isOpenOtherButtons && styles.show_cross)}>
                {switchIconsForOpening[1]}
              </div>
              <div className={clsx(styles.icon, !isOpenOtherButtons && styles.show_arrow)}>
                {switchIconsForOpening[0]}
              </div>
            </div>
            :
            null
      }
      {typeFloatButton === "opening" && otherOpeningButtons.map((element, index) =>
        <button
          key={`${index} 12345xx`}
          style={{bottom: `${50 * (index)}px`}}
          className={
            clsx(
              styles.other_button,
              styles.button,
              floatButtonVariants({variant, position, typeFloatButton, className}),
              isOpenOtherButtons && styles.open_other_buttons,
              isRenderOpeningFloatButtons && !isOpenOtherButtons && styles.close_other_buttons,
              styles.standard_div_image_style
            )}
        >{element}</button>
      )}
    </button>
  )
}
