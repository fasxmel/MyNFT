import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useFormF";
import { useCreateNft } from "../../hooks/useNfts";

const initialValues = {
  title: '',
  description: '',
  imageUrl: '',
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

    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-gradient-to-r from-indigo-200 to-yellow-100 pt-24">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <img
        alt="Your Company"
        src="/logo1.jpg"
        className="mx-auto h-10 w-auto rounded-md"
      />
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Create NFT
      </h2>
    </div>

    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">

      <form onSubmit={submitHandler} className="space-y-6">

        <div>
          <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">
           title
          </label>
          <div className="mt-2">
            <input
              id="title"
              name="title"
              type="text"
              required
              value={values.title}
              onChange={changeHandler}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
          Description
          </label>
          
          <div className="mt-2">
            <input
              id="description"
              name="description"
              type="text"
              required
              value={values.description}
              onChange={changeHandler}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
        </div>

        </div>

        <div>
          <label htmlFor="imageUrl" className="block text-sm font-medium leading-6 text-gray-900">
           Image
          </label>
          
          <div className="mt-2">
            <input
              id="imageUrl"
              name="imageUrl"
              type="text"
              required
              value={values.imageUrl}
              onChange={changeHandler}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
        </div>

        </div>

        <div>
          <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
           Price
          </label>
          
          <div className="mt-2">
            <input
              id="price"
              name="price"
              type="text"
              required
              value={values.price}
              onChange={changeHandler}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
        </div>

        </div>

        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Create
          </button>
        </div>

      </form>

    
    </div>
    </div>


  )
}

export default Create