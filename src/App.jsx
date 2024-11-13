import { Link } from "react-router-dom";
import Routes from "./routes";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <>
      <style>
        {`
          .nav-link:hover {
            color: #ffd700 !important; /* Warna emas saat hover */
            text-decoration: underline !important; /* Garis bawah saat hover */
          }
        `}
      </style>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
        <div className="container">
          <Link to="/" className="navbar-brand fw-bold" style={{ fontSize: '1.5rem' }}>
            MyApp
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link" style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#ffd700' }}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/posts" className="nav-link" style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#ffd700' }}>
                  Posts
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/company-index" className="nav-link" style={{ fontSize: '1.25rem', fontWeight: 'bold' , color: '#ffd700' }}>
                  Company Index
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Routes />
    </>
  );
}