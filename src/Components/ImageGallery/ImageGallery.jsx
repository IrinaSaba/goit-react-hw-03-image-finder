import PropTypes from "prop-types";
import { Component } from "react";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import s from './ImageGallery.module.css'

class ImageGallery extends Component {
  render() {
    const { newFetch } = this.props;
    return (
      <>
       <ul className={s["ImageGallery"]}>
          {newFetch.map(({ webformatURL, id, tags }) => (
            <ImageGalleryItem webformatURL={webformatURL} id={id} tags={tags} />
          ))}
       </ul>
      </>     
    );
  }
  
 };
 
 ImageGallery.propTypes = {
   newFetch: PropTypes.array,
 };

 export default ImageGallery;