import { ReactNode } from 'react';

export interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return <div style={{ height: '100%' }}>{children}</div>;
};

export default Layout;
