import BlogBox from './BlogBox';
import Image from '../assets/home-image-1200.jpeg';

const Blog = () => {
  const langNum = 0;
  
  const blogs = [
    {
      title: ['t', 'a'],
      desc:  [
        'b',
        'b'
      ],
      story:  [
        'q',
        'q'
      ],
      image: Image,
    },
    {
      title: ['t', 'a'],
      desc:  [
        'b',
        'b'
      ],
      story:  [
        'q',
        'q'
      ],
      image: Image,
    },
    {
      title: ['', ''],
      desc:  [
        '',
        ''
      ],
      story:  [
        '',
        ''
      ],
      image: ''
    },
  ];
  
  return(
    <div className='blog-post-container'>
      {blogs.map((blog, index) => {
        return <BlogBox
                  title={blog.title[langNum]}
                  desc={blog.desc[langNum]}
                  story={blog.story[langNum]}
                  image={blog.image}
                  key={index} />
      })}
    </div>
  )
}

export default Blog;