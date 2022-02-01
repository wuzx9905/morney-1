import React from 'react';
import {
    Link,
    Route,
    HashRouter as Router, Switch, Redirect
} from 'react-router-dom';
import Nav from 'components/Nav';
import Layout from 'components/Layout';


function App() {
    return (
        <Router>
            <Switch>
                <Route path="/tags">
                    <Tags/>
                </Route>
                <Route path="/money">
                    <Money/>
                </Route>
                <Route path="/statistics">
                    <Statistics/>
                </Route>
                <Redirect exact from={'/'} to={'/money'}/>
                <Route path="*">
                    <NoMatch/>
                </Route>
            </Switch>

        </Router>
    );
}

function NoMatch() {
    return (
        <h2>
            地址错误，页面不存在
        </h2>
    );
}

function Tags() {
    return (
        <Layout><h2>标签页面</h2></Layout>
    );
}

function Money() {
    return (
        <Layout><h2>记账页面</h2></Layout>
    );
}

function Statistics() {
    return (
        <Layout><h2>统计页面</h2></Layout>
    );
}

export default App;
