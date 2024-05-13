import Banner from "./Banner";

const Home = () => {

    // make a dynamic page title
    document.title = "Product hub";

    return (
        <div>
            <Banner></Banner>
        </div>
    );
};

export default Home;