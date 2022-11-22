import React from 'react';
import {Routes,Route} from "react-router-dom";
import Register from '../Components/Register';
import OfferCreation from '../Components/OfferCreation';
import FinalOffer from '../Components/FinalOffer';
import Orders from '../Components/Orders'

const RoutesContainer = () => {
  return (
    <Routes>
        <Route exact path='/' element={<Register/>}/>
        <Route exact path='/contract' element={<OfferCreation/>}/>
        <Route exact path='/offer' element={<FinalOffer/>}/>
        <Route exact path='/orders' element={<Orders/>}/>
        <Route/>
    </Routes>
  )
}

export default RoutesContainer
