import StyleUtils from "@/lib/style/StyleUtils";

export default function LayoutSide(props: {
  classes: {
    componentClass?: string;
    headClass?: string;
    headClassModifier?: string;
    headContentClass?: string;
  };
}) {
  return (
    <div className={props.classes.componentClass}>
      <div
        className={StyleUtils.getStyleString([
          props.classes.headClass,
          props.classes.headClassModifier,
        ])}
      >
        <div className={props.classes.headContentClass}></div>
      </div>
    </div>
  );
}
