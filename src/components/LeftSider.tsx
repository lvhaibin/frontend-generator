import * as React from 'react';
import { Layout, Menu } from 'antd';
import {
    UserOutlined,
    UploadOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';

import { useHistory, useLocation } from 'react-router-dom';


export const LeftSider: React.FC = () =>{
    const { Sider } = Layout;
    const history = useHistory();
    const location = useLocation();
    const selectKeys = location.pathname === '/' ? 'home' : location.pathname.slice(1);
    const handleOnClick = ({ key }) => {
        switch(key) {
            case 'home':
                history.push('/');
            break;
            case 'about':
                history.push('/about');
            break;
            case 'button':
                history.push('/button');
            break;
        }
    }

    return (
        <Sider style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0,
        }}>
            <Menu selectedKeys={[selectKeys]} onClick={handleOnClick} theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                <Menu.Item key="home" icon={<UserOutlined />}>
                    首页
                </Menu.Item>
                <Menu.Item key="about" icon={<VideoCameraOutlined />}>
                    关于
                </Menu.Item>
                <Menu.Item key="button" icon={<UploadOutlined />}>
                    按钮
                </Menu.Item>
            </Menu>
        </Sider>
    )
}