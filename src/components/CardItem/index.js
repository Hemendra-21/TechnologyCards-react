// Write your code here.
import './index.css'

const TechCard = props => {
  const {details} = props
  const {title, description, imgUrl, className} = details
  const updatedClassName = `card ${className}`
  return (
    <li className={updatedClassName}>
      <h1 className="card-title">{title}</h1>
      <p className="card-description">{description}</p>
      <img src={imgUrl} alt={title} className="imgClass" />
    </li>
  )
}

export default TechCard
