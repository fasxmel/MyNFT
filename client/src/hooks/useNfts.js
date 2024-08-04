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

export const useGetOneNftById = (nftId) => {
  const [details, setDetails] = useState({
    title: '',
    description: '',
    imageUrl: '',
    price: ''
  });

    useEffect(() => {
        (async () => {
          const oneNft = await nftAPI.getOneById(nftId);
    
          setDetails(oneNft);
        })();
        // we update the nftsId
      } , [nftId]);

    return [details, setDetails]
         
}

export const useCreateNft = () => {

  const nftCreateHandler = async (nftData) => await nftAPI.create(nftData);
  
  return nftCreateHandler;
         
}

export const useDeleteNft = () => {
  const nftDeleteHandler = async (nftId) => await nftAPI.delete(nftId);
  
  return nftDeleteHandler;
         
}