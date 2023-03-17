import { useGetBooksQuery } from "../../features/api/apiSlice";
import Loading from "../ui/Loading";
import Book from "./Book";
import { useSelector } from 'react-redux';

export default function BookList() {
  const { filterText, searchText } = useSelector((state) => state.filter);
  const { data: books, isLoading, isError } = useGetBooksQuery();

  const filterByStatus = (book) => {
    switch (filterText) {
      case 'featured':
        return book.featured;
      case 'all':
        return true;
      default:
        return true;
    }
  };

  // filter by name
  const filterByName = (book) => {
    if (book.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1) {
      return true;
    } else if (searchText === '') {
      return true;
    }
    return false;
  }


  // let's decide what will be render
  let content = null;

  if (isLoading) content = <Loading />

  if (!isLoading && isError) {
    content = (
      <div>
        <h2>There was an error occured!</h2>
      </div>
    )
  };

  if (!isLoading && !isError && books?.length === 0) {
    content = (
      <div>
        <h2>No books found!</h2>
      </div>
    )
  };

  if (!isLoading && !isError && books?.length > 0) {
    content = (
      content = books.filter(filterByStatus).filter(filterByName).map((book) => <Book key={book.id} book={book} />)
    )
  };

  return (
    <div className="space-y-6 md:space-y-0 md:grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Card 1 */}
      {content}
    </div>
  )
}