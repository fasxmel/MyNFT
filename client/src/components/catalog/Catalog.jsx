
import { useGetAllNfts } from "../../hooks/useNfts";
import CustomSpinner from "../common/CustomSpinner";
import CardNFT from "./CardNFT";

function Catalog() {

const [nft, setNft] = useGetAllNfts();

    return (

      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-gradient-to-r from-indigo-200 to-yellow-100">

        <div className="flex-1 justify-center items-center text-center">
        <h1 className="text-4xl font-bold mt-28">All NFTs</h1>
        </div>
        
        <div className="flex flex-wrap gap-2 justify-center items-center mt-12">  
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
  