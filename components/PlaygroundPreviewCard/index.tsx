import { useRouter } from "next/router";
import styles from "./playground-preview-card.module.scss";

function PlaygroundPreviewCard(props: any) {
  const { playground } = props;

  const router = useRouter();

  const onClickHandler = () => {
    router.push(playground.path);
  };

  return (
    <div onClick={onClickHandler} className={styles["playground-preview-card"]}>
      <h2>{playground.title}</h2>
      <p>{playground.description}</p>
    </div>
  );
}

export default PlaygroundPreviewCard;
