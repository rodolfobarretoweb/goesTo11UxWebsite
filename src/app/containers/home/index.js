import React from 'react';
import i18next from 'i18next';
import { Icon } from 'antd';
import Button from 'app/components/button';
import {
  BannerContainer,
  GridContentContainer,
  ContentContainer,
  TextContentContainer,
  LeftContentContainer,
  RightContentContainer
} from './styles';

export default () => (
  <div>
    <BannerContainer />

    <ContentContainer>
      <GridContentContainer>
        <TextContentContainer>
          <LeftContentContainer>
            <h2>{i18next.t('home.content.left.title')}</h2>
            <p>{i18next.t('home.content.left.text')}</p>

            <Button href="">
              {i18next.t('home.content.knowMore')}
              <Icon type="arrow-right"/>
            </Button>
          </LeftContentContainer>
        </TextContentContainer>

        <TextContentContainer>
          <RightContentContainer>
            <h2>{i18next.t('home.content.right.title')}</h2>
            <p>{i18next.t('home.content.right.text')}</p>

            <Button href="">
              {i18next.t('home.content.knowMore')}
              <Icon type="arrow-right"/>
            </Button>
          </RightContentContainer>
        </TextContentContainer>
      </GridContentContainer>
    </ContentContainer>
  </div>
);
