// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {eachitem} = props
  const {title, description, publishedDate} = eachitem
  return (
    <li className="item_container">
      <div className="header">
        <h1 className="main_heading">{title}</h1>
        <p className="date_published">{publishedDate}</p>
      </div>
      <p className="description_para">{description}</p>
      <hr className="horizontal" />
    </li>
  )
}

export default BlogItem
