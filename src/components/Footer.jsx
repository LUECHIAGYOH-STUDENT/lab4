const currentYear = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="app-footer">
      <div className="container d-flex flex-column flex-sm-row justify-content-between gap-2">
        <span>© {currentYear} Lab 4 · HTTP &amp; Hooks</span>
        <span>Built with React, Vite and Bootstrap</span>
      </div>
    </footer>
  )
}
