import React, { useEffect , useContext } from 'react';
import './SingleProduct.css';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';


const SingleProduct = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  })

  const navigate = useNavigate();
  const {retrive} = useContext(AppContext);

  const [retreivealProduct  ] = retrive;



  return (
    <div>
    <div className="section section_single_product">

      <div className="single_flex_section">

     

      <div className="flex_one single_product_page">
        <img src={retreivealProduct.image} alt="" className="product_img" />

        <h1 className="product_headline"> {retreivealProduct.title} </h1>
   
        <h6 className="product_price"> SAR {retreivealProduct.price} </h6>

        <h4 className="product_subheadline">أختر الاضافات التي تحبها</h4>

        <div className="body_product_card">
        
        <div className='single_choose_option' >
        <div className="flex_choose">
        <h6 className="product_choose"> اختر 1 </h6>
            <h6 className="product_choose">اضافة واحد التي تريدها ؟</h6>
          
          </div>

          <div className="d-flex-c text-center">
          <h4 className='product_choose' >تاكيد الاختيار</h4>
          <input type="checkbox" className='checkbox_product' />
          </div>

         
        </div>
        
        <div className='single_choose_option' >
        <div className="flex_choose">
        <h6 className="product_choose"> اختر 1 </h6>
            <h6 className="product_choose">اضافة واحد التي تريدها ؟</h6>
          
          </div>

          <div className="d-flex-c text-center">
          <h4 className='product_choose' >تاكيد الاختيار</h4>
          <input type="checkbox" className='checkbox_product' />
          </div>

         
        </div>
        
        <div className='single_choose_option' >
        <div className="flex_choose">
        <h6 className="product_choose"> اختر 1 </h6>
            <h6 className="product_choose">اضافة واحد التي تريدها ؟</h6>
          
          </div>

          <div className="d-flex-c text-center">
          <h4 className='product_choose' >تاكيد الاختيار</h4>
          <input type="checkbox" className='checkbox_product' />
          </div>

         
        </div>
        
        <div className='single_choose_option' >
        <h6 className="product_choose text-right"> اكتب ملاحظة باللغة العربية</h6>

          <input type="text" className='input_textarea_form' placeholder='أخبرنا رايك ؟' />

         
        </div>
          
        </div>

    </div>

    <div className="flex_two navigate_back">
      <img src="/images/icons/arrow-right.png" onClick={() => navigate(-1)} alt="" />
      </div>  


      </div>
   

    </div>
  

    </div>
  )
}

export default SingleProduct