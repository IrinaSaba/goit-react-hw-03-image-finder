import PropTypes from "prop-types";
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
 

 Button.propTypes = {
   handleLoadMore: PropTypes.func,
 };

 export default Button;