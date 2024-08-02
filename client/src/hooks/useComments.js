import { useEffect, useState } from "react";
import commentsAPI from "../api/commentsAPI";


export const useCreateComments = () => {

    const createComment = (nftId, comment) => {
        commentsAPI.create(nftId, comment);
    }
    return createComment;
}

export const useGetAllComments = (nftId) => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        (async () => {
            const allComments = await commentsAPI.getAll(nftId);
            console.log(allComments);
            setComments(allComments);
        })();
    }, [nftId]);

    return [comments, setComments];
}