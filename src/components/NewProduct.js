import React from 'react';
import { Link } from 'react-router-dom';
import './NewProduct.css';


const NewProduct = ( { image , headline , subheadline , price }) => {
  return (
    <div>
  <Link to={`/${headline}`} >
    <div className="single_new_product">
        <img src={image} alt="" className="product_img" />

        <div className="body_padding">
        <h1 className="product_headline"> {headline} </h1>
        <h4 className="product_subheadline">   {subheadline} </h4>
        <h6 className="product_price"> SAR {price} </h6>
        </div>
    

      <div className="new_card_postion">
      <div className="single_menu_div_small bg_green">
        جديد
      </div>

      </div>
     

    </div>
</Link>
    </div>
  )
}

export default NewProduct