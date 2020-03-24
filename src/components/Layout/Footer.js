import { node } from 'prop-types';
import styled from 'styled-components';

const Container = styled.footer`
    width: 100%;
    height: 50px;
    padding: 0 0.5em;
    font-size: 0.75em;
    color: #aaa;
    background: #fff;
    border-top: 1px solid #eee;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 3;

    /* @media only screen and (max-width: 1000px) {
        height: 150px;
    } */
`;

const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: 1000px) {
        flex-direction: column;
    }
`;

// const StyledDot = styled.span`
//     user-select: none;
//     pointer-events: none;

//     @media only screen and (max-width: 1000px) {
//         display: none;
//     }
// `;

// const Dot = () => <StyledDot>&middot;</StyledDot>;

const Item = styled.li`
    display: inline-block;
    margin: 0 1em;

    @media only screen and (max-width: 800px) {
        display: block;
        margin: 0.25em;
    }
`;

const Link = styled.a`
    color: #000;
    font-weight: bold;
    margin: 0 0.25em;
`;

const ExternalLink = ({ children, ...props }) => (
    <Link target="_blank" rel="noopener noreferrer" {...props}>
        {children}
    </Link>
);

ExternalLink.propTypes = {
    children: node.isRequired
};

const Footer = props => (
    <Container {...props}>
        <List>
            <Item>
                &copy; {new Date().getFullYear()} Institute for Memetic Research
                & Development
            </Item>
        </List>
    </Container>
);

export default Footer;
