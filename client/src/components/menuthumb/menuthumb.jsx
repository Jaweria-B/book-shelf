
const MenuThumb = ({ imageUrl, title, author, price, store }) => {
  return (
    <div>
      <div className="menu-image-wrap">
        <img src={imageUrl} className="img-fluid menu-image" alt={title} style={{ width: '100%', maxWidth: '200px' }}/>
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
