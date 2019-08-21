import React from 'react';
import i18next from 'i18next';
import { Link } from 'react-router-dom';
import { Route } from 'react-router';
import { renderComponent } from '../shared';
import LogoSVG from 'app/assets/images/logo.svg';
import {
  Container, Header, Content, Logo, LogoContainer, NavContainer, NavItem
} from './styles';

export default ({ component, ...props }) => (
  <Container>
    <Header>
      <LogoContainer>
        <Logo src={LogoSVG} alt={i18next.t('shared.applicationName')}/>
      </LogoContainer>

      <NavContainer defaultSelectedKeys={[props.path]}>
        <NavItem key="/"><Link to="/">{i18next.t('shared.nav.home')}</Link></NavItem>
        <NavItem key="/team"><Link to="/team">{i18next.t('shared.nav.team')}</Link></NavItem>
        <NavItem key="/contact"><Link to="/contact">{i18next.t('shared.nav.contact')}</Link></NavItem>
      </NavContainer>
    </Header>

    <Content>
      <Route {...props} render={renderComponent(component, props)} />
    </Content>
  </Container>
);
