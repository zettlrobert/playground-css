import { ChangeEvent, useState } from "react";
import styles from "./toggle-switch.module.scss";

function ToggleSwitch() {
  const [isChecked, setIsChecked] = useState(false);

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.currentTarget.checked);
  };

  const onKeyDownHandler = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      setIsChecked(!isChecked);
    }
  };

  return (
    <div className={styles["toggle-switch-container"]}>
      <label
        htmlFor="toggle-switch"
        className={styles.toggleSwitch}
        tabIndex={0}
        onKeyDown={(event) => onKeyDownHandler(event)}
      >
        <input
          id="toggle-switch"
          type="checkbox"
          onChange={(event) => onChangeHandler(event)}
          checked={isChecked}
        />
        <span
          className={`${styles.slider} ${styles.round} ${
            isChecked ? styles.checked : ""
          }`}
        ></span>
      </label>
    </div>
  );
}

export default ToggleSwitch;
