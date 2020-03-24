import { string } from 'prop-types';
import Head from 'next/head';

export const defaultTitle = 'Institute for Memetic Research & Development';

const Title = ({ title }) => (
    <Head>
        <title>{`${title} » ${defaultTitle}`}</title>
    </Head>
);

Title.propTypes = {
    title: string.isRequired
};

export default Title;
