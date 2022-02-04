import styled from 'styled-components';
import React, {ChangeEventHandler} from 'react';
import {Input} from '../../components/Input';

const Wrapper = styled.section`
  background: #f1f4f4;
  padding: 14px 16px;
  font-size: 14px;
`;

type Props = {
    value: string;
    onChange:(value:string)=>void;
}

const NoteSection: React.FunctionComponent<Props> = (props) => {
    const note = props.value
    //非受控模式
    const onChange:ChangeEventHandler<HTMLInputElement> = (e)=>{
            props.onChange(e.target.value)
    }
    return (
        <Wrapper>
            <Input label="备注" type="text"
                   value={note}
                   onChange={onChange}
                    placeholder="请填写备注"
            >
            </Input>
        </Wrapper>
    );
};

export {NoteSection};