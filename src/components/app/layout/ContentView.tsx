import LayoutSide from './LayoutSide';
import React from 'react';

export default function ContentView(props: { children?: React.ReactNode }) {
  return (
    <LayoutSide
      classes={{
        componentClass: 'app-layout__container',
        headClass: 'app-layout__head',
        headClassModifier: 'app-layout__head--100',
        headContentClass: 'app-layout__head-content',
        mainClass: 'app-layout__main',
        mainContentClass: 'app-layout__main-content',
      }}
    >
      {props.children}
    </LayoutSide>
  );
}
