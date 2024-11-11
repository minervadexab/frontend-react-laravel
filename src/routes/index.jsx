import { Routes, Route } from 'react-router-dom';

import Home from '../views/home.jsx';
import PostIndex from '../views/posts/index.jsx';
import PostCreate from '../views/posts/create.jsx';
import PostEdit from '../views/posts/edit.jsx';
import CompanyIndex from '../views/company/CompanyIndex.jsx';
import CompanyCreate from '../views/company/CompanyCreate.jsx';
// import CompanyAdmin from '../views/company/CompanyAdmin.jsx';

function RoutesIndex() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/posts" element={<PostIndex />} />
            <Route path="/posts/create" element={<PostCreate />} />
            <Route path="/posts/edit/:id" element={<PostEdit />} /> 

            <Route path="/company-index" element={<CompanyIndex />} />
            <Route path="/company-index/create" element={<CompanyCreate />} />
            {/* <Route path="/company-index/edit/:id" element={<CompanyEdit />} />  */}
        </Routes>
    );
}

export default RoutesIndex;
