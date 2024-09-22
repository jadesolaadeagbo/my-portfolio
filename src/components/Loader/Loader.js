import React from "react";
import LoaderContainer from "../../containers/LoaderContainer";
import Jadesola from "../../assets/Jadesola.svg"

const Loader = () => {
    return (
        <LoaderContainer>
            <img src={Jadesola} width="200px"/>
        </LoaderContainer>
        
    ); 
};

export default Loader;
