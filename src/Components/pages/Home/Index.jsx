import React, { Fragment, useEffect } from 'react'


import SwiperComponent from './Swiper-Slider/Swiper';
import ProductSliderComponent from './Products-Slider/Products';
import Ads from './Ads/Ads';
import NewProducts from './NewProducts/News';
import Offers from './Offers/Offers';
import Brands from './Brands/Brands';
import Support from './SupportNav/SupportNav';
import { useDispatch, useSelector } from 'react-redux';
import { getAllSliders } from './../../../Actions/sliders';


const Home = () => {

    const dispatch = useDispatch();
    const sliders = useSelector(state => state.sliders)
    // console.log(sliders);
    useEffect(() => {
        dispatch(getAllSliders());
    }, [])

    return (
        <Fragment>

            <SwiperComponent sliders={sliders}/>
            <ProductSliderComponent />
            <Ads />
            <NewProducts />
            <Offers />
            <Brands />
            <Support />

        </Fragment>

    );
}

export default Home;