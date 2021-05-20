import React, {Fragment, useState} from 'react';
import axios from 'axios';
import Message from "../Message/Message";

const FileUpload = () => {

    const [File, setFile] = useState('');
    const [fileName, setFileName] = useState('Choose File');
    const [uploadedFile, setUploadedFile] = useState({});
    const [message, setMessage] = useState('');

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
            setMessage('Upload Successfully')
       } catch (err) {
            if(err.response.status === 500){
                setMessage("Problem with server");
            }
            else{
                setMessage(err.response.data.msg);
            }
       }
    }

    return (
            <Fragment>
                {message ? <Message msg={message}/> :
                null
                }
                <form onSubmit={onSubmit}>
                    <div className="mb-3 text-center">
                        <input className="form-control" type="file" id="formFile" onChange={onChange} />
                        <button className="btn btn-primary mt-2" type="submit" style={{"width" : "100%"}} >Upload</button>
                    </div>
                </form>
                {uploadedFile ? (<div className="row mt-5">
                        <div className="col-md-6 m-auto">
                            <h3 className="text-center">{ uploadedFile.fileName }</h3>
                            <img style={{"width" : '100%'}} src={uploadedFile.filePath} />
                        </div>
                </div>) :
                null }
            </Fragment>
    );
};
export default FileUpload;
