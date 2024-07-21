import CardNFT from "./CardNFT";
import nftAPI from "../../api/nftAPI";
import { useEffect, useState } from "react";

function Catalog() {
const [nft, setNft] = useState([]);

  useEffect(() => {
    (async () => {
      const nfts = await nftAPI.getAll();

      setNft(nfts);
    })();
  } , []);

    return (
      <div className="bg-white">
     
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 text-center mb-10">All NFTs</h2>
      
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">

              {nft.map((nft) => (
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
              ))}

          </div>
      
     </div>
    </div>
    )
  }

  export default Catalog;
  