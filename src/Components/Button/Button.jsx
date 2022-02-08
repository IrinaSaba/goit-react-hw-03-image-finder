// import PropTypes from "prop-types";
import s from './Button.module.css'

const Button = ({handleLoadMore}) => {
   return (
      <button 
      className={s["Button"]} type="button" 
      onClick={handleLoadMore}>
      Load More
    </button>
   );
 };
 

//  ImageGalleryItem.propTypes = {
//    webformatURL: PropTypes.string,
//    id: PropTypes.number,
//    tags: PropTypes.string,
//  };

 export default Button;