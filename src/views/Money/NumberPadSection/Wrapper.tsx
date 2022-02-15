import styled from 'styled-components';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;

  > .output {
    background: white;
    font-size: 36px;
    color:  #62b37a;
    line-height: 72px;
    text-align: right;
    padding: 0 16px;
    box-shadow: inset 0 -5px 5px -5px rgba(0, 0, 0, 0.25),
    inset 0 5px 5px -5px rgba(0, 0, 0, 0.25);
  }

  > .pad {
    > button {
      cursor: pointer;
      font-size: 18px;
      float: left;
      width: 25%;
      height: 64px;
      border: none;
      color: white;

      &.ok {
        height: 128px;
        float: right;
      }

      &.zero {
        width: 50%;
      }

      &:nth-child(1) {
        background: #62b37a;
        opacity: 0.45;
      }

      &:nth-child(2),
      &:nth-child(5) {
        background: #62b37a;
        opacity: 0.5;
      }

      &:nth-child(3),
      &:nth-child(6),
      &:nth-child(9) {
        background: #62b37a;
        opacity: 0.6;
      }

      &:nth-child(4),
      &:nth-child(7),
      &:nth-child(10) {
        background: #62b37a;
        opacity: 0.7;
      }

      &:nth-child(8),
      &:nth-child(11),
      &:nth-child(13) {
        background: #62b37a;
        opacity: 0.8;
      }

      &:nth-child(12) {
        background: #62b37a;
      }

      &:nth-child(14) {
        background: #62b37a;
        opacity: 0.95;
      }
    }
    @media(max-height: 570px){
      >button{
        height: 40px;
        &.ok{
          height: 80px;
        }
      };
    }
  }
`;

export {Wrapper}