import { useState } from "react";
import axios from "axios";

const AudioUploader = () => {
    const [file, setFile] = useState(null);
    const [transcription, setTranscription] = useState('');

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    }

    const handleUpload = async () => {
        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await axios.post('http://localhost:8080/api/transcribe', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log("Transcription response:", response.data);
            setTranscription(response.data);
        } catch (error) {
            console.error("Error uploading file:", error);
        }
    }

    return (
        <div className="container">
            <h1>Audio to Text Transcriber</h1>
            <div className="file-input">
                <input type="file" accept="audio/*" onChange={handleFileChange}/>
            </div>
            <button className="upload-button" onClick={handleUpload}>Upload and Transcribe</button>
            <div className="transcription-result">
                <h2>Transcription result</h2>
                <p class={"text-black"}>{transcription}</p>
            </div>
        </div>
    )
}

export default AudioUploader