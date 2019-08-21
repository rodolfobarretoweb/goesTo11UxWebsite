import { Button as ButtonLib } from 'antd';
import styled from 'styled-components';

export const Button = styled(ButtonLib)`
  border-radius: 6px;
  border: none;
  line-height: inherit;
  padding: 10px 15px;
  height: inherit;
  font-size: 13px;

  color: ${props => {
    switch (props.type) {
      default:
        return '#4BFFA5';
    }
  }};

  background-color: ${props => {
    switch (props.type) {
      default:
        return '#292929';
    }
  }};

  &:hover {
    color: #fff;

    background-color: ${props => {
      switch (props.type) {
        default:
          return '#383838';
      }
    }};
  }

  i {
    padding: 5px 10px 5px 10px;
    border-radius: 5px;
    margin-left: 30px !important;
    height: inherit;
    line-height: inherit;

    background-color: ${props => {
      switch (props.type) {
        default:
          return '#1C1C1C';
      }
    }};
  }
`;
