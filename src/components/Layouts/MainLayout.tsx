import * as React from 'react';
import {
  Navbar,
  NavbarGroup,
  NavbarHeading,
  NavbarDivider,
  Button,
} from '@blueprintjs/core';
import { Link } from 'react-router-dom';

import Logo from '../utils/Logo';

const MainLayout = (Component) => (routerProps: {}) => (
  <div>
    <Navbar className="pt-dark navbar">
      <NavbarGroup align="left">
        <Link className="txt-white" to={'/'}>
          <Logo />
        </Link>
      </NavbarGroup>
      <NavbarGroup align="right">
        <Button className="pt-minimal" iconName="projects">
          <Link className="txt-white" to="/projects">Projects</Link>
        </Button>
        <Button className="pt-minimal" iconName="person">
          <Link className="txt-white" to="/contact">Contact</Link>
        </Button>
        <Button className="pt-minimal" iconName="history">
          <Link className="txt-white" to="/history">History</Link>
        </Button>
        <Button className="pt-minimal" iconName="document">
          <Link className="txt-white" to="/cv">CV</Link>
        </Button>
      </NavbarGroup>
    </Navbar>
    <Component {...this.props} />
  </div>
);

export default MainLayout;
