import BookList from "../components/bookList/BookList";
import Filter from "../components/filter/Filter";

export default function Home() {
  return (
    <main className="py-12 px-6 2xl:px-6 container">
      <div className="order-2 xl:-order-1">
        <div className="flex items-center justify-between mb-12">
          <h4 className="mt-2 text-xl font-bold">Book List</h4>
          <Filter />
        </div>
        <BookList />
      </div>
    </main>
  )
}