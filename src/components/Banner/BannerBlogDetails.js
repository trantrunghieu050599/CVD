import { func } from 'prop-types';
import React from 'react';
import styled from 'styled-components'
import { theme } from '../../utils/theme';


export default function BannerBlogDetails ({titles, sub}) {
    return (
        <Container>
            <SubTitle>
                <Sub>
                    {sub}
                </Sub>
                <Title>
                    {titles}
                </Title>
            </SubTitle>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 365px;
    background-color: #ffffff; 
    @media(max-width: 600px){
        width: 100%;
        height: 282px;
        background-color: #ffffff ;
    }
    @media(min-width: 600px){
        width: 100%;
        height: 365px;
        background-color: #ffffff ;
    }
`
const SubTitle = styled.div`
   
    @media(max-width: 600px){
        padding-top: 85px;
        width: 343px;
        margin : 0 auto;
    }
    @media(min-width: 1600px){
        padding: 159px 260px 48px 262px;
    }
`
const Sub = styled.p`
    color: #999999;
    font-family: Calibre Semibold;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 1px;
    line-height: 16px;
    position: relative;
    margin-bottom : 24px;
    &::before {
        position: absolute;
        right: calc(100% + 17px);
        top: 36%;
        display: block;
        content: "";
        width: 64px;
        height: 2px;
        background: ${theme.colors.primaryColor};
      }
    @media(max-width: 600px){
        font-size: 12px;
        margin-bottom : 10px;
        margin-left: 65px;
        &::before {
            position: absolute;
            right: calc(100% + 17px);
            top: 36%;
            display: block;
            content: "";
            width: 48px;
            height: 2px;
            background: ${theme.colors.primaryColor};
          }
    }
`
const Title = styled.h1`
    color: #101010;
    font-family: Calibre Bold;
    font-size: 64px;
    font-weight: bold;
    letter-spacing: 0px;
    line-height: 56px;
    margin-bottom: 0px;
    @media(max-width: 600px){
        font-size: 40px;
        font-weight: bold;
        letter-spacing: -1px;
        line-height: 38px;
    }
`