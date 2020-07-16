import styled from 'styled-components';
import {
    TwitterLink,
    FacebookLink,
    GitHubLink
} from '../SocialButtons';

const Container = styled.footer`
    width: 100%;
    padding: 2em;
    font-size: 0.75em;
    color: #aaa;
    background: #fff;
    border-top: 1px solid #eee;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 3;
`;

const List = styled.ul`
    width: 100%;
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media only screen and (max-width: 700px) {
        justify-content: center;
        flex-direction: column;
    }
`;

const Item = styled.li`
    display: inline-block;
    margin: 0 1em;
    width: 100%;

    &:last-of-type {
        text-align: right;
    }

    @media only screen and (max-width: 700px) {
        display: block;
        margin: 0.25em;
        text-align: center !important;
    }
`;

const Footer = (props) => (
    <Container {...props}>
        <List>
            <Item>
                &copy; {new Date().getFullYear()} Institute for Memetic Research
                & Development
            </Item>
            <Item>
                <TwitterLink />
                <FacebookLink />
                <GitHubLink />
            </Item>
        </List>
    </Container>
);

export default Footer;
