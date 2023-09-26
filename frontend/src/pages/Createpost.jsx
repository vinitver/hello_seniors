import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import Navbar from '../components/Navbar'
import { useLocation, useNavigate } from "react-router-dom";
import moment from "moment";
const Axios = axios.create({baseURL:"http://localhost:8800/server"})
const Write = () => {
  const state = useLocation().state;
  const [value, setValue] = useState(state?.title || "");
  const [title, setTitle] = useState(state?.desc || "");
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState(state?.cat || "");

  const navigate = useNavigate()

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await Axios.post("/upload", formData);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const handleClick = async (e) => {
    console.log("hh")
    e.preventDefault();
    const imgUrl = await upload();
    console.log("df")
    try {
      console.log("Gg")
      state
        ? await Axios.put(`/posts/${state.id}`, {
            title,
            desc: value,
            cat,
            img: file ? imgUrl : "",
          })
        : await Axios.post(`/posts/`, {
            title,
            desc: value,
            cat,
            img: file ? imgUrl : "",
            date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
          });
          navigate("/")
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div><Navbar></Navbar>
    <div className="add">
      <div className="content">
        <input
          type="text"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="editorContainer">
          <ReactQuill
            className="editor"
            theme="snow"
            value={value}
            onChange={setValue}
          />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status: </b> Draft
          </span>
          <span>
            <b>Visibility: </b> Public
          </span>
          <input
            style={{ display: "none" }}
            type="file"
            id="file"
            name=""
            onChange={(e) => setFile(e.target.files[0])}
          />
          <label className="file" htmlFor="file">
            Upload Image
          </label>
          <div className="buttons">
            <button>Save as a draft</button>
            <button onClick={handleClick}>Publish</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "placement"}
              name="cat"
              value="placement"
              id="placement"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="placement">Placement</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "internship"}
              name="cat"
              value="internship"
              id="internship"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="internship">Internship</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "project"}
              name="cat"
              value="project"
              id="project"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="project">Project</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "seminar"}
              name="cat"
              value="seminar"
              id="seminar"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="seminar">Seminar</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "elective"}
              name="cat"
              value="elective"
              id="elective"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="elective">Elective</label>
          </div>
          
        </div>
      </div>
    </div>
    </div>
  );
};

export default Write;
