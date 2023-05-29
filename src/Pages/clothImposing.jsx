import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import '../styles/imposing.css'
export default function ClothImposing() {
    const [loading, setLoading] = React.useState(true)
    const fileInputRef = React.useRef(null);
    const [fileName, setFileName] = React.useState('');

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setFileName(file.name);
    };

    const handleBrowseClick = () => {
        fileInputRef.current.click();
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const files = formData.getAll('files');
        // Do something with the files (e.g., upload them)
    };

    return (
        <>
            <Navbar />
            <div className="uploadSection">
                <h4 className='file-upload'>Upload Your Image to Impose Selected Cloth on you</h4>

                <div className="container">
                    <div className="form-group" x-data="{ fileName: '' }">
                        <div className="input-group">
                            <span className="input-group-text px-3 text-muted"><i className="fas fa-image fa-lg"></i></span>
                            <form className='upload-form' action="/uploadfiles/" encType="multipart/form-data" method="post" onSubmit={handleSubmit}>
                                <div className="input-group">
                                    <input type="file" ref={fileInputRef} onChange={handleFileChange} name="files" className="d-none" />
                                    <input type="text" className="form-control form-control-lg" placeholder="Upload Image" value={fileName} readOnly />
                                    <button className="browse btn btn-primary px-4" type="button" onClick={handleBrowseClick}>
                                        <i className="fas fa-image"></i> Browse
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />

        </>
    )
}