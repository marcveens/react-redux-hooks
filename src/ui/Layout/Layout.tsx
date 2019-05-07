import React from 'react';
import { Layout as StyledLayout } from './Layout.style';

export const Layout: React.FC = (props) => {
    return (
        <StyledLayout>
            {props.children}
        </StyledLayout>
    );
};