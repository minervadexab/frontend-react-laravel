import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function CompanyEdit() {
    const { id } = useParams(); // Ambil id dari URL
    const navigate = useNavigate();
    const [company, setCompany] = useState({
        name: '',
        email: '',
        address: '',
        phone: ''
    });

    // Fungsi untuk fetch data perusahaan berdasarkan id
    const fetchCompany = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/api/company-index/${id}`);
            setCompany(response.data);
        } catch (error) {
            console.error('Error fetching company:', error);
        }
    };

    // Fungsi untuk handle submit form edit
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.put(`http://localhost:8000/api/company-index/${id}`, company);
            console.log('Company updated:', response.data);
            navigate('/company-index'); // Redirect ke halaman index setelah update
        } catch (error) {
            console.error('Error updating company:', error);
        }
    };

    useEffect(() => {
        fetchCompany(); // Ambil data perusahaan saat komponen pertama kali dimuat
    }, [id]);

    return (
        <div className="container">
            <h2>Edit Company</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input
                        type="text"
                        className="form-control"
                        value={company.name}
                        onChange={(e) => setCompany({ ...company, name: e.target.value })}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        className="form-control"
                        value={company.email}
                        onChange={(e) => setCompany({ ...company, email: e.target.value })}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Address</label>
                    <input
                        type="text"
                        className="form-control"
                        value={company.address}
                        onChange={(e) => setCompany({ ...company, address: e.target.value })}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Phone</label>
                    <input
                        type="text"
                        className="form-control"
                        value={company.phone}
                        onChange={(e) => setCompany({ ...company, phone: e.target.value })}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary mt-3">
                    Update
                </button>
            </form>
        </div>
    );
}

export default CompanyEdit;
