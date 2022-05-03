import React, { useContext, useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { MdOutlineImageSearch } from "react-icons/md"
import { IoClose, IoSearch } from "react-icons/io5"
import axios from 'axios';
import "./Dropper.css"
import { ThemeContext } from '../context';

const Dropper = () => {

    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode

    const [predictData, setPredictData] = useState()
    const [files, setFiles] = useState([])
    const { getRootProps, getInputProps } = useDropzone({
        accept: "image/*",
        onDrop: (acceptedFiles) => {
            setFiles(
                acceptedFiles.map((file) => Object.assign(file, {
                    preview: URL.createObjectURL(file)
                }))
            )
        }
    })


    function GenerateImage() {
        return (<div style={{background : darkMode && "#424242"}} className="predict-box">
            <h1>What species is this bird?</h1>
            {predictData.map((value, key) => {
                return (
                    <div className = "predict-wrapper" style={{background : darkMode && "#424242" , color : darkMode && "#F5F5F5"}}>
                        <div className="upload-image-wrapper">
                            <img src={value.image} className="image-uploaded" />
                        </div>
                        <p>{value.name}</p>
                    </div>)
            })}
        </div>)
    }

    const convertFileToBase64 = file => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = () => resolve({
            base64: reader.result
        });
        reader.onerror = reject;
    });


    const images = files.map((file) => (
        <img src={file.preview} className="image-uploaded" alt="Preview" />
    ))

    const imagesname = files.map((file) => (
        <p>{file.path}</p>
    ))

    const clearfiles = () => {
        setFiles([])
        setPredictData()
    }

    const predict = () => {
        if (files) {
            convertFileToBase64(files[0]).then(image => {
                console.log({ image: image.base64 })
                axios.post(`http://ryuinw123.ddns.net:8000/predict/`, {
                    image: image.base64
                })
                    .then(res => {
                        console.log(res.data)
                        setPredictData(res.data)
                    })
            })
        }
    }

    return (
        <div className="dropper-wrapper">
            <div {...getRootProps()} className="dropper-area" style={{background : darkMode && "#616161"}}>
                <input {...getInputProps()} />
                <div className="icon-wrapper" style = {{color : darkMode && "#F5F5F5"}}><MdOutlineImageSearch /></div>
                <p>Drop your image here, or<br /> click to upload</p>
            </div>
            <div className="dropper-name" style={{background : darkMode && "#424242"}}>
                <div className="name">{files.length > 0 ? imagesname : <p >No file Chosen</p>}</div>
                <div className="button-wrapper">
                    <div className="exit-button" onClick={clearfiles} style = {{background : darkMode && "#9E9E9E" , color : darkMode && "#424242"}}><IoClose /></div>
                    <div className="search-button" onClick={predict}  style = {{background : darkMode && "#9E9E9E" , color : darkMode && "#424242"}}><IoSearch className="search-icon" /><p>Search</p></div>
                </div>
            </div>
            <div className="upload-box" style={{background : darkMode && "#424242" , color : darkMode && "#F5F5F5"}}>
                <div className="image-wrapper">
                    <h1>Uploaded</h1>
                    <div className="upload-image-wrapper">
                        {images}
                    </div>
                    <div className="image-name">{imagesname}</div>
                </div>
            </div>
            {predictData && <GenerateImage />}
            <div className="footer"></div>
        </div>
    )
}

export default Dropper