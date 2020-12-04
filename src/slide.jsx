import React from "react";
import styles from "./slide.module.scss";

export class Slide extends React.Component {
  render() {
    const { isActive, img, title, description, onButtonClick } = this.props;
    return (
      <div className={`${styles.slide} ${isActive ? styles.active : ""}`}>
        <img className={styles.img} src={img} alt="" />
        <h2>{title}</h2>
        <p>{description}</p>
        <button onClick={() => onButtonClick("Hello" + title)}>Click Me</button>
      </div>
    );
  }
}
