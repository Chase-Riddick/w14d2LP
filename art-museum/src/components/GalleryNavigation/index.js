import { NavLink } from 'react-router-dom';
import "./GalleryNavigation.css"

export const GalleryNavigation = (props) => {
    const { galleries } = props;
    return (
        <nav>
            <ul>
                { galleries.map((galleryItem) => (
                    <li key={`gallery-item-${galleryItem.id}`}>
                        <NavLink activeClassName="active" to={`/galleries/${galleryItem.id}`}>
                            {galleryItem.name}
                        </NavLink>
                    </li>
                ))}
            </ul>

        </nav>
    )
};