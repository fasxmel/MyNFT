import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "../../hooks/useFormF";
import { useGetOneNftById } from "../../hooks/useNfts";
import nftAPI from "../../api/nftAPI";

// const initialValues = {
//   title: '',
//   description: '',
//   imageUrl: '',
//   price: ''
// }

function Edit() {
  const { nftId } = useParams();
  const navigate = useNavigate();
  const [details] = useGetOneNftById(nftId);

  const {
    values,
    changeHandler,
    submitHandler
  } = useForm(details, async(values) => {
    //TODO: Add costom Componet for confirmation
    const isConfirm = confirm('Are you sure you want to edit this NFT?');

    if (isConfirm) {
      await nftAPI.edit(nftId, values);
      navigate(`/details/${nftId}`);
    }

   
  });



  return (
    <div className="relative flex flex-grow bg-gradient-to-r from-indigo-200 to-yellow-100 px-8 items-center justify-center text-center py-4">
    
    <form className="flex flex-col items-center justify-center" onSubmit={submitHandler} >

       <label htmlFor="title">Title:</label>
       <input 
       type="text" 
       name="title" 
       id="title" 
       value={values.title}
       onChange={changeHandler}
       />
       <label htmlFor="description">Description:</label>
       <textarea 
       name="description" 
       id="description"
       value={values.description}
       onChange={changeHandler}
       ></textarea>

       <label htmlFor="imageUrl">Image:</label>
       <input 
       type="text" 
       name="imageUrl" 
       id="imageUrl" 
       value={values.imageUrl}
       onChange={changeHandler}
       />

       <label htmlFor="price">Price:</label>
       <input 
       type="text" 
       name="price" 
       id="price" 
       value={values.price}
       onChange={changeHandler}
       />

       <button type="submit" value="submit">Create</button>
    </form>

  </div>
  )
}

export default Edit;