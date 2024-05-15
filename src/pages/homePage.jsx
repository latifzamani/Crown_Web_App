import React from "react";
import '../pages/homePage.scss';
import Directory from "../components/directory/directory";
const HomePage = (props) => {
    return (
        <div className="homepage">
           <Directory/>
        </div>
    )
};
export default HomePage;