import Link from "next/link";
import ToggleSwitch from "../ToggleSwitch";
import styles from "./navigation.module.scss";

function NavigationBar() {
  return (
    <div className={styles["navigation-bar"]}>
      <Link href="/">
        <h1>Playground CSS</h1>
      </Link>
      <ToggleSwitch />
    </div>
  );
}

export default NavigationBar;
