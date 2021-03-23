import { Layout } from '@/components/index';

const Index = () => {
    return (
        <Layout>
            <h1 style={styles.container}>Hello, world!</h1>
        </Layout>
    );
};

const styles = {
    container: {
        height: '100%',
        display: 'grid',
        placeItems: 'center'
    }
};

export default Index;
