import React, {Fragment} from 'react';

const FileUpload = () => {



    return (
            <Fragment>
                <form >
                    <div className="mb-3 text-center">
                        <label htmlFor="formFile" className="form-label  display-5">Click to upload!</label>
                        <input className="form-control" type="file" id="formFile" />
                        <button className="btn btn-primary mt-2" type="submit" style={{"width" : "100%"}} >Upload</button>
                    </div>
                </form>
            </Fragment>
    );
};
export default FileUpload;
