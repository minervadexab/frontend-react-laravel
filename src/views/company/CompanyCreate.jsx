import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CompanyCreate() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');

    // Inisialisasi useNavigate
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8000/api/company-index', {
                name,
                email,
                address,
                phone
            });
            console.log('Company created:', response.data);

            // Reset form setelah pengiriman berhasil
            setName('');
            setEmail('');
            setAddress('');
            setPhone('');

            // Arahkan pengguna ke halaman index setelah submit berhasil
            navigate('/company-index'); // Ganti '/companies' dengan path yang sesuai dengan halaman index Anda
        } catch (error) {
            console.error('Error:', error.response ? error.response.data : error.message);
        }
    };

    return (
        <div className="container">
            <h2>Create Company</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input
                        type="text"
                        className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Address</label>
                    <input
                        type="text"
                        className="form-control"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Phone</label>
                    <input
                        type="text"
                        className="form-control"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary mt-3">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default CompanyCreate;
