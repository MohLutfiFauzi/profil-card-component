import image from '../images/image-victor.jpg'
import '../App.scss'

const ImageVictor = () => {
    return (
        <picture className='image-victor'>
            <img className='image-victor__img' src={image} alt='victor' />
        </picture>
    )
}

export default ImageVictor