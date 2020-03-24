import styled from 'styled-components';
import YouTubePlayer from 'react-player/lib/players/YouTube';
import Title from '../../components/Title';
import {
    Article,
    Container,
    FeatureBanner,
    Lead,
    List,
    ListItem
} from '../../components/Layout';

const PlayerWrapper = styled.div`
    position: relative;
    padding-top: 56.25%;
`;

const ResponsivePlayer = styled(YouTubePlayer)`
    position: absolute;
    top: 0;
`;

const Wut = () => (
    <>
        <Title title="What We Do" />
        <FeatureBanner
            heading="What We Do"
            image={{ src: require('./pyramid.png'), alt: 'Pyramid' }}
        />
        <Container>
            <Article>
                <Lead>
                    <b>Building the memes of your dreams.</b> IMRD&apos;s
                    memological research and meme application teams innovate the
                    future of advanced memetics. We specialize in a broad range
                    of objectives in the meme space, from memetic strategy to
                    meme design, operations, intelligence, and advocacy.
                </Lead>
                <p>
                    Evolutionary biologist Richard Dawkins developed the term
                    &quot;memetics&quot; in his 1976 book{' '}
                    <i>The Selfish Gene</i> as an insight into how ideas affect
                    and propagate through culture.
                </p>
                <PlayerWrapper>
                    <ResponsivePlayer
                        url="https://www.youtube.com/watch?v=4BVpEoQ4T2M"
                        width="100%"
                        height="100%"
                        controls
                        config={{
                            playerVars: { modestbranding: 1 }
                        }}
                    />
                </PlayerWrapper>
            </Article>
            <aside>
                <h2>Our Work</h2>
                <List>
                    <ListItem>Research in Emerging Memology</ListItem>
                    <ListItem>Memetic Warfare Technology</ListItem>
                    <ListItem>Memetic Tactics</ListItem>
                    <ListItem>Advanced Memetic Research Projects</ListItem>
                    <ListItem>Meme Threat Assessment & Reconnaissance</ListItem>
                    <ListItem>Counter-Meme Response Operations</ListItem>
                    <ListItem>Memetic Signals Intelligence</ListItem>
                    <ListItem>Memetic Propagation Tactics</ListItem>
                    <ListItem>Memetic Application Design</ListItem>
                    <ListItem>Memetic Operational Logistics</ListItem>
                    <ListItem>Memetic Diplomacy</ListItem>
                    <ListItem>Meme Policy Development & Advocacy</ListItem>
                    <ListItem>Memological Training</ListItem>
                </List>
            </aside>
        </Container>
    </>
);

export default Wut;
