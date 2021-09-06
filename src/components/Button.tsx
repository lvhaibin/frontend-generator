import * as React from 'react';
import { Button as AntdButton } from 'antd'

const Button: React.FC<{ children: React.ReactNode }> = (props) => {
    return <AntdButton>{ props.children }</AntdButton>
}

export default Button;
