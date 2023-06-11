// Write your code here
import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {
    index: 0,
  }

  onClickLeft = () => {
    const {index} = this.state
    if (index > 0) {
      this.setState(prevState => ({
        index: prevState.index - 1,
      }))
    }
  }

  onClickRight = () => {
    const {index} = this.state

    if (index < 3) {
      this.setState(prevState => ({
        index: prevState.index + 1,
      }))
    }
  }

  render() {
    const {index} = this.state

    const {reviewsList} = this.props
    const {imgUrl, username, companyName, description} = reviewsList[index]

    return (
      <div className="reviews-app">
        <div className="card">
          <h1 className="head">Reviews</h1>
          <img src={imgUrl} className="image-icon" alt={username} />
          <div className="reviews-profile">
            <button
              className="button"
              type="button"
              data-testid="leftArrow"
              onClick={this.onClickLeft}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                className="image"
                alt="left arrow"
              />
            </button>
            <p className="para">{username}</p>
            <button
              className="button"
              type="button"
              data-testid="rightArrow"
              onClick={this.onClickRight}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                className="image"
                alt="right arrow"
              />
            </button>
          </div>
          <p className="paragraph">{companyName}</p>
          <p className="paragraph">{description}</p>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel
