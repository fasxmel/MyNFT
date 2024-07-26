
import { useGetAllNfts } from "../../hooks/useNfts";
import CustomSpinner from "../CustomSpinner";
import CardNFT from "./CardNFT";

function Catalog() {

const [nft, setNft] = useGetAllNfts();

    return (

      <div className="relative flex flex-grow overflow-hidden bg-gradient-to-r from-indigo-200 to-yellow-100 px-8 items-center justify-center text-center  py-4 gap-6">
        <h1 className="text-4xl font-bold mt-28">All NFTs</h1>
        <div className="flex flex-grow flex-row flex-wrap gap-8 justify-center mt-36">  
         {nft.length > 0 
              ? nft.map((nft) => (
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

  export default Catalog;
  