import styled from 'styled-components';

const NotesSection = styled.section`
  background: #f1f4f4;
  padding: 0 16px;
  font-size: 14px;
  >label{
    display:flex;
    align-items: center;
    >span{
      margin-right: 16px;
      white-space: nowrap;
    }
    >input{
      display:block;
      width: 100%;
      height: 70px;
      background: none;
      border:none;
    }
  }
`;

export {NotesSection}