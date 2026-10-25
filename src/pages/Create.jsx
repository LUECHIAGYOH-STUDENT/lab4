import { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default function Create() {
  // useState hooks to manage form input state
  // Each form field has its own state variable and setter function
  const [title, setTitle] = useState('')      // State for movie title
  const [year, setYear] = useState('')        // State for movie year
  const [poster, setPoster] = useState('')    // State for movie poster URL

  // Handle form submission
  // This function is called when the user clicks the "Add Movie" button
  const handleSubmit = (e) => {
    // Prevent the default form submission behavior (which would reload the page)
    e.preventDefault()

    // Log the form data to the console
    // In a real application, this would typically send the data to a server via POST request
    console.log('Movie Title:', title)
    console.log('Movie Year:', year)
    console.log('Movie Poster:', poster)

    // Optional: Clear the form after submission
    setTitle('')
    setYear('')
    setPoster('')

    // Show an alert to confirm submission
    alert('Movie data logged to console!')
  }

  return (
    <section className="page-panel" aria-labelledby="create-title">
      <p className="eyebrow">Lab 4 · HTTP &amp; Hooks</p>
      <h1 id="create-title">Create</h1>
      <h3>Add a New Movie</h3>
      <p className="support-copy">This page demonstrates form handling with React state management. Fill in the movie details below.</p>

      {/* Form to add a new movie using Bootstrap Form components */}
      <Form onSubmit={handleSubmit} className="mt-4">
        {/* Movie Title Input Field */}
        <Form.Group className="mb-3">
          <Form.Label>Movie Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter movie title"
            value={title}
            // Update the title state when the input value changes
            onChange={(e) => { setTitle(e.target.value) }}
            required
          />
        </Form.Group>

        {/* Movie Year Input Field */}
        <Form.Group className="mb-3">
          <Form.Label>Release Year</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter release year (e.g., 2024)"
            value={year}
            // Update the year state when the input value changes
            onChange={(e) => { setYear(e.target.value) }}
            required
          />
        </Form.Group>

        {/* Movie Poster URL Input Field */}
        <Form.Group className="mb-3">
          <Form.Label>Poster URL</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter poster image URL"
            value={poster}
            // Update the poster state when the input value changes
            onChange={(e) => { setPoster(e.target.value) }}
            required
          />
          <Form.Text className="text-muted">
            Provide a URL to the movie poster image.
          </Form.Text>
        </Form.Group>

        {/* Submit Button */}
        <Button variant="primary" type="submit">
          Add Movie
        </Button>
      </Form>
    </section>
  )
}
