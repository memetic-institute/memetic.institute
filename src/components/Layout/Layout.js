import { node } from 'prop-types';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';

const PageContainer = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Main = styled.main`
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Layout = ({ children }) => (
    <PageContainer>
        <Header />
        <Main>{children}</Main>
        <Footer />
    </PageContainer>
);

Layout.propTypes = {
    children: node.isRequired
};

export default Layout;
