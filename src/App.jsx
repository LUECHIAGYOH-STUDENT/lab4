import { Link, Route, Routes } from 'react-router-dom'
import Content from './components/Content.jsx'
import Footer from './components/Footer.jsx'
import NavigationBar from './components/NavigationBar.jsx'
import Create from './pages/Create.jsx'
import Read from './pages/Read.jsx'
import './App.css'

export default function App() {
  // Main application component that sets up routing
  // Uses React Router to handle client-side navigation between different pages
  return (
    <div className="app-shell">
      {/* Navigation bar component displayed at the top of the page */}
      <NavigationBar />

      {/* Main content area with Bootstrap container for responsive layout */}
      <main className="app-main container">
        {/* Routes define which component to render based on the URL path */}
        <Routes>
          {/* Home route - renders the Content component */}
          <Route path="/" element={<Content />} />

          {/* Read route - displays the movie list with data fetched from API */}
          <Route path="/read" element={<Read />} />

          {/* Create route - displays a form to add new movies */}
          <Route path="/create" element={<Create />} />

          {/* Catch-all route for 404 errors - renders when no other route matches */}
          <Route
            path="*"
            element={(
              <section className="page-panel" aria-labelledby="not-found-title">
                <p className="eyebrow">404 · Page not found</p>
                <h1 id="not-found-title">That page does not exist.</h1>
                {/* Link to return to the home page */}
                <Link className="btn btn-primary mt-2" to="/">Return home</Link>
              </section>
            )}
          />
        </Routes>
      </main>

      {/* Footer component displayed at the bottom of the page */}
      <Footer />
    </div>
  )
}
