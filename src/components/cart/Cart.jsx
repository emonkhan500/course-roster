

const Cart = ({item,totalCost,}) => {
    
    const {title}= item;
    return (
       <div>
       
        <li>{title}</li>
       </div>
    )
};

export default Cart;