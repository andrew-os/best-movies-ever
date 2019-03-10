import React from "react"

class MovieCard extends React.Component{
    render(){
        const {movie} = this.props
        return (
            <div>
                <h1>{movie.title}</h1>

            </div>
        )
    }
}

export default MovieCard;