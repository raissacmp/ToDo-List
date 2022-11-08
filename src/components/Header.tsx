import styles from "./Header.module.css";

import logoToDo from "../assets/logo-todo.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logoToDo} className={styles.logo} alt="React logo" />
    </header>
  );
}
