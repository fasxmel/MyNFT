import { Link } from "react-router-dom";

function CardNFT({ 
  _id,
  title,
  description,
  price,
  imageUrl,
}) {
  return (
   
  <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">

     <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-80">
      <img src={imageUrl} alt="picture" />
     </div>

     <div className="p-6 text-center">
      <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
        {title}
      </h4>
      <p
        className="block font-sans text-base antialiased font-medium leading-relaxed  blue-gray-400">
        {description}
      </p>
      <p
        className="block font-sans text-base antialiased font-medium leading-relaxed  blue-gray-400">
        {price}
      </p>
     </div>
     
     <div className="flex justify-center p-6 pt-2 gap-7">
      <Link to={`/details/${_id}`}
         className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 bg-violet-300 text-gray-900 hover:bg-yellow-100"
         >
        Details
      </Link>
      <Link to="/buy"
         className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 bg-violet-300 text-gray-900 hover:bg-yellow-100"
         >
        Buy 
      </Link>
      
     </div>

    </div>
          
  )
}

export default CardNFT;