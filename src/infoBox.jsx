import React from "react";
import styles from "./infobox.module.scss";
import { Slide } from "./slide.jsx";

export class InfoBox extends React.Component {
  state = {
    activeIndex: 0,
    slides: [],
  };

  async componentDidMount() {
    const response = await fetch(
      "https://my-json-server.typicode.com/nkgrand/ads-box-server/advertisments"
    );
    const slides = await response.json();
    this.setState({ slides });
  }

  renderSlide() {
    return this.state.slides.map((slide, i) => {
      const key = Math.floor(Math.random() * 1000).toString();
      const isActive = this.state.activeIndex === i;
      const onButtonClick = (data) => {
        console.log(data);
      };
      return <Slide {...{ key, isActive, ...slide, onButtonClick }} />;
    });
  }

  increeseIndex() {
    this.setState({
      activeIndex:
        this.state.activeIndex + 1 < this.state.slides.length
          ? this.state.activeIndex + 1
          : 0,
    });
  }

  decreseIndex() {
    this.setState({
      activeIndex:
        this.state.activeIndex >= 1
          ? this.state.activeIndex - 1
          : this.state.slides.length - 1,
    });
  }

  render() {
    const slidesJsx = this.renderSlide();
    console.log("render");
    return (
      <div className={styles.infoBox}>
        <div className={styles.slides}>{slidesJsx}</div>
        <div className={styles.controls}>
          <button className={styles.control}>{"<<"}</button>
          <button
            className={styles.control}
            onClick={() => this.decreseIndex()}
          >
            {"<"}
          </button>

          <button
            className={styles.control}
            onClick={() => this.increeseIndex()}
          >
            {">"}
          </button>

          <button className={styles.control}>{">>"}</button>
        </div>
      </div>
    );
  }
}
