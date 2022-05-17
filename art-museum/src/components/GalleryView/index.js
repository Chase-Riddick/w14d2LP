import {useParams} from "react-router-dom";

export const GalleryView = (props) => {
    const {galleryId} = useParams();
    const { galleries } = props;
    const gallery = galleries.find((item) => item.gallerynumber === `${galleryId}`);
    console.log(gallery);
    
    
    return (
        <h2> {gallery.name} </h2>
    )
};