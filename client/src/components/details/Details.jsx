
import nftAPI from '../../api/nftAPI';
import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';


function Details() {
  const [details, setDetails] = useState({});
  const { nftId } = useParams();

  useEffect(() => {
    (async () => {
    const details = await nftAPI.getOneById(nftId);

      console.log(details);
      setDetails(details);
    })();
  }, []);

 return (
    <div className="relative flex flex-grow bg-gradient-to-r from-indigo-200 to-yellow-100 px-8 items-center justify-center text-center py-4 sm:px-6 lg:px-8">
      <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">

       <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-80">
        <img src={details.imageUrl} alt="picture" />
       </div>

       <div className="p-6 text-center">
       <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
         {details.title}
       </h4>
       <p
        className="block font-sans text-base antialiased font-medium leading-relaxed  blue-gray-400">
       {details.discription}
       </p>
       <p
       className="block font-sans text-base antialiased font-medium leading-relaxed  blue-gray-400">
       {details.prize}
       </p>
     </div>

     <div className="flex justify-center p-6 pt-2 gap-7">
       <Link to="/catalog"
        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 bg-violet-300 text-gray-900 hover:bg-yellow-100"
        >
       Catalog
       </Link>
       <Link to="/buy"
       className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 bg-violet-300 text-gray-900 hover:bg-yellow-100"
       >
       Buy 
       </Link>
 
       </div>

      </div>
    </div>
  )
}

export default Details