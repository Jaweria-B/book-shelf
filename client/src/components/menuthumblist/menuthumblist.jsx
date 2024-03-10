import MenuThumb from "../menuthumb/menuthumb";

const MenuThumbsList = ({ books }) => {
    return (
        <div className="d-flex flex-wrap">
        {books.map((book, index) => (
        <div key={index} className="col-lg-4 col-md-6 col-12 mb-4">
            <MenuThumb
            index={book.index}
            imageUrl={book.src}
            title={book.title}
            author={book.author}
            price={book.stores[0].price}
            store={book.store}
            />
        </div>
        ))}
        </div>
    );
}

export default MenuThumbsList;