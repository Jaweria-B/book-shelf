import { useParams } from 'react-router-dom';

const BookDetailsPage = ({ books }) => {
  const { index } = useParams();
  const book = books.find(book => book.index === parseInt(index));
  
  // Function to render star icons based on the rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<i key={i} className="bi bi-star-fill reviews-icon"></i>);
      } else {
        stars.push(<i key={i} className="bi bi-star reviews-icon"></i>);
      }
    }
    return <div className="reviews-stars">{stars}</div>;
  };

  return (
    <div className="container mt-5" style={{ marginBottom: '90px' }}>
      <div className="row">
        <div className="col-md-4">
          <img src={book.src} className="img-fluid" alt={book.title} style={{ border: '1px solid #000' }}/>
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
                <p>
                  Ratings: {renderStars(store.stars)}
                </p>
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
