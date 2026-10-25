import Movies from '../components/Movies.jsx'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Read() {
  // useState hook to manage the movies state in the component
  // Initialize with an empty array until data is fetched from the API
  const [movies, setMovies] = useState([])

  // useEffect hook to fetch data when the component mounts
  // The empty dependency array [] ensures this runs only once on mount
  useEffect(() => {
    // Make an HTTP GET request to fetch movie data from the API
    axios.get('https://data-rep-mern-application.github.io/dataserver/movies.json')
      .then((response) => {
        // Log the response to debug
        console.log('API Response:', response.data)
        // On successful response, update the movies state with the data
        // The API returns a JSON object with a 'myArray' property containing the array
        setMovies(response.data.myArray)
      })
      .catch((error) => {
        // Log any errors that occur during the API request
        console.log('Error fetching movies:', error)
      })
  }, []) // Empty dependency array means this effect runs only once when component mounts

  return (
    <section className="read-page w-100" aria-labelledby="read-title">
      <div className="read-intro mb-4">
        <p className="eyebrow">Lab 4 · HTTP & Hooks</p>
        <h1 id="read-title">Read Movies</h1>
        <h3>Hello from the Read component</h3>
        <p className="support-copy">The movie data is fetched from an API using Axios and passed to the Movies component for display.</p>
      </div>
      {/* Pass the fetched movies data to the Movies component via props */}
      <Movies myMovies={movies} />
    </section>
  )
}
