import React from 'react'
import { useEffect } from 'react'
import styled from 'styled-components'

export default function ContentPercent(props) {
  // useEffect(() => {
  //   document.getElementsByClassName('.count').each(function () {
  //     $(this).prop('Counter',0).animate({
  //         Counter: $(this).text()
  //     }, {
  //         duration: 3000,
  //         easing: 'swing',
  //         step: function (now) {
  //             $(this).text(Math.ceil(now));
  //         }
  //     });
  // });
  // })
  return (
    <Container>
      <Percent className="plus">
        {props && props?.input?.fields?.map((item, index) => (
          <Content key={index}>
            <TiTle className='count'>{item?.number_of_statistical[0]?.text ? item?.number_of_statistical[0]?.text : ""}</TiTle>
            <TextPercent>{item.description_of_statistical[0]?.text ? item.description_of_statistical[0]?.text : ""}</TextPercent>
          </Content>
        ))}
      </Percent>
    </Container>
  )
}
const TiTle = styled.h1`
  font-weight: bold;
  font-size: 64px;
  text-align: center;
  font-family: "Calibre Semibold";
  line-height: 56px;
  color: #101010;
  font-weight: 600;
  margin-bottom: 0px;
  @media only screen and (max-width: 600px){
    font-size: 48px;
    color: #101010;
    line-height: 36px;
  }
`
const TextPercent = styled.h5`
  text-align: center;
  font-size: 18px;
  height: 26px;
  font-family: "Calibre Regular";
  color: #222222;
  line-height: 20px;
  @media only screen and (max-width: 600px){
    line-height: 32px;
    margin-bottom: 0px;
  }
`
const Content = styled.div`
   width: 26%;
      @media only screen and (max-width: 600px) {
        margin-left: 0px !important;
        width: 100%;
        height: 80px;
        margin-bottom: 32px;
      }
      @media (min-width: 1024px){
        width: 100%;
      }
      @media (min-width: 1200px){
        width: 30%;
      }
      @media (min-width: 1600px){
        width: 270px;
      }
`
const Percent = styled.div`
    display: flex;
    margin-left: 128px;
    justify-content: space-between;
    margin-right: 128px;
    height: 86px;
    @media only screen and (max-width: 600px) {
      margin-bottom: 20px;
      display: block !important;
      text-align: center;
      margin-left: 37px;
      margin-right: 36px;
      height: 304px;
    }
    @media (min-width: 601px) {
      margin-left: 0px;
      margin-right: 0px;
      margin-bottom: 50px;
  }
   @media (min-width: 768px) {
       margin-bottom: 50px;
  }
  @media (min-width: 1024px) {
    margin-bottom: 50px;
    max-width: 900px;
    .text-aliquam {
      padding-top: 50px;
    }
  }
  @media (min-width: 1200px) {
      display: flex;
      margin-bottom: 96px;
  }
  @media (min-width: 1600px) {
        max-width: 986px;
        margin: 0 auto 86px;
        display: flex;
    }
`
const Container = styled.div`
max-width: 1240px;
margin: 0 auto;
@media only screen and (max-width: 600px) {

}
@media (min-width: 601px) {
  .wrap-header {
    width: 100vw;
  }
  max-width: 585px;
}
@media (min-width: 992px) {
  max-width: 780px;
}
@media (min-width: 1024px) {
  max-width: 900px;
}
@media (min-width: 1200px) {
  max-width: 1024px;
}

@media (min-width: 1400px) {
  max-width: 1151px;
}

@media (min-width: 1600px) {
  max-width: 1240px;
}

@media (min-width: 1800px) {
  max-width: 1380px;
}
`