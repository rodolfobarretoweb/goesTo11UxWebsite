import React from 'react';
import i18next from 'i18next';
import { Link } from 'react-router-dom';
import { Route } from 'react-router';
import { renderComponent } from '../shared';
import LogoSVG from 'app/assets/images/logo.svg';
import LogoSymbolSVG from 'app/assets/images/logo-symbol.svg';
import {
  Container,
  Header,
  Content,
  FooterContainer,
  Logo,
  LogoContainer,
  NavContainer,
  NavItem
} from './styles';

export default ({ component, ...props }) => (
  <Container>
    <Header>
      <LogoContainer>
        <Logo src={LogoSVG} alt={i18next.t('shared.applicationName')}/>
      </LogoContainer>

      <NavContainer defaultSelectedKeys={[props.path]}>
        <NavItem key="/"><Link to="/">{i18next.t('shared.layout.nav.home')}</Link></NavItem>
        <NavItem key="/team"><Link to="/team">{i18next.t('shared.layout.nav.team')}</Link></NavItem>
      </NavContainer>
    </Header>

    <Content>
      <Route {...props} render={renderComponent(component, props)} />
    </Content>

    <FooterContainer>
      <h4>{i18next.t('shared.layout.footer.title')}</h4>
      <a href="mailto:hey@goesto11ux.com" target="_blank" rel="noopener noreferrer">hey@goesto11ux.com</a>
      <img src={LogoSymbolSVG} alt="Goes to 11 ux" />
      <span>{i18next.t('shared.layout.footer.location')}</span>
    </FooterContainer>
  </Container>
);
