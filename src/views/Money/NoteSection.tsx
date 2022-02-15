import styled from 'styled-components';
import React, {ChangeEventHandler} from 'react';
import {Input} from '../../components/Input';
import dayjs from 'dayjs';

const Wrapper = styled.section`
  background: #f1f4f4;
  padding: 12px 16px;
  font-size: 14px;
`;

type Props = {
    value: string;
    onChange:(value:string)=>void;
    createdAt?: string;
    type?:string;
    label?:string;
}

const NoteSection: React.FunctionComponent<Props> = (props) => {
    let note = props.value
    const type = props.type
    const label = props.label
    if (props.type==="date"){
            note = dayjs(note).format('YYYY-MM-DD')
    }
    //非受控模式
    const onChange:ChangeEventHandler<HTMLInputElement> = (e)=>{
            props.onChange(e.target.value)
    }
    return (
        <Wrapper>
            <Input label={label || ''} type={type}
                   value={note}
                   onChange={onChange}
                    placeholder="请填写备注，注意一天只能添加一项喔！"
            >
            </Input>
        </Wrapper>
    );
};

export {NoteSection};