import { useEffect } from 'react'
import Card from 'react-bootstrap/Card'

export default function MovieItem({ mymovie }) {
  // useEffect hook to log the movie data when the component mounts or when the movie prop changes
  // This is useful for debugging and understanding when data updates
  useEffect(() => {
    console.log('Movie Item:', mymovie)
  }, [mymovie]) // Dependency array includes mymovie, so this runs whenever mymovie changes

  // Render a Bootstrap Card component to display movie information
  // The card is divided into three sections: Header (title), Body (poster), and Footer (year)
  return (
    <Card className="movie-card h-100">
      {/* Card Header displays the movie title */}
      <Card.Header>{mymovie.Title}</Card.Header>

      {/* Card Body contains the movie poster image */}
      <Card.Body className="movie-card-body">
        <Card.Img
          className="movie-poster"
          variant="top"
          src={mymovie.Poster}
          alt={`Poster for ${mymovie.Title}`} // Alt text for accessibility
        />
      </Card.Body>

      {/* Card Footer displays the movie release year */}
      <Card.Footer>{mymovie.Year}</Card.Footer>
    </Card>
  )
}
