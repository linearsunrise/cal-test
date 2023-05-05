import LayoutSide from './LayoutSide';
import React from 'react'

export default function NavBar(props: { children?: React.ReactNode }) {
  return (
    <React.StrictMode>
      <LayoutSide
        classes={{
          componentClass: 'app-layout__nav',
          headClass: 'app-layout__head',
          headClassModifier: 'app-layout__head--200',
          headContentClass: 'app-layout__head-content',
          mainClass: 'app-layout__navigation-list',
          mainContentClass: 'app-layout__navigation-list-container',
        }}
      >
        {props.children}
      </LayoutSide>
    </React.StrictMode>
  );
}
