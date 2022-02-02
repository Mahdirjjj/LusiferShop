import React, { Fragment } from 'react'
import TopInfo from './TopInfo/Top-Info';
import InfoCategory from './InfoCategory/InfoCategory';
import SimilarProducts from './SimilarProducts/SimilarProducts';

const SingleProduct = () => {
    return (
        <Fragment>
            <TopInfo />
            <InfoCategory />
            <SimilarProducts />
        </Fragment>
    );
}

export default SingleProduct;