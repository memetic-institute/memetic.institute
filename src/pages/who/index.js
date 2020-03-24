// import styled from 'styled-components';
import { Container, FeatureBanner, Lead } from '../../components/Layout';

const Who = () => (
    <>
        <FeatureBanner
            heading="Who We Are"
            image={{ src: require('./npc.svg'), alt: 'NPC' }}
        />
        <Container>
            <Lead>
                <b>
                    It doesn&apos;t matter who we are. What matters is our plan.
                </b>{' '}
                We&apos;re an elite team of autists harnessing decades of
                collective experience in memological research and applied
                memetics. Our passion for memes led us to establish IMRD with
                the goal of furthering memology and advanced memetic
                applications.
            </Lead>
        </Container>
    </>
);

export default Who;
