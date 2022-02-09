import PropTypes from "prop-types";
import s from './ImageGalleryItem.module.css'

const ImageGalleryItem = ({webformatURL, id, tags}) => {
   return (
            <li className={s["ImageGalleryItem"]} key={id}>
               <img  className={s["ImageGalleryItem-image"]} src={webformatURL} alt={tags} />
            </li>
   );
 };
 
 ImageGalleryItem.propTypes = {
   webformatURL: PropTypes.string,
   id: PropTypes.number,
   tags: PropTypes.string,
 };

 export default ImageGalleryItem;