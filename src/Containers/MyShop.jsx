import React from 'react'
import { Redirect, Route, Switch } from 'react-router';
import MainLayout from '../Components/sharedComponents/MainLayout/MainLayout';
import Home from './../Components/pages/Home/Index';
import SingleProduct from './../Components/pages/SingleProduct/SingleProduct';
import Cart from './../Components/pages/Cart/Cart';
import CheckOut from './../Components/pages/CheckOut/CheckOut';
import Login from './../Components/pages/Login/Login';
import { useSelector, useDispatch } from 'react-redux';
import { isEmpty } from "lodash";
import UserContext from '../Components/Context/userContext';
import { decodeToken } from './../Utils/Token';
import { addUser, clearUser } from './../Actions/user';
import { useEffect } from 'react';
import Products from './../Components/pages/Products/Products';
import ActiveAccount from './../Components/pages/ActiveAccount/ActiveAccount';


const MyShop = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = decodeToken(token);
      const dateNow = Date.now() / 1000;
      console.log(decodedToken);

      if (decodedToken.exp < dateNow) {
        localStorage.removeItem("token");
        dispatch(clearUser());
      } else dispatch(addUser(decodedToken));
    }
  }, []);

  const user = useSelector((state) => state.user);

  return (
    <Switch>



      {/* Main LayOut */}

      <Route path={["/"]}>
        <MainLayout>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/product/id" component={SingleProduct} />
            <Route path="/cart" component={Cart} />
            <Route path="/checkout" component={CheckOut} />
            <Route path="/login" component={() => isEmpty(user) ? (<UserContext><Login /></UserContext>) : <Redirect to="/" />} />
            <Route path="/Products" component={Products} />
            <Route path="/activate-account/:activeCode" component={ActiveAccount} />
          </Switch>
        </MainLayout>
      </Route>


    </Switch>
  );
}

export default MyShop;