export default function Header() {
  return (
    <section className="page-panel" aria-labelledby="read-title">
      <p className="eyebrow">Read page</p>
      <h1 id="read-title">My Header in another component</h1>
      <p className="support-copy">This page is rendered by the reusable Header component through client-side routing.</p>
    </section>
  )
}
