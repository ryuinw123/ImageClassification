import React, { useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { MdOutlineImageSearch } from "react-icons/md"
import { IoClose, IoSearch } from "react-icons/io5"
import "./Dropper.css"

const Dropper = () => {
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

    const images = files.map((file) => (
        <img src={file.preview} className="image-uploaded" alt="Preview" />
    ))

    const imagesname = files.map((file) => (
        <p>{file.path}</p>
    ))

    const clearfiles = () => {
        setFiles([])
    }

    return (
        <div className="dropper-wrapper">
            <div {...getRootProps()} className="dropper-area">
                <input {...getInputProps()} />
                <div className="icon-wrapper"><MdOutlineImageSearch /></div>
                <p>Drop your image here, or<br /> click to upload</p>
            </div>
            <div className="dropper-name">
                <div className="name">{imagesname}</div>
                <div className="button-wrapper">
                    <div className="exit-button" onClick={clearfiles}><IoClose /></div>
                    <div className="search-button"><IoSearch className="search-icon" /><p>Search</p></div>
                </div>
            </div>
            <div className="predict-box">
                <div className="image-wrapper">
                    <h1>Uploaded</h1>
                    <div className="upload-image-wrapper">
                        {images}
                    </div>
                    <div className="image-name">{imagesname}</div>
                    <div className="line"></div></div>
                <div className="image-wrapper">
                    <h1>What species is this bird?</h1>
                    <div className="upload-image-wrapper">
                        {images}
                    </div>
                    <div className="image-name">{imagesname}</div>
                </div>
            </div>
        </div>
    )
}

export default Dropper