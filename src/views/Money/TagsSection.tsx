import styled from 'styled-components';
import React from 'react';
import {useTags} from '../../hooks/useTags';

const Wrapper = styled.section`
  background: #FFFFFF;
  padding: 10px 16px;
  flex-grow: 1;
  flex-shrink: 1;
  overflow: auto;
  display: flex;
  flex-direction: column;
  //justify-content: flex-end;  //CSS不正交
  align-items: flex-start;
  

  > ol {
    margin: 0 -12px;

    > li {
      color: white;
      opacity: 0.6;
      background: #9a9a9a;
      border-radius: 18px;
      display: inline-block;
      padding: 4px 18px;
      font-size: 14px;
      margin: 8px 12px;
      cursor: pointer;

      &.selected {
        background: #62b37a;
      }
    }
  }

  > button {
    color: #62b37a;
    background: none;
    border: none;
    padding: 2px 4px;
    border-bottom: 1px solid #62b37a;
    margin-top: 8px;
    cursor: pointer;
  }
`;

type Props = {
    value: number[],
    onChange: (selected: number[]) => void;
}

const TagsSection: React.FunctionComponent<Props> = (props) => {
    const selectedTagIds = props.value;
    const {tags,addTag} = useTags();

    const onToggleTag = (tagId: number) => {
        const index = selectedTagIds.indexOf(tagId);
        if (index >= 0) {
            props.onChange(selectedTagIds.filter(t => t !== tagId));
            //如果tag已被选中，就复制所有没有被选中的tag，作为新的selectedTag
        } else {
            props.onChange([...selectedTagIds, tagId]);
        }
    };
    const getClass = (tagId: number) => selectedTagIds.indexOf(tagId) >= 0 ? 'selected' : '';
    return (
        <Wrapper>
            <button onClick={()=>addTag()}>新增标签</button>
            <ol>
                {tags.map(tag => <li key={tag.id} onClick={() => {onToggleTag(tag.id);}}
                                     className={getClass(tag.id)}
                >{tag.name}</li>)}
            </ol>

        </Wrapper>
    );
};


export {TagsSection};