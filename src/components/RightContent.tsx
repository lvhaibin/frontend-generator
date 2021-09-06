import * as React from 'react';
import { Layout } from 'antd';
import {
    Switch,
    Route,
} from "react-router-dom";

const { Content } = Layout;
const Home = React.lazy(() => import('./Home') as any);
const About = React.lazy(() => import('./About') as any);
const Button = React.lazy(() => import('./Button') as any);


export const RightContent: React.FC = () =>{
    return (
        <Layout className="site-layout" style={{ marginLeft: 200 }}>
            <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                <React.Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        <Route path="/about">
                            <About name="xiaojinfeng" />
                        </Route>
                        <Route path="/button">
                            <Button>
                                button
                            </Button>
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </React.Suspense>
            </Content>
        </Layout>
    );
}