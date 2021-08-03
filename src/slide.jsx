import React from 'react';
import styles from './slide.module.css';

export class Slide extends React.Component {
  render() {
    const { isActive, img, title, description } = this.props;
    return (
      <div className={`${styles.slide} ${isActive ? styles.active : ''}`}>
        <img className={styles.img} src={img} alt="" />
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    );
  }
}
