import { shape } from 'prop-types';
import styled from 'styled-components';
import {
    faTwitter,
    faFacebook,
    faGithub
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { defaultTitle as title } from '../Title';

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

    @media only screen and (max-width: 800px) {
        height: 100px;
    }
`;

const List = styled.ul`
    width: 100%;
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media only screen and (max-width: 800px) {
        justify-content: center;
        flex-direction: column;
    }
`;

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
    font-size: 1.5em;
    margin-left: 1em;

    @media only screen and (max-width: 800px) {
        margin: 0 1em;
    }
`;

const ExternalLink = ({ icon, ...props }) => (
    <Link target="_blank" rel="noopener noreferrer" {...props}>
        <FontAwesomeIcon icon={icon} fixedWidth />
    </Link>
);

ExternalLink.propTypes = {
    icon: shape({}).isRequired
};

const TwitterLink = styled(ExternalLink)`
    color: #1da1f2;
`;

const FacebookLink = styled(ExternalLink)`
    color: #4267b2;
`;

const Footer = (props) => (
    <Container {...props}>
        <List>
            <Item>
                &copy; {new Date().getFullYear()} {title}
            </Item>
            <Item>
                <TwitterLink
                    href="https://twitter.com/memetic_insti2t"
                    icon={faTwitter}
                    title="Twitter"
                />
                <FacebookLink
                    href="https://fb.me/institute.for.memetic.research.and.development"
                    icon={faFacebook}
                    title="Facebook"
                />
                <ExternalLink
                    href="https://github.com/memetic-institute"
                    icon={faGithub}
                    title="GitHub"
                />
            </Item>
        </List>
    </Container>
);

export default Footer;
