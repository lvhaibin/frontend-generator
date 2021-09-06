import * as React from 'react';
import * as ReactDOM from 'react-dom';
import "core-js/stable";
import "regenerator-runtime/runtime";
import { Layout } from 'antd';
import { LeftSider } from './components/LeftSider';
import { RightContent } from './components/RightContent';
import { BrowserRouter as Router } from "react-router-dom";
import './index.less';

const App: React.FC = () => {
    return (
        <Router>
            <Layout>
                <LeftSider />
                <RightContent />
            </Layout>
        </Router>
    );
}

ReactDOM.render(<App />, document.getElementById('app'))
