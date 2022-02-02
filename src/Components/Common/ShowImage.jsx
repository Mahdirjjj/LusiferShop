import React from 'react'
import Img from "react-image";
import config from "../../Services/config.json";


const ShowImage = ({ image }) => {
    return ( 
        <Img
        src={
            `${config.localapi}/images/sliders/origin/${image}`
        }
    />
     );
}
 
export default ShowImage;