import { useGetBookQuery } from "../../features/api/apiSlice";
import { useParams } from "react-router-dom";
import Form from "./Form";
import Loading from "../ui/Loading";

export default function EditBook() {
  const { bookId: id } = useParams();
  const { data: book, isLoading, isError } = useGetBookQuery(id);
  // console.log(book);

  let content = null;

  if (isLoading) content = <Loading />

  if (!isLoading && isError) {
    content = (
      <div>
        <h2>There was an error occured!</h2>
      </div>
    )
  };

  if (!isLoading && !isError && Object.keys(book)?.length === 0) {
    content = (
      <div>
        <h2>No book found!</h2>
      </div>
    )
  };

  if (!isLoading && !isError && Object.keys(book)?.length > 0) {
    content = (
      content = <Form book={book} />
    )
  };

  return (
    <div className="p-8 overflow-hidden bg-white shadow-cardShadow rounded-md max-w-xl mx-auto">
      <h4 className="mb-8 text-xl font-bold text-center">Edit Book</h4>
      {content}
    </div>
  )
}