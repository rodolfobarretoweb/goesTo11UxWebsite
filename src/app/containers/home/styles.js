import styled from 'styled-components';
import ContentBg from 'app/assets/images/home-content-bg.svg';

export const BannerContainer = styled.div`
  height: 300px;
`;

export const ContentContainer = styled.div`
  display: flex;
  height: 800px;
  background-image: url(${ContentBg});
  background-size: cover;
  background-repeat: no-repeat;
`;

export const GridContentContainer = styled.div`
  z-index: 1;
  display: flex;
  justify-content: space-between;

  @media (min-width: 1200px) {
    width: 1200px;
    margin: 0 auto;
  }
`;

export const TextContentContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  max-width: 350px;

  h2 {
    margin-top: 300px;
    color: #2ECC71;
    font-size: 40px;
    line-height: 120%;
  }

  p {
    color: #C6C4C5;
    font-size: 20px;
  }
`;

export const LeftContentContainer = styled.div``;

export const RightContentContainer = styled.div`
  margin-left: 0px;
`;
