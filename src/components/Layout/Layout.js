import { Component } from 'react';
import { node } from 'prop-types';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import { initGA, logPageView } from '../../lib/analytics';

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

class Layout extends Component {
    componentDidMount() {
        if (!window.GA_INITIALIZED) {
            initGA();
            window.GA_INITIALIZED = true;
        }
        logPageView();
    }

    render() {
        const { children } = this.props;
        return (
            <PageContainer>
                <Header />
                <Main>{children}</Main>
                <Footer />
            </PageContainer>
        );
    }
}

Layout.propTypes = {
    children: node.isRequired
};

export default Layout;
