import { shape } from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faTwitter,
    faFacebook,
    faDiscord,
    faPatreon,
    faGithub
} from '@fortawesome/free-brands-svg-icons';
import ButtonAnchor from './Layout/ButtonAnchor';
import {
    twitterUrl,
    facebookPageUrl,
    discordUrl,
    patreonUrl,
    githubUrl
} from '../lib/socialProfiles';

const Link = styled.a`
    color: #000;
    font-size: 2em;
    margin-left: 1em;

    @media only screen and (max-width: 700px) {
        margin: 0 0.5em;
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

const StyledTwitterLink = styled(ExternalLink)`
    color: ${({ theme }) => theme.colors.twitter};
`;
const StyledFacebookLink = styled(ExternalLink)`
    color: ${({ theme }) => theme.colors.facebook};
`;
const StyledDiscordLink = styled(ExternalLink)`
    color: ${({ theme }) => theme.colors.discord};
`;
const StyledPatreonLink = styled(ExternalLink)`
    color: ${({ theme }) => theme.colors.patreon};
`;

const StyledTwitterButton = styled(ButtonAnchor)`
    background: ${({ theme }) => theme.colors.twitter} !important;
`;
const StyledFacebookButton = styled(ButtonAnchor)`
    background: ${({ theme }) => theme.colors.facebook} !important;
`;
const StyledDiscordButton = styled(ButtonAnchor)`
    background: ${({ theme }) => theme.colors.discord} !important;
`;
const StyledPatreonButton = styled(ButtonAnchor)`
    background: ${({ theme }) => theme.colors.patreon} !important;
`;
const StyledGitHubButton = styled(ButtonAnchor)`
    background: #000 !important;
`;

export const TwitterLink = (props) => (
    <StyledTwitterLink
        href={twitterUrl}
        icon={faTwitter}
        title="Twitter"
        {...props}
    />
);
export const FacebookLink = (props) => (
    <StyledFacebookLink
        href={facebookPageUrl}
        icon={faFacebook}
        title="Facebook"
        {...props}
    />
);
export const DiscordLink = (props) => (
    <StyledDiscordLink
        href={discordUrl}
        icon={faDiscord}
        title="Discord"
        {...props}
    />
);
export const PatreonLink = (props) => (
    <StyledPatreonLink
        href={patreonUrl}
        icon={faPatreon}
        title="Patreon"
        {...props}
    />
);
export const GitHubLink = (props) => (
    <ExternalLink href={githubUrl} icon={faGithub} title="GitHub" {...props} />
);

export const TwitterButton = () => (
    <StyledTwitterButton href={twitterUrl} icon={faTwitter} large>
        Twitter
    </StyledTwitterButton>
);
export const FacebookButton = () => (
    <StyledFacebookButton href={facebookPageUrl} icon={faFacebook} large>
        Facebook
    </StyledFacebookButton>
);
export const DiscordButton = () => (
    <StyledDiscordButton href={discordUrl} icon={faDiscord} large>
        Discord
    </StyledDiscordButton>
);
export const PatreonButton = () => (
    <StyledPatreonButton href={patreonUrl} icon={faPatreon} large>
        Become a Patron
    </StyledPatreonButton>
);
export const GitHubButton = () => (
    <StyledGitHubButton href={githubUrl} icon={faGithub} large>
        GitHub
    </StyledGitHubButton>
);
