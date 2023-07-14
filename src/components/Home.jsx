

//components
import Code from './Code';
import Result from './Result';
import Header from './Header';

const Home = () => {
    document.documentElement.style.overflow = 'hidden';
    return (
        <>
            <Header />
            <Code />
            <Result />
        </>
    )
}

export default Home;