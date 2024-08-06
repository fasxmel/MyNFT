import { useParams, Link, useNavigate } from 'react-router-dom';
import { useGetOneNftById } from '../../hooks/useNfts';
import { useForm } from '../../hooks/useFormF';
import { useCreateComments, useGetAllComments } from '../../hooks/useComments';
import { useContext } from 'react';
import { UserContext } from '../../context/userContext';
import nftAPI from '../../api/nftAPI';



const initialValues = {
  comment: '',
}

function Details() {
  const { nftId } = useParams();
  const navigate = useNavigate();
  const [ comments, setComments ] = useGetAllComments(nftId);
  const createComment = useCreateComments();
  const [details] = useGetOneNftById(nftId);
  const {isAuthticated, email, userId} = useContext(UserContext);
  
  const {values, 
         changeHandler, 
         submitHandler
  } = useForm(initialValues, ({comment}) => {
     try {
        const newComment = createComment(nftId, comment);
        setComments(prev => [...prev, {...newComment, author: email, _id: userId}]);
      
     } catch (error) {
       console.log(error.message);
     }
    
   
  });

  const isOwner = userId === details._ownerId;

  const nftDeleteHandler = async () => {
    // TODO: Add costom Componet for confirmation
    const isConfirm = confirm(`Are you sure you want to delete this ${details.title} NFT?`);

    if (!isConfirm) {
      return;
    }

    try {
      await nftAPI.deleteById(nftId);
      navigate('/');
    } catch (error) {
      console.log(error.message);
    }
     
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
         <div className="flex flex-1 items-center justify-center gap-2">
           <h2 className="block font-sans text-base antialiased font-medium leading-relaxed  blue-gray-400 ml-8">Comments:</h2>
             <ul>
               {comments.map((comment) => (
                 <li
                 key={comment._id}>
                 <div className="border-2 border-violet-300 flex items-center justify-center text-center p-6 pt-2 m-4 gap-7 mr-8">
                 <p>{comment.author.email}: {comment.text}</p>
                 </div>
                 </li>
               ))}
             </ul>
             {comments.length === 0 && (
               <p className="block font-sans text-base antialiased font-medium leading-relaxed  blue-gray-400 ml-8">No comments yet</p>
             )}
         </div>
 
        </div>

      {isAuthticated && (
       
        <div className="border-2 border-violet-300 flex items-center justify-center text-center p-6 pt-2 m-4 gap-7">
              <label>Add new comment:</label>
              <form onSubmit={submitHandler}>
               
                 <textarea 
                 className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 bg-violet-300 text-gray-900 hover:bg-yellow-100 ml-0"
                 name="comment" 
                 placeholder="Comment........"
                 onChange={changeHandler}
                 value={values.comment}
                 >  
                 </textarea>
 
                 <input className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 bg-violet-300 text-gray-900 hover:bg-yellow-100 ml-0 mt-2" type="submit" value="Add Comment" />
              </form>
       </div>
      )}
      
       {isAuthticated && isOwner && (
         <div className="flex flex-1 items-center justify-center gap-10">
         <Link to={`/edit/${nftId}`}
          className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 bg-violet-300 text-gray-900 hover:bg-yellow-100"
          >
             Edit
          </Link>
          <Link to="#"
          className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 bg-violet-300 text-gray-900 hover:bg-yellow-100"
          onClick={nftDeleteHandler}
          >
             Delete
          </Link>
       </div>
       )}


      <div className="flex justify-center p-6 pt-2 gap-7">
       <Link to="/catalog"
        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 bg-violet-300 text-gray-900 hover:bg-yellow-100"
        >
       Catalog
       </Link>
      </div>

      

      </div>
   
     </div>
  )
}

export default Details;