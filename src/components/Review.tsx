interface Props {
    reviewText: string;
    date: string;
  }

const Review = ({ reviewText, date }: Props) => {
    return (
      <div className="review-container">
        <div className="review-header">
        <div className="stars">
          {[...Array(5)].map((_, index) => (
          <span key={index} className="star full">★</span>
          ))}
        </div>
        </div>
        <p className="review-text">"{reviewText}"</p>
        <p className='review-date'>{date}</p>
      </div> 
    );
}

export default Review;