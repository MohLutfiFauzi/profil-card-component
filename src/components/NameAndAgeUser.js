import '../App.scss'

const NameAndAgeUser = ({ name, age }) => {
  return (
    <div className='name-age'>
      <h2 className='name-age__name'>{name} <span className='name-age__age'>{age}</span></h2>
    </div>
  )
}

export default NameAndAgeUser