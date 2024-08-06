import CardNFT from "../catalog/CardNFT";
import { useEffect, useState } from "react";
import nftApi from "../../api/nftAPI";
import CustomSpinner from "../CustomSpinner";
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { UserContext } from '../../context/userContext';

function Hero() {
  const [nftLatest, setNftLatest] = useState([]);
  const { isAuthticated } = useContext(UserContext);
  useEffect(() => {
    (async () => {
      const latestNft = await nftApi.getAll();

      setNftLatest(latestNft.reverse().slice(0, 4));
    })();

  } , []);
  
  return (
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-gradient-to-r from-indigo-200 to-yellow-100">

       
          <div className="flex-1 justify-center items-center text-center">

            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mt-12">
            Create Buy and Sell Unique NFTs
            
            </h1>

            <p className="mt-2 text-lg leading-8 text-gray-800">
            Your Gateway to the Digital Art Revolution!
            </p>
            {/* TODO: condishionally render if user is logged in */}
            <div className="mt-2 flexitems-center justify-center">
              <Link
                to="/catalog"
                className="rounded-md bg-indigo-400 px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-yellow-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-200"
              >
                Buy NFTs

              </Link>
              { isAuthticated && (
                <Link to="/create" className="text-sm font-semibold leading-6 p-4 text-gray-900">
                Create NFTs <span aria-hidden="true">→</span>
              </Link>
              )}
            </div>

          
          </div>
           
           <div className="flex flex-wrap gap-2 justify-center items-center mt-12">  
              {nftLatest.length > 0 
              ? nftLatest.map((nft) => (
              <CardNFT key={nft._id} {...nft}/>
              ))
              : <div className="flex flex-1 items-center justify-center gap-8">
                <h1 className="text-3xl font-bold">Loding...NFTs</h1>
                <CustomSpinner />
               </div>
              }
           </div>

      </div>
  )
}

export default Hero;