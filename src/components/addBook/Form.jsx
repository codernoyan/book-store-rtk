import { useAddBookMutation } from "../../features/api/apiSlice";
import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function Form() {
  const [addBook, { isLoading, isError }] = useAddBookMutation();
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: '',
    author: '',
    thumbnail: '',
    price: '',
    rating: '',
    featured: false,
  });

  const resetForm = () => {
    setInput({
      name: '',
      author: '',
      thumbnail: '',
      price: '',
      rating: '',
      featured: false,
    })
  }

  const handleAddBook = (e) => {
    e.preventDefault();
    console.log(input);
    addBook(input);
    resetForm();
    navigate('/');
  }

  return (
    <>
      <form onSubmit={handleAddBook} className="book-form">
        <div className="space-y-2">
          <label htmlFor="lws-bookName">Book Name</label>
          <input onChange={(e) => setInput({ ...input, name: e.target.value })} required className="text-input" type="text" id="lws-bookName" name="name" value={input.name} />
        </div>
        <div className="space-y-2">
          <label htmlFor="lws-author">Author</label>
          <input onChange={(e) => setInput({ ...input, author: e.target.value })} required className="text-input" type="text" id="lws-author" name="author" value={input.author} />
        </div>
        <div className="space-y-2">
          <label htmlFor="lws-thumbnail">Image Url</label>
          <input onChange={(e) => setInput({ ...input, thumbnail: e.target.value })} required className="text-input" type="text" id="lws-thumbnail" name="thumbnail" value={input.thumbnail} />
        </div>
        <div className="grid grid-cols-2 gap-8 pb-4">
          <div className="space-y-2">
            <label htmlFor="lws-price">Price</label>
            <input onChange={(e) => setInput({ ...input, price: parseInt(e.target.value) })} required className="text-input" type="number" id="lws-price" name="price" value={input.price} />
          </div>
          <div className="space-y-2">
            <label htmlFor="lws-rating">Rating</label>
            <input onChange={(e) => setInput({ ...input, rating: parseInt(e.target.value) })} required className="text-input" type="number" id="lws-rating" name="rating" min={1} max={5} value={input.rating} />
          </div>
        </div>
        <div className="flex items-center">
          <input onChange={(e) => setInput({ ...input, featured: e.target.checked })} id="lws-featured" type="checkbox" name="featured" className="w-4 h-4" checked={input.featured && true} />
          <label htmlFor="lws-featured" className="ml-2 text-sm"> This is a featured book </label>
        </div>
        <button disabled={isLoading} type="submit" className="submit" id="lws-submit">Add Book</button>
      </form>
      {
        isError && (
          <div>
            <h2>There was an error occured</h2>
          </div>
        )
      }
    </>
  )
}