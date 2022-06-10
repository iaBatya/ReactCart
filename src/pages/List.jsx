import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Navigationbar from '../components/Navigationbar'
import Tableheader from '../components/Tableheader';
import Posts from '../components/Posts';
import CartItems from '../components/CartItems';

const List = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  
  const handleClick = (item) => {
        if (cart.indexOf(item) !== -1) return;
        setCart([...cart, item]);
    };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  }


  // useEffect(()=>{
  //   console.log('cart change');
  // }, [cart]);

  return (
    <div>
        <Navigationbar  navbarItem={'List of added products'}  link={"/listadded"}/>
      <Tableheader setShow={setShow} size={cart.length} />
      { show ?  ( <Posts handleClick={handleClick}/> ) : ( <CartItems cart={cart} setCart={setCart} handleChange={handleChange} /> ) }
    </div>
  )
}

export default List;















// import React, {useState} from 'react';
// import Navigationbar from '../components/Navigationbar';
// import Posts from '../components/Posts';
// import Listadded from './Listadded';
// import CartItems from '../components/CartItems';

// const List = () => {
//     const [show, setShow] = useState(true);
//     const [cart, setCart] = useState([]);

  
//     const handleClick = (item) => {
//         cart.push(item);
//         console.log(cart);
//         // if (cart.indexOf(item) !== -1) return;
//         // setCart([...cart, item]);
//     };

//     const handleChange = (item, d) => {
//         const ind = cart.indexOf(item);
//         const arr = cart;
//         arr[ind].amount += d;
    
//         if (arr[ind].amount === 0) arr[ind].amount = 1;
//         setCart([...arr]);
//         }
    


//     return (
//         <div>
//             <Navigationbar 
//                 navbarItem={'List of added products'} 
//                 link={"/listadded"}
//                 setShow={setShow}
//                 size={cart.length}/>
//             { show ?   <Posts handleClick={handleClick}/>  : 'Cart'  }
//         </div>
//     );
// };

// export default List;


