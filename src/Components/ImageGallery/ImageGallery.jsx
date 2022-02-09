import PropTypes from "prop-types";
import { Component } from "react";
import { SRLWrapper } from "simple-react-lightbox";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import s from './ImageGallery.module.css'

class ImageGallery extends Component {
  render() {
    const { newFetch } = this.props;
    return (
      <SRLWrapper >
        <ul className={s["ImageGallery"]}>
            {newFetch.map(({ webformatURL,id, tags }) => (
              <ImageGalleryItem webformatURL={webformatURL} key={id} tags={tags} />
            ))}
        </ul>
      </SRLWrapper> 
    );
  }
  
 };
 
 ImageGallery.propTypes = {
   newFetch: PropTypes.array,
 };

 export default ImageGallery;