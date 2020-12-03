import React from "react";
import styles from "./infobox.module.scss";
const slides = [
  {
    title: "Time to Share: 6 for $3.99*",
    img:
      "https://res.cloudinary.com/dx4wkpab8/image/upload/v1573640170/comp_plate_promo1_wsmolg.png",
    description:
      "Lorem ipsum dolor sit amet. consectetur adipisicing elit, sed do eiusmod tempor incididunt ut la bore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exefcitalion ullamoo laboris nisi ut aliquip ex ea commodo oonsequat.",
    note:
      "* At vero eos et accusamus et iusto odo dtgntsslmos duclmus qui blandltlis praesentlum voluptatum delenrtl atque corruptl quos doQres et quas molestlas exceptun sint occaecatl cupidrtate non pro v dent, slmllique sunt In culpa qui otflcia deserunt mollrtia anlmi. id est la bo aim et dolorum tuga.",
    productUrl:
      "https://res.cloudinary.com/dx4wkpab8/image/upload/v1573640170/comp_plate_promo1_wsmolg.png",
    id: 1,
  },
  {
    title: "Rise 'n shine",
    img:
      "https://res.cloudinary.com/dx4wkpab8/image/upload/v1573640171/comp_plate_promo2_nlqjfe.png",
    description:
      "Lorem ipsum dolor sit amet. consectetur adipisicing elit, sed do eiusmod tempor incididunt ut la bore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exefcitalion ullamoo laboris nisi ut aliquip ex ea commodo oonsequat.",
    note:
      "* At vero eos et accusamus et iusto odo dtgntsslmos duclmus qui blandltlis praesentlum voluptatum delenrtl atque corruptl quos doQres et quas molestlas exceptun sint occaecatl cupidrtate non pro v dent, slmllique sunt In culpa qui otflcia deserunt mollrtia anlmi. id est la bo aim et dolorum tuga.",
    productUrl:
      "https://res.cloudinary.com/dx4wkpab8/image/upload/v1573640171/comp_plate_promo2_nlqjfe.png",
    id: 2,
  },
  {
    title: "PM Snackers: Brownie Bites",
    img:
      "https://res.cloudinary.com/dx4wkpab8/image/upload/v1573640171/comp_plate_promo4_f87x7g.png",
    description:
      "Lorem ipsum dolor sit amet. consectetur adipisicing elit, sed do eiusmod tempor incididunt ut la bore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exefcitalion ullamoo laboris nisi ut aliquip ex ea commodo oonsequat.",
    note:
      "* At vero eos et accusamus et iusto odo dtgntsslmos duclmus qui blandltlis praesentlum voluptatum delenrtl atque corruptl quos doQres et quas molestlas exceptun sint occaecatl cupidrtate non pro v dent, slmllique sunt In culpa qui otflcia deserunt mollrtia anlmi. id est la bo aim et dolorum tuga.",
    productUrl:
      "https://res.cloudinary.com/dx4wkpab8/image/upload/v1573640171/comp_plate_promo4_f87x7g.png",
    id: 3,
  },
  {
    title: "PM Snackers: Brownie Bites 2",
    img:
      "https://res.cloudinary.com/dx4wkpab8/image/upload/v1573640171/comp_plate_promo3_wnp43x.png",
    description:
      "Lorem ipsum dolor sit amet. consectetur adipisicing elit, sed do eiusmod tempor incididunt ut la bore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exefcitalion ullamoo laboris nisi ut aliquip ex ea commodo oonsequat.",
    note:
      "* At vero eos et accusamus et iusto odo dtgntsslmos duclmus qui blandltlis praesentlum voluptatum delenrtl atque corruptl quos doQres et quas molestlas exceptun sint occaecatl cupidrtate non pro v dent, slmllique sunt In culpa qui otflcia deserunt mollrtia anlmi. id est la bo aim et dolorum tuga.",
    productUrl:
      "https://res.cloudinary.com/dx4wkpab8/image/upload/v1573640171/comp_plate_promo4_f87x7g.png",
    id: 4,
  },
];

export class InfoBox extends React.Component {
  state = {};

  renderSlide() {
    return slides.map((slide, i) => {
      const key = Math.floor(Math.random * 1000).toString();
      return (
        <div key={key} className={styles.slide}>
          <img className={styles.img} src={slide.img} alt="" />
          <h2>{slide.title}</h2>
          <p>{slide.description}</p>
        </div>
      );
    });
  }

  render() {
    const slidesJsx = this.renderSlide();
    console.log(slidesJsx);
    return (
      <div className={styles.infoBox}>
        <div className={styles.slides}>{slidesJsx}</div>
        <div className={styles.controls}>
          <button className={styles.control}>{"<<"}</button>
          <button className={styles.control}>{"<"}</button>
          <button className={styles.control}>{">"}</button>
          <button className={styles.control}>{">>"}</button>
        </div>
      </div>
    );
  }
}
