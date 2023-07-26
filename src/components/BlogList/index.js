// Write your JS code here
import BlogItem from '../BlogItem'
import './index.css'

const BlogList = props => {
  const {blogsList} = props
  return (
    <ul className="info_container">
      {blogsList.map(each => (
        <BlogItem key={each.id} eachitem={each} />
      ))}
    </ul>
  )
}

export default BlogList
