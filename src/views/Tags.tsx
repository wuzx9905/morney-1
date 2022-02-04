import Layout from '../components/Layout';
import React from 'react';
import {useTags} from '../useTags';
import styled from 'styled-components';
import Icon from '../components/Icon';
import { Link } from 'react-router-dom';

const TagList = styled.ol`
  font-size: 16px;
  background: white;

  > li {
    border-bottom: 1px solid #d5d5d9;
    line-height: 24px;
    margin-left: 16px;
    margin-right: 16px;
    
    > a{
      display: flex;
      padding: 14px 0 14px 0;
      justify-content: space-between;
      align-items: center;
    }

    :last-child {
      border: none;
    }
  }
`;
const Button = styled.button`
  font-size: 18px;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  background: #767676;
  color: white;
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Space = styled.div`
  height: 16px;
`;


function Tags() {
    const {tags, setTags} = useTags();//useState
    return (
        <Layout>
            <TagList>
                {tags.map(tag =>
                    <li key={tag.id}>
                        <Link to={'/tags/'+tag.id}>
                        <span className="oneLine">{tag.name}</span>
                        <Icon name="right"/>
                        </Link>
                    </li>)}
            </TagList>
            <Center>
                <Space/>
                <Space/>
                <Space/>
                <Button>新增标签</Button>
                <Space/>
            </Center>
        </Layout>
    );
}

export default Tags;