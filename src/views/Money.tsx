import Layout from 'components/Layout';
import React, {useState} from 'react';
import styled from 'styled-components';
import {TagsSection} from './Money/TagsSection';
import {NoteSection} from './Money/NoteSection';
import {CategorySection} from './Money/CategorySection';
import {NumberPadSection} from './Money/NumberPadSection';
import {useRecords} from '../hooks/useRecords';
import day from 'dayjs';

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;

type Category = '-' | '+'

const defaultFormData = {
    tagIds: [] as number[],
    note: '',
    createdAt: day(new Date()).format('YYYY-MM-DD'),
    category: '-' as Category,
    amount: 0,
};

const CategoryWrapper = styled.div`
  background: #c4c4c4;
`;

const NoteSectionWrapper=styled.div`
  section{
    :first-child{
      border-bottom: 1px solid #3333;
    }
  }
`

function Money() {
    const [selected, setSelected] = useState(defaultFormData);
    const {addRecord} = useRecords();
    const onChange = (obj: Partial<typeof selected>) => {
        setSelected({
            ...selected,
            ...obj,
        });
    };
    const submit = () => {
        if (addRecord(selected) === 1) {
            alert('保存成功！');
            setSelected(defaultFormData);
        }
    };
    return (
        <MyLayout scrollTop={9999}>
            <TagsSection value={selected.tagIds} onChange={(tagIds) => onChange({tagIds})}/>
            <NoteSectionWrapper>
            <NoteSection value={selected.createdAt} onChange={(createdAt) => onChange({createdAt})} type="date"
                         label="日期"
            />
            <NoteSection value={selected.note} onChange={(note) => onChange({note})} type="text"
                         label="备注"
            />
            </NoteSectionWrapper>
            <CategoryWrapper>
                <CategorySection value={selected.category} onChange={(category) => onChange({category})}/>
            </CategoryWrapper>
            <NumberPadSection value={selected.amount} onChange={(amount) => onChange({amount})}
                              onOk={submit}
            />
        </MyLayout>
    );
}

export default Money;