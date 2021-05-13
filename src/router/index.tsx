import { BrowserRouter, Route } from "react-router-dom";

import AboutContainer from "pages/about/AboutContainer";
import HomeContainer from "pages/home/HomeContainer";

const Router = () => {
    return (
        <BrowserRouter>
            <Route path="/" exact component={HomeContainer} />
            <Route path="/about" exact component={AboutContainer} />
        </BrowserRouter>
    );
};

export default Router;
