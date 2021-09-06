import * as React from 'react';
import styled from 'styled-components';
const StyledAbout = styled.div`
    color: red;
`;

const About: React.FC<{ name: string }> = (props) => {
    return <StyledAbout>hello { props.name }</StyledAbout>
}

export default About
