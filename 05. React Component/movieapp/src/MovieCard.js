import React from "react";

class MovieCard extends React.Component {
    constructor() {
        super();
        //Creating the state object 
        this.state = {
            title: 'The Avengers',
            plot:
                "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
            poster:
                'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
            rating: '8.0',
            price: 199,
            star: 0
        }

        //Binding the event handler in the constructor if event handler is not an arrow function
        // this.addStars = this.addStars.bind(this)
    }

    //Creating an arrow function for addStars which automatically binds to the current instance
    addStars = () => {
        //Form 1 of setState() - increasing the star count by 0.5
        this.setState({
            star: this.state.star + 0.5
        })

        //Form 2 of setState() - increasing the star count by 0.5
        /**
        this.setState((prevState) => {
            return {
                star: prevState + 0.5
            }
        })
         */
    }

    render() {
        //Destructing the state object in render function
        const { title, plot, poster, price, rating, star } = this.state;

        return (
            <div className="main">

                {/**Movie Card */}
                <div className="movie-card">

                    {/**Left section of Movie Card */}
                    <div className="left">
                        <img alt="poster" src={poster} />
                    </div>

                    {/**Right section Movie Card */}
                    <div className="right">

                        {/**Title, plot, price of the movie */}
                        <div className="title">{title}</div>
                        <div className="plot">{plot}</div>
                        <div className="price">Rs. {price}</div>

                        {/**Footer starts here with ratings, stars and buttons */}
                        <div className="footer">
                            <div className="rating">{rating}</div>

                            {/**Star image with increase and decrease buttons and star count */}
                            <div className="star-dis">
                                <img className="str-btn"
                                    alt="Decrease"
                                    src="https://cdn-icons-png.flaticon.com/128/2801/2801932.png"
                                />
                                <img className="stars"
                                    alt="stars"
                                    src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
                                />
                                <img className="str-btn"
                                    alt="increase"
                                    src="https://cdn-icons-png.flaticon.com/128/2997/2997933.png"
                                    // No binding required as addStars() is an arrow function
                                    onClick={this.addStars}
                                />
                                <span className="starCount">{star}</span>
                            </div>

                            {/**Favourite and add to cart buttons */}
                            <button className="favourite-btn">Favourite</button>
                            <button className="cart-btn">Add to Cart</button>

                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default MovieCard;