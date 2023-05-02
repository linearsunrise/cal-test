import LayoutSide from "./LayoutSide";

export default function ContentView() {
  return (
    <LayoutSide
      classes={{
        componentClass: "app-layout__container",
        headClass: "app-layout__head",
        headClassModifier: "app-layout__head--100",
        headContentClass: "app-layout__head-content",
      }}
    ></LayoutSide>
  );
}
