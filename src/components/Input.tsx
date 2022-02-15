import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
  display: flex;
  align-items: center;

  > span {
    margin-right: 16px;
    white-space: nowrap;
  }

  > input {
    display: block;
    width: 100%;
    height: 44px;
    background: none;
    border: none;
  }
  >input[type="date"]{
    -webkit-align-items: center;
    display: -webkit-inline-flex;
    overflow: hidden;
    color: #666;
    padding: 0;
    -webkit-padding-start: 1px;
  }
`;

type  Props = {
    label: string;
    type?:string;
} & React.InputHTMLAttributes<HTMLInputElement>

const Input: React.FunctionComponent<Props> = (props) => {
    const {label, children, ...rest} = props;
    return (
        <Label>
            <span>{props.label}</span>
            <input{...rest}/>
        </Label>
    );
};
export {Input};