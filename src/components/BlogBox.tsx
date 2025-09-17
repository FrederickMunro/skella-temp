import { useState } from 'react';

interface Props {
  title: string;
  desc: string;
  story: string;
  image: string;
}

const BlogBox = ({ title, desc, story, image }: Props) => {

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return(
    <div className='blog-post-item-container'>
      <div className="blog-post">
        <div className='blog-info-sub-container'>
          <img className="blog-post-image" src={image} alt={title} />

          <div className="blog-post-header">
            <h2 className="blog-post-title">{title}</h2>
            <h3 className="blog-post-description">{desc}</h3>
          </div>

          <div className={`blog-post-story ${isExpanded ? "expanded" : "collapsed"}`}>
            {story.split('\n').map((paragraph,index) => {
              return <p key={index}>{paragraph}</p>
            })}
          </div>

          <button className="blog-post-toggle" onClick={toggleExpand}>
            {isExpanded ? "Lire moins" : "Lire plus"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default BlogBox;