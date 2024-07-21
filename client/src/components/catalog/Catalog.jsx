
import nftAPI from "../../api/nftAPI";
import { useEffect, useState } from "react";
import CustomSpinner from "../CustomSpinner";

function Catalog() {
const [nft, setNft] = useState([]);

  useEffect(() => {
    (async () => {
      const nfts = await nftAPI.getAll();

      setNft(nfts);
    })();
  } , []);

    return (
      <div className="relative bg-gradient-to-r from-indigo-200 to-yellow-100 px-8 items-center justify-center text-center py-4">
         
      <div className="relative mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 text-center mb-10">All NFTs</h2>
          
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              
              {nft.length > 0 
              ? nft.map((nft) => (
              <a key={nft._id} href={nft.imageUrl} className="group">

                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                   <img
                    alt="image"
                    src={nft.imageUrl}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                    />
                  </div>

                 <h3 className="mt-4 text-sm text-gray-700 text-center">{nft.title}</h3>
                 <p className="mt-1 text-lg font-medium text-gray-900 text-center">{nft.discription}</p>
                 <p className="mt-1 text-lg font-medium text-gray-900 text-center">{nft.prize}</p>
              </a>
              ))
              : <div className="flex flex-1 items-center justify-center gap-8">
                <h1 className="text-3xl font-bold">Loding...NFTs</h1>
                <CustomSpinner />
               </div>
              }
            
          </div>
     </div>
    </div>
    )
  }

  export default Catalog;
  