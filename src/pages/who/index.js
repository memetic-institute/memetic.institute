import { string, shape, node } from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
    faTwitter,
    faFacebook,
    faGithub
} from '@fortawesome/free-brands-svg-icons';
import Title from '../../components/Title';
import {
    Article,
    Container,
    FeatureBanner,
    Lead
} from '../../components/Layout';

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
    <Title title="Who We Are" />
        <FeatureBanner
            heading="Who We Are"
            image={{ src: require('./npc.svg'), alt: 'NPC' }}
        />
        <Container>
            <Article>
                <Lead>
                    <b>
                        It doesn&apos;t matter who we are. What matters is our
                        plan.
                    </b>{' '}
                    We&apos;re an elite team of autists harnessing decades of
                    collective experience in memological research and applied
                    memetics. Our passion for memes led us to establish IMRD
                    with the goal of furthering memology and advanced memetic
                    applications.
                </Lead>
            </Article>
            <aside>
                <h2>Stay In Touch</h2>
                <Lead>
                    <ExternalLink
                        href="https://twitter.com/memetic_insti2t"
                        icon={faTwitter}
                    >
                        Twitter
                    </ExternalLink>
                    <br />
                    <ExternalLink
                        href="https://fb.me/institute.for.memetic.research.and.development"
                        icon={faFacebook}
                    >
                        Facebook
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
                    <ExternalLink
                        href="https://github.com/memetic-institute"
                        icon={faGithub}
                    >
                        GitHub
                    </ExternalLink>
                </Lead>
            </aside>
        </Container>
    </>
);

export default Who;
