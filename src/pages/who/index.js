import { string, shape, node } from 'prop-types';
import { NextSeo } from 'next-seo';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
    faTwitter,
    faFacebook,
    faPatreon,
    faGithub
} from '@fortawesome/free-brands-svg-icons';
import {
    Article,
    Container,
    FeatureBanner,
    Lead
} from '../../components/Layout';
import {
    twitterUrl,
    facebookPageUrl,
    patreonUrl,
    githubUrl
} from '../../lib/socialProfiles';

const title = 'Who We Are';
const description = "It doesn't matter who we are. What matters is our plan.";
// const email = 'hi@memetic.institute';

const ContactIcon = styled(FontAwesomeIcon)`
    margin-right: 0.25em;
`;

const ExternalLink = ({ href, icon, children, ...props }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
        <ContactIcon icon={icon} fixedWidth />
        {children}
    </a>
);

ExternalLink.propTypes = {
    href: string.isRequired,
    icon: shape({}).isRequired,
    children: node.isRequired
};

const Who = () => (
    <>
        <NextSeo
            title={title}
            description={description}
            openGraph={{
                title,
                description
            }}
        />
        <FeatureBanner
            heading="Who We Are"
            image={{ src: require('./npc.svg'), alt: 'NPC' }}
        />
        <Container>
            <Article>
                <Lead>
                    <b>{description}</b> We&apos;re an elite team of autists
                    harnessing decades of collective experience in memological
                    research and applied memetics. Our passion for memes led us
                    to establish IMRD with the goal of furthering memology and
                    advanced memetic applications.
                </Lead>
            </Article>
            <aside>
                <h2>Stay In Touch</h2>
                <Lead>
                    <ExternalLink href={twitterUrl} icon={faTwitter}>
                        Twitter
                    </ExternalLink>
                    <br />
                    <ExternalLink href={facebookPageUrl} icon={faFacebook}>
                        Facebook
                    </ExternalLink>
                    <br />
                    <ExternalLink href={patreonUrl} icon={faPatreon}>
                        Patreon
                    </ExternalLink>
                    {/*
                    <ExternalLink href={`mailto:${email}`} icon={faEnvelope}>
                        {email}
                    </ExternalLink>
                    <br />
                    */}
                </Lead>
                <h2>Open Source</h2>
                <Lead>
                    <ExternalLink href={githubUrl} icon={faGithub}>
                        GitHub
                    </ExternalLink>
                </Lead>
            </aside>
        </Container>
    </>
);

export default Who;
