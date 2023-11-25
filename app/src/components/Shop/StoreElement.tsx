import React from "react";

interface Props {
    name:string,
    img: any,
    price:number,
    id:number,
     add:any,
}
const StoreElement = ({name, img, price, id, add}:Props) => {

    const handleAddToBasket = () =>{
        add(id)
    }
    return (<>
        <section key={id} className="py-5 item-shop">

        </section>
    </>)
}

export default StoreElement