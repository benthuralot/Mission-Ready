import styles from "../styles/ShowInput.module.css";
export default function ShowInput(props) {
  return (
    <div className={styles.displaySection}>
      This is the ShowInput Component:
      <br />
      Text: {props.userInput}
    </div>
  );
}
