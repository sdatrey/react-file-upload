import React, {Fragment, useState} from 'react';
import axios from 'axios';

const FileUpload = () => {

    const [File, setFile] = useState('');
    const [fileName, setFileName] = useState('');
    const [uploadedFile, setUploadedFile] = useState('')

    const onChange = e => {
        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name);
    }
    const onSubmit = async e =>{
       e.preventDefault();
       const formData = new FormData();
       formData.append('file', File);
       try {
           const res = await axios.post('/upload', formData, {
               headers: {
                   'Content-Type': 'multipart/form-data'
               }
           });
           const { fileName, filePath } = res.data;
           setUploadedFile({fileName, filePath});
       } catch (err) {
            if(err.response.status === 500){
                console.log("Problem with server")
            }
            else{
                console.log(err.response.data);
            }
       }
    }

    return (
            <Fragment>
                <form onSubmit={onSubmit}>
                    <div className="mb-3 text-center">
                        <input className="form-control" type="file" id="formFile" onChange={onChange} />
                        <button className="btn btn-primary mt-2" type="submit" style={{"width" : "100%"}} >Upload</button>
                    </div>
                </form>
            </Fragment>
    );
};
export default FileUpload;
