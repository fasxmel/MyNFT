import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useFormF";
import { useCreateNft } from "../../hooks/useNfts";

const initialValues = {
  title: '',
  description: '',
  img: '',
  price: ''
}

function Create() {
  const navigate = useNavigate();
  const createNft = useCreateNft();
  const createHendler = async (data) => {
    try {
      const { _id: nftId } = await createNft(data);
      navigate(`/details/${nftId}`);
    } catch (error) {
      console.log(error.message);
    }
    
  }

  const {
    values,
    changeHandler,
    submitHandler
  } = useForm(initialValues, createHendler);



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
       value={values.image}
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

export default Create