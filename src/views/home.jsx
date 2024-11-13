import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
    return (
        <div className="p-5 mb-4 bg-dark text-light" style={{
            backgroundImage: 'url("https://i.pinimg.com/originals/5e/61/f8/5e61f8cc4a7de973fca9039e635ba002.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            color: "white",
            backgroundColor: "rgba(0, 0, 0, 0.85)",
        }}>
            <div className="container-fluid py-5 text-center">
                <h1 className="display-5 fw-bold">REACT (VITE) + LARAVEL 11</h1>
                <p className="col-md-8 fs-4 mx-auto">
                    React dan Laravel 11 - Pengembangan Aplikasi Web Modern
                </p>
                <Link to="/about" className="btn btn-primary btn-lg me-2">
                    Learn More
                </Link>
                <Link to="/contact" className="btn btn-secondary btn-lg">
                    Contact Us
                </Link>
                <br></br>
                {/* <Link to="/login" className="btn btn-danger btn-lg mg-2">
                    Login
                </Link> */}
            </div>

            <div className="row mt-5">
                <div className="col-md-4">
                    <div className="card border-0 shadow-lg bg-primary text-white">
                        <div className="card-body text-center">
                            <i className="bi bi-laptop display-1"></i>
                            <h5 className="card-title mt-3">Modern Development</h5>
                            <p className="card-text">Menggunakan teknologi terbaru untuk pengembangan aplikasi web.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card border-0 shadow-lg bg-success text-white">
                        <div className="card-body text-center">
                            <i className="bi bi-code-slash display-1"></i>
                            <h5 className="card-title mt-3">Clean Code</h5>
                            <p className="card-text">Menulis kode yang bersih dan mudah dipahami.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card border-0 shadow-lg bg-warning text-dark">
                        <div className="card-body text-center">
                            <i className="bi bi-lightbulb display-1"></i>
                            <h5 className="card-title mt-3">Innovative Solutions</h5>
                            <p className="card-text">Menciptakan solusi inovatif untuk berbagai masalah.</p>
                        </div>
                    </div>
                </div>
            </div>

            <footer className="mt-5 text-center text-white">
                <p>© 2024 React Laravel. All rights reserved.</p>
            </footer>
        </div>
    );
}
