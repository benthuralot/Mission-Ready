import styles from "../styles/InputComponent.module.css";

export default function InputComponent(props) {
  return (
    <div className={styles.input}>
      <input onChange={props.handleUserInput} value={props.val} />
    </div>
  );
}
