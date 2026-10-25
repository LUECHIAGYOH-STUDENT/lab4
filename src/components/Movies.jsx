import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import MovieItem from './MovieItem.jsx'

export default function Movies({ myMovies }) {
  // The Movies component receives movie data via props (myMovies)
  // It maps over the array and renders a MovieItem for each movie

  // Add a check to ensure myMovies is an array before mapping
  // This prevents errors when data is still loading or undefined
  if (!myMovies || myMovies.length === 0) {
    return <p>Loading movies...</p>
  }

  return (
    <Row xs={1} md={2} lg={3} className="g-4" aria-label="Movie list">
      {/* Map over the movies array and create a MovieItem for each movie */}
      {myMovies.map((movie) => (
        <Col key={movie.imdbID}>
          {/* Pass the individual movie object as a prop to MovieItem */}
          <MovieItem mymovie={movie} />
        </Col>
      ))}
    </Row>
  )
}
