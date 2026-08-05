import { Link } from 'react-router-dom';

export const NotFound = () => (
  <section className="not-found">
    <div className="container">
      <h1>404</h1>
      <p>The page you're looking for doesn't exist.</p>
      <Link to="/" className="btn btn-primary">
        Back to home
      </Link>
    </div>
  </section>
);
