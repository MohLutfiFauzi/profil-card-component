import '../App.scss'

const City = ({ city }) => {
    return (
        <div className='city'>
            <p className='city__text'>{city}</p>
        </div>
    )
}

export default City