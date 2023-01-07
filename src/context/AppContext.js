import React , {  useState, createContext } from 'react';


export const AppContext = createContext();

export const AppProvider = (props) => {

    const [retreivealProduct , setRetreivalProduct] = useState({
       "title": "كبدة صبيحة",
        "price": "28",
        "image": "/images/products/main_dishes/product-1.jpg",
    });



  



   
   


    return (
            <AppContext.Provider value={ { retrive: [retreivealProduct , setRetreivalProduct]  }} >
                {props.children}
            </AppContext.Provider>
    )
}