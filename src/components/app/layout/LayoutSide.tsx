import StyleUtils from '@/lib/style/StyleUtils';
import React from 'react';

export default function LayoutSide(props: {
  classes: {
    componentClass?: string;
    headClass?: string;
    headClassModifier?: string;
    headContentClass?: string;
    mainClass?: string;
    mainClassModifier?: string;
    mainContentClass?: string;
  };
  children?: React.ReactNode;
}) {
  return (
    <React.StrictMode>
      <div className={props.classes.componentClass}>
        <div
          className={StyleUtils.getStyleString([
            props.classes.headClass,
            props.classes.headClassModifier,
          ])}
        >
          <div className={props.classes.headContentClass}></div>
        </div>
        <div
          className={StyleUtils.getStyleString([
            props.classes.mainClass,
            props.classes.mainClassModifier,
          ])}
        >
          <div className={props.classes.mainContentClass}>{props.children}</div>
        </div>
      </div>
    </React.StrictMode>
  );
}
