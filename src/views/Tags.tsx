import Layout from '../components/Layout';
import React from 'react';
import {useTags} from '../useTags';

function Tags() {
    const {tags,setTags} = useTags()//useState
    return (
        <Layout><h2>标签页面</h2></Layout>
    );
}

export default Tags;