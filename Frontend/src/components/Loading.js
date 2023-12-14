// Loading.js
import React from 'react';
import {Background, LoadingText} from './loading_style';

export default () => {
  return (
    <Background>
        <LoadingText>잠시만 기다려 주세요.</LoadingText>
        <img src={`${process.env.PUBLIC_URL}/img/dr_loading.gif`} alt="로딩중" width="5%" />
    </Background>
    );
};