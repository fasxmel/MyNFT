import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import commentsAPI from '../../api/commentsAPI';
import { useGetOneNftById } from '../../hooks/useNfts';


function Details() {
  const { nftId } = useParams();
  const [details, setDetails] = useGetOneNftById(nftId);
  const [username, setUsername] = useState('');
  const [comment, setComment] = useState('');


  const commentOnSubmitHandler = async (e) => {
    e.preventDefault();
   
    const newComment = await commentsAPI.create(nftId, username, comment);
    // we need to refactor this
    console.log(username);
    console.log(comment);
    console.log('comment submitted');
  }

 return (
     <div className='relative flex flex-grow bg-gradient-to-r from-indigo-200 to-yellow-100 px-8 items-center justify-center text-center py-4 sm:px-6 lg:px-8'>
    
      <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96 mt-20">

       <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-80">
        <img src={details.imageUrl} alt="picture" />
       </div>

       <div className="p-6 text-center">
       <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
         {details.title}
       </h4>
       <p
        className="block font-sans text-base antialiased font-medium leading-relaxed  blue-gray-400">
       {details.description}
       </p>
       <p
       className="block font-sans text-base antialiased font-medium leading-relaxed  blue-gray-400">
       ${details.price}
       </p>
       </div>

       <div className="border-2 border-violet-300 flex items-center justify-center text-center p-6 pt-2 m-4 gap-7">
        <div className="flex flex-1 items-center justify-center gap-10">
          <h2>Comments:</h2>
            <ul>
              {details.comments && Object.values(details.comments).map((comment) => (
                <li
                key={comment._id}
                className="block font-sans text-base antialiased font-medium leading-relaxed  blue-gray-400">
                <p>Content:{comment.username}: {comment.text}</p>
                </li>
              ))}
            </ul>
        </div>

        <div className="flex flex-1 items-center justify-center gap-10">
        <Link to="#"
         className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 bg-violet-300 text-gray-900 hover:bg-yellow-100"
         >
         Edit
         </Link>
         <Link to={`/details/${nftId}/comments`}
         className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 bg-violet-300 text-gray-900 hover:bg-yellow-100"
         >
        Delete
         </Link>
        </div>

       </div>

       <div className="border-2 border-violet-300 flex items-center justify-center text-center p-6 pt-2 m-4 gap-7">
             <label>Add new comment:</label>
             <form onSubmit={commentOnSubmitHandler}>
                <input 
                type="text" 
                placeholder="(Pesho)" 
                name="username"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                />
                
                <textarea 
                name="comment" 
                placeholder="Comment........"
                onChange={(e) => setComment(e.target.value)}
                value={comment}
                >  
                </textarea>

                <input className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 bg-violet-300 text-gray-900 hover:bg-yellow-100 ml-0" type="submit" value="Add Comment" />
             </form>
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