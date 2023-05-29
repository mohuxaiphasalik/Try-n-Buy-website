import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import '../styles/imposing.css';
import { useLocation } from 'react-router-dom';

export default function ClothImposing() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const img = searchParams.get("img");
    const img1 = `http://localhost:4000/images/${img}`;

    const [loading, setLoading] = React.useState(true);
    const fileInputRef = React.useRef(null);
    const [fileName, setFileName] = React.useState('');
    const [imageArray, setImageArray] = React.useState([]);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setFileName('human');
        setImageArray([...imageArray, file]);
    };

    const handleBrowseClick = () => {
        fileInputRef.current.click();
        console.log(imageArray);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        // Add the image file stored in 'img1' variable to the form data
        if (img1) {
            const imgFile = new File([img1], 'cloth', { type: 'image/png' });
            formData.append('files', imgFile);
        }


        const files = formData.getAll('files');
        console.log(files);
    };

    return (
        <>
            <Navbar />
            <div className="uploadSection">
                <h4 className='file-upload'>Upload Your Image to Impose Selected Cloth on you</h4>

                <div className="container">
                    <div className="form-group">
                        <div className="input-group">
                            <span className="input-group-text px-3 text-muted"><i className="fas fa-image fa-lg"></i></span>
                            <form className='upload-form' action="/uploadfiles/" encType="multipart/form-data" method="post" onSubmit={handleSubmit}>
                                <div className="input-group">
                                    <input type="file" ref={fileInputRef} onChange={handleFileChange} name="files" className="d-none" />
                                    <input type="text" className="form-control form-control-lg" placeholder="Upload Image" value={fileName} readOnly />
                                    <button className="browse btn btn-primary px-4" type="button" onClick={handleBrowseClick}>
                                        <i className="fas fa-image"></i> Browse
                                    </button>
                                    <button className="submit btn btn-primary" type="submit">
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="image-preview">
                {imageArray.map((image, index) => (
                    <img key={index} src={URL.createObjectURL(image)} alt={`Preview ${index + 1}`} />
                ))}
                {img && (
                    <img src={img1} alt="Preview from URL" />
                )}
            </div>

            <Footer />
        </>
    );
}
