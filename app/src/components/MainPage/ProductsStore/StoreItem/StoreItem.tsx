import { Link } from "react-router-dom"

interface Props{
    image:string,
     minPrice:number,
      maxPrice:number, 
      link:string
}

const StoreItem= ({image, minPrice, maxPrice, link}:Props)=>{

    return (
        <div className="col mb-5">
        <div className="card h-100">
           <img  alt='deer' className="card-img-top" src={image}
                />
          <div className="card-body p-4">
                 <div className="text-center">

                     <h5 className="fw-bolder">Popularne produkty</h5>

                     {minPrice} - {maxPrice}
                 </div>
             </div>
             <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                 <div className="text-center"><Link to={link} className="btn btn-outline-dark mt-auto" >Więcej </Link></div>
             </div>
       </div>
     </div>
)
  }
  export default StoreItem
  