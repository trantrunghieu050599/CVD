import React from "react"
import styled from "styled-components"
import imagePlus from "../../images/pluscopy@2x.png"
import imageMinus from "../../images/minus@2x.png"
import { useState } from "react"
import { RichText } from "prismic-reactjs"
import { Collapse } from "reactstrap"

export default function Accordion({ input }) {
  const data = input.fields.map(item => item)
  const [isOpen, setIsOpen] = useState(null)
  const [indicator, setindicator] = useState(null)
  const [status, setStatus] = useState("Closed")
  const onExited = () => setStatus("Closed")
  function updateSelected(i) {
    setindicator(i)
    if (isOpen === i) {
      setIsOpen(null)
    } else {
      setIsOpen(i)
    }
  }
  // test build
  return (
    <Container>
      {data.map((item, i) => (
        <Contents>
          <Content
            key={i}
            onClick={() => updateSelected(i)}
            className={isOpen === i ? "open" : ""}
            indicator={i === indicator}
          >
            <SubTitle>{item.sub_title.map(item => item.text)}</SubTitle>
            <Title>{item.title.map(item => item.text)}</Title>
            <DivImg onClick={() => updateSelected(i)}>
              <img
                src={isOpen === i ? imageMinus : imagePlus}
                className={isOpen === i ? "minus" : " plus"}
                onClick={() => updateSelected(i)}
                indicator={i === indicator}
              />
            </DivImg>
          </Content>
          <Collapse isOpen={isOpen === i} onExited={onExited}>
            <ContentSub>
              <TextTitle key={i}>
                {RichText.render(item.content_title)}
              </TextTitle>
              <TextCT>{RichText.render(item.content_text)}</TextCT>
              <TextCTC>{RichText.render(item.content_title_center)}</TextCTC>
              <TextCTA>{RichText.render(item.content_text_after)}</TextCTA>
              <TextF>
                {RichText.render(item.application)}
                {RichText.render(item.content_footer)}&nbsp;
                <a href="#">{RichText.render(item.email)}</a>&nbsp;
                {RichText.render(item.content_footer2)}
              </TextF>
            </ContentSub>
          </Collapse>
        </Contents>
      ))}
    </Container>
  )
}
const Container = styled.div`
  @media (max-width: 600px) {
    margin: 0 auto;
    height: auto;
    width: 343px;
    margin-top: 23px;
  }
  @media (max-width: 360px) {
    margin: 0 auto;
    height: auto;
    width: 298px;
    margin-top: 23px;
  }
  @media (min-width: 600px) {
    margin: 0 32px;
    height: auto;
    margin-top: 60px;
  }
  @media (min-width: 768px) {
    margin: 0 48px;
    margin-top: 60px;
  }
  @media (min-width: 992px) {
    width: 900px;
    margin: 0 auto;
    height: auto;
    margin-top: 60px;
  }
`
const DivImg = styled.div`
  position: absolute;
  img {
    width: 21px;
  }
  .plus {
    transition: all 0.5s ease-in-out;
    transform: rotate(-90deg);
    height: 21px;
  }
  .minus {
    transition: all 0.5s ease-in-out;
    transform: rotate(0deg);
  }
  right: 0;
  margin-right: 9px;
  top: 10px;
`
const Content = styled.div`
  width: 100%;
  height: auto;
  border-bottom: ${props =>
    props.className === "open" ? "none" : "1px solid #e4e4e4"};
  position: relative;
`
const Contents = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 30px;

  @media (max-width: 600px) {
    margin-bottom: 18px;
  }
`
const SubTitle = styled.p`
  color: #999999;
  font-family: Calibre Semibold;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 1px;
  line-height: 16px;
  margin-bottom: 10px;
  position: relative;
  margin-left: 80px;
  &::after {
    position: absolute;
    right: calc(100% + 16px);
    top: 31%;
    display: block;
    content: "";
    width: 64px;
    height: 2px;
    background: rgb(254, 207, 9);
  }
`
const Title = styled.h1`
  color: #101010;
  font-family: Calibre Semibold;
  font-size: 32px;
  font-weight: 600;
  letter-spacing: -0.5px;
  line-height: 32px;
  margin-bottom: 32px;

  @media (max-width: 600px) {
    font-size: 24px;
    line-height: 24px;
    width: 90%;
    margin-bottom: 19px;
  }
`
const ContentSub = styled.div`
  margin-bottom: 55px;
  transition: all 0.4s ease-in;
  // width: 87%;
`
const TextTitle = styled.div`
  margin-bottom: 18px;
  p {
    margin-bottom: 4px;
    color: #222222;
    font-family: Calibre Regular;
    font-size: 18px;
    letter-spacing: 0;
    line-height: 24px;
  }

  @media (max-width: 600px) {
    p {
      font-size: 16px;
    }
  }
`
const TextCT = styled.p`
  margin-bottom: 10px;
  ul {
    margin-bottom: 4px;
    color: #222222;
    font-family: Calibre Regular;
    font-size: 18px;
    letter-spacing: 0;
    line-height: 24px;
    margin-left: 10px;
    padding-left: 20px;

    li {
      margin-bottom: 4px;
      color: #222222;
      font-family: Calibre Regular;
      font-size: 18px;
      letter-spacing: 0;
      line-height: 24px;
      padding-left: 5px;
    }
  }

  @media (max-width: 600px) {
    ul {
      font-size: 16px;
      li {
        font-size: 16px;
      }
    }
  }
`
const TextCTC = styled.div`
  margin-bottom: 16px;
  p {
    margin-bottom: 4px;
    color: #222222;
    font-family: Calibre Regular;
    font-size: 18px;
    letter-spacing: 0;
    line-height: 24px;
  }
`
const TextCTA = styled.div`
  margin-bottom: 32px;
  ul {
    margin-left: 10px;
    padding-left: 20px;
    li {
      margin-bottom: 4px;
      color: #222222;
      font-family: Calibre Regular;
      font-size: 18px;
      letter-spacing: 0;
      line-height: 24px;
      padding-left: 5px;
    }
  }
`
const TextF = styled.div`
  p {
    margin-bottom: 4px;
    color: #000000;
    font-family: Calibre Regular;
    font-size: 18px;
    letter-spacing: 0;
    line-height: 24px;
  }
  p:first-child {
    font-weight: 700;
  }

  p:not(:first-child) {
    display: inline-block;
  }

  p:last-child {
    min-width: 327px;
  }

  @media (max-width: 600px) {
    p {
      font-size: 16px;
    }
  }

  a {
    display: inline-block;
    text-decoration: none;
    color: #000000;

    p:first-child {
      font-weight: 400;
      display: inline;
    }

    @media (max-width: 600px) {
      text-decoration: underline;
    }
  }
`
