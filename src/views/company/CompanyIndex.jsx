import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link dari react-router-dom
// import './CompanyIndex.css'; // Import custom CSS untuk animasi

function CompanyIndex() {
    const [companies, setCompanies] = useState([]);

    // Fetch perusahaan dari API
    const fetchCompanies = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/company-index');
            setCompanies(response.data);
        } catch (error) {
            console.error('Error fetching companies:', error);
        }
    };

    // Fungsi untuk menghapus perusahaan
    const handleDelete = async (id) => {
        const confirmDelete = window.confirm('Are you sure you want to delete this company?');
        if (confirmDelete) {
            try {
                const response = await axios.delete(`http://localhost:8000/api/company-index/${id}`);
                console.log('Company deleted:', response.data);
                
                // Update state setelah perusahaan dihapus
                setCompanies(companies.filter(company => company.id !== id));
            } catch (error) {
                console.error('Error deleting company:', error);
            }
        }
    };

    useEffect(() => {
        fetchCompanies();
    }, []);

    return (
        <div className="container my-5">
            <h2 className="text-center mb-4">Company List</h2>
            {/* Tombol untuk menambah data perusahaan */}
            <div className="d-flex justify-content-end mb-3">
                <Link to="/company-index/create" className="btn btn-success">
                    Add New Company
                </Link>
            </div>
            <table className="table table-striped table-hover">
                <thead className="table-dark">
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {companies.map((company) => (
                        <tr key={company.id} className="company-row">
                            <td>{company.name}</td>
                            <td>{company.email}</td>
                            <td>{company.address}</td>
                            <td>{company.phone}</td>
                            <td>
                                {/* Tombol Edit */}
                                <Link to={`/company-index/edit/${company.id}`} className="btn btn-primary btn-sm me-2">
                                    Edit
                                </Link>
                                {/* Tombol Delete */}
                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => handleDelete(company.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default CompanyIndex;
