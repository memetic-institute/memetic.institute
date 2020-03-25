import { NextSeo } from 'next-seo';
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
    Article,
    Aside,
    Container,
    FeatureBanner,
    Lead
} from '../../components/Layout';
import {
    TwitterButton,
    FacebookButton,
    DiscordButton,
    PatreonButton,
    GitHubButton
} from '../../components/SocialButtons';

const title = 'Who We Are';
const description = "It doesn't matter who we are. What matters is our plan.";
// const email = 'hi@memetic.institute';

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
            <Aside>
                <h2>Stay In Touch</h2>
                <TwitterButton />
                <FacebookButton />
                <DiscordButton />
                <PatreonButton />
                {/*
                    <ButtonAnchor href={`mailto:${email}`} icon={faEnvelope}>
                        {email}
                    </ButtonAnchor>
                    <br />
                    */}
                <h2>Open Source</h2>
                <GitHubButton />
            </Aside>
        </Container>
    </>
);

export default Who;
