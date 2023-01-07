import React, { useContext } from 'react'
import data from '../data'
import NewProduct from '../components/NewProduct'
import Product from '../components/Product'
import StarProduct from '../components/StarProduct'
import { AppContext } from '../context/AppContext'

const SectionFour = (  ) => {

  const {retrive} = useContext(AppContext);

  const [retreivealProduct , setRetreivalProduct ] = retrive;


  return (
    <div>
    <div className='section setion_offer' >

<h1 className="section_headline"> {data[3]['section']} </h1>

<div className="grid_offer mt-3">


{ data[3]['products'].map(( {title , price , status , image} ) => {
      if (status === "new") {
        return (
          <div key={title} onClick={() => setRetreivalProduct({
            title,
            price,
            image
          }) } >  
          <NewProduct price={price} image={image} headline={title}  />
          </div>
        );
      } 
      if (status === "star") {
        return (
          <div key={title} onClick={() => setRetreivalProduct({
            title,
            price,
            image
          }) } >  
          <StarProduct price={price} image={image} headline={title} />
          </div>
        );
      } 
      if (status === "reg") {
        return (
          <div key={title} onClick={() => setRetreivalProduct({
            title,
            price,
            image
          }) } >  
          <Product price={price} image={image} headline={title}  />
          </div>
        );
      } 
  })  }


</div>

</div>

</div>
  )
}

export default SectionFour