import { ChangeEvent, useState } from "react";
import styles from "./toggle-switch.module.scss";

function ToggleSwitch() {
  const [isChecked, setIsChecked] = useState(false);

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    console.log("onChange");
    setIsChecked(event.currentTarget.checked);
  };

  return (
    <div className={styles["toggle-switch-container"]}>
      <label htmlFor="toggle-switch" className={styles["toggle-switch"]}>
        <input
          name="toggle-switch"
          type="checkbox"
          onChange={(event) => onChangeHandler(event)}
          checked={isChecked}
        />
        <span className={`${styles["slider"]} ${styles["round"]}`}></span>
      </label>
    </div>
  );
}

export default ToggleSwitch;
