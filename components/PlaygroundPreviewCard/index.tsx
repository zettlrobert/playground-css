import Link from "next/link";
import styles from "./playground-preview-card.module.scss";

function PlaygroundPreviewCard(props: any) {
  const { playground } = props;

  return (
    <div className={styles["playground-preview-card"]}>
      <h2>{playground.title}</h2>
      <p>{playground.description}</p>
      <Link href={playground.path}>{playground.title}</Link>
    </div>
  );
}

export default PlaygroundPreviewCard;
