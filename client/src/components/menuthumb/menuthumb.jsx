import { useNavigate } from 'react-router-dom';

const MenuThumb = ({ index, imageUrl, title, author, price, store }) => {
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(`/book/${index}`);

  return (
    <div onClick={onNavigateHandler}>
      <div className="menu-image-wrap">
        <img src={imageUrl} className="img-fluid menu-image" alt={title} style={{ width: '100%', maxWidth: '300px' }}/>
      </div>

      <div className="menu-info">
        <h4>{title}</h4>
        <p>by {author}</p>
        <span className="price-tag bg-white shadow-lg"><small>$</small>{price}</span>
      </div>
    </div>
  );
}

export default MenuThumb;
