import React from 'react'
import { useEffect } from 'react';
import { ActiveUser } from './../../../Services/userService';

const ActiveAccount = ({history}) => {


    const activateUser = () => {
        ActiveUser(history.location.pathname);
        console.log(history.location);
        history.push('/')
    }
    
    useEffect(() => {
       activateUser();
    }, [])
    return ( 
        <div>
            is Loading...
           
        </div>
     );
}
 
export default ActiveAccount;