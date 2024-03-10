import { useParams } from 'react-router-dom';

const BookDetailsPage = ({ books }) => {
  const { index } = useParams();
  const book = books.find(book => book.index === parseInt(index));

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <img src={book.src} className="img-fluid" alt={book.title} />
        </div>
        <div className="col-md-8">
          <h2>{book.title}</h2>
          <p className="lead">by {book.author}</p>
          <hr />
          <h4>Available Stores:</h4>
          <ul className="list-group">
            {book.stores.map((store, index) => (
              <li key={index} className="list-group-item">
                <h5>{store.name}</h5>
                <p>Price: ${store.price}</p>
                <p>Address: {store.address}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default BookDetailsPage;
