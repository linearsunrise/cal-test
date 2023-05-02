import LayoutSide from "./LayoutSide";

export default function NavBar() {
  return (<LayoutSide
    classes={{
      componentClass: "app-layout__nav",
      headClass: "app-layout__head",
      headClassModifier: "app-layout__head--200",
      headContentClass: "app-layout__head-content",
    }}
  ></LayoutSide>);
}
