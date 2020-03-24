const projectURLs = ['https://brrr.money', 'https://thefed.app'];

const fetchProjects = (ogs) => async () => {
    const projects = await Promise.all(
        projectURLs.map(async (url) => {
            try {
                const openGraph = await ogs({ url });
                return openGraph.data;
            } catch (error) {
                console.error(
                    `Failed to fetch Open Graph metadata for ${url}:`,
                    error
                );
                return {};
            }
        })
    );
    return { props: { projects } };
};

export default fetchProjects;
