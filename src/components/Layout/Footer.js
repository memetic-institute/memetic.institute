import { shape } from 'prop-types';
import styled from 'styled-components';
import {
    faTwitter,
    faFacebook,
    faPatreon,
    faGithub
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    twitterUrl,
    facebookPageUrl,
    patreonUrl,
    githubUrl
} from '../../lib/socialProfiles';

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

    @media only screen and (max-width: 700px) {
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

const Link = styled.a`
    color: #000;
    font-size: 1.5em;
    margin-left: 1em;

    @media only screen and (max-width: 700px) {
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
    color: #1DA1F2;
`;

const FacebookLink = styled(ExternalLink)`
    color: #4267B2;
`;

const PatreonLink = styled(ExternalLink)`
    color: #F96854;
`;

const Footer = (props) => (
    <Container {...props}>
        <List>
            <Item>
                &copy; {new Date().getFullYear()} Institute for Memetic Research
                & Development
            </Item>
            <Item>
                <TwitterLink
                    href={twitterUrl}
                    icon={faTwitter}
                    title="Twitter"
                />
                <FacebookLink
                    href={facebookPageUrl}
                    icon={faFacebook}
                    title="Facebook"
                />
                <PatreonLink
                    href={patreonUrl}
                    icon={faPatreon}
                    title="Patreon"
                />
                <ExternalLink href={githubUrl} icon={faGithub} title="GitHub" />
            </Item>
        </List>
    </Container>
);

export default Footer;
