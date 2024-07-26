import { useState, useEffect } from "react";
import nftAPI from "../api/nftAPI";

export const useGetAllNfts = () => {
    const [nft, setNft] = useState([]);

    useEffect(() => {
        (async () => {
          const nfts = await nftAPI.getAll();
    
          setNft(nfts);
        })();
        // if you need to do something to update the nfts, do it here
      } , []);




    return [nft, setNft]
         
}