import { useEffect, useRef, useState } from "react";
import styles from "./animated-spotlight.module.scss";

function AnimatedSpotlightPage() {
  const [scrollOffsetTop, setScrollOffsetTop] = useState<undefined | number>(
    undefined
  );

  const [animationContainerOffset, setAnimationContainerOffset] = useState<
    undefined | number
  >(undefined);

  // This has to be added to the container which gets the scroll
  const animationContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleScroll() {
      setScrollOffsetTop(window.scrollY);
      /* console.log(scrollOffsetTop); */
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollOffsetTop]);

  // Event listner on the animated-spotlight-page keeping track of window scroll positionc
  useEffect(() => {
    /* console.log('window.scroll: ', window.scroll) */
    function logScroll() {}
    window.addEventListener("scroll", logScroll);
    return () => window.removeEventListener("scroll", logScroll);
  }, []);

  // Event listner on the animated-spotlight-page, keeping track of container animated-spotlight-container scroll position
  useEffect(() => {
    const calculateRotation = (scrollDegreePerDistance: number) => {
      // 0 - 1300 Scroll Height
      // roation between 85deg and 0
      // pixel for one degree max scroll height / 85
      // event.target.scrollTopMax
      // current scroll position / 15
      setRightRotation(animationContainerOffset! / scrollDegreePerDistance);
      setLeftRotation(
        (animationContainerOffset! / scrollDegreePerDistance) * -1
      );
    };

    function handleScroll(event: any) {
      /* console.log("evt", event.target) */
      setAnimationContainerOffset(animationContainerRef.current?.scrollTop);

      // Value to calculate amount of degrees per scoll distance
      let scrollDegreePerDistance = event.target.scrollTopMax / 68;
      calculateRotation(scrollDegreePerDistance);
    }

    animationContainerRef.current!.addEventListener("scroll", (evt) =>
      handleScroll(evt)
    );

    return () =>
      animationContainerRef.current!.removeEventListener(
        "scroll",
        handleScroll
      );
  }, [animationContainerOffset]);

  const [leftRotation, setLeftRotation] = useState<number | undefined>();
  const [rightRotation, setRightRotation] = useState<number | undefined>();

  return (
    <>
      <div className={styles["animation-spotlight"]}>
        {/* The spotlight shining to the left, positioned with left scroll orignn is on right, programmatically top left */}
        <div
          style={{ rotate: `${leftRotation}deg` }}
          className={styles["left-spot"]}
        />

        <div
          style={{ rotate: `${rightRotation}deg` }}
          className={styles["right-spot"]}
        />

        <div
          ref={animationContainerRef}
          className={styles["animated-spotlight-container"]}
        >
          {/* This is a placeholder, container providing height to have scroll space */}
          <div className={styles.animatedSpotlightContainerSpacer} />
        </div>

        <div className={styles.spacer}>
          <p className={styles.paragraph}>
            scrollOffsetTop: {JSON.stringify(scrollOffsetTop)}
          </p>
          <p className={styles.paragraph}>
            animationContainerOffset: {animationContainerOffset}{" "}
            {JSON.stringify(animationContainerOffset)}
          </p>
          <p className={styles.paragraph}>leftRotation: {leftRotation}</p>
        </div>
      </div>

      <div className={styles.spacer} />
    </>
  );
}

export default AnimatedSpotlightPage;
