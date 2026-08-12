import { X } from 'lucide-react';
import './ImageLightbox.css';

export default function ImageLightbox({ image, title, description, onClose }) {
  if (!image) return null;

  return (
    <div className="lightbox-backdrop" onClick={onClose}>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <button className="lightbox-close" onClick={onClose}>
          <X size={24} />
        </button>
        <div className="lightbox-image-wrapper">
          <img src={image} alt={title || 'Visual'} />
        </div>
        {(title || description) && (
          <div className="lightbox-caption">
            {title && <h3>{title}</h3>}
            {description && <p>{description}</p>}
          </div>
        )}
      </div>
    </div>
  );
}
