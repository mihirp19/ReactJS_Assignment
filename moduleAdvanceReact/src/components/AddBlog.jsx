import React, { useState, useEffect } from "react";
import { TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AddBlog = ({ allBlogs, setAllBlogs, editingBlog, setEditingBlog }) => {
  const [blog, setBlog] = useState({
    title: "",
    description: "",
  });

  const navigate = useNavigate();

  // Pre-fill form if editing
  useEffect(() => {
    if (editingBlog !== null) {
      setBlog(allBlogs[editingBlog]);
    }
  }, [editingBlog, allBlogs]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlog({ ...blog, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingBlog !== null) {
      // Update existing blog
      const updatedBlogs = allBlogs.map((item, index) =>
        index === editingBlog ? blog : item
      );
      setAllBlogs(updatedBlogs);
      setEditingBlog(null);
    } else {
      // Add new blog
      setAllBlogs([...allBlogs, blog]);
    }

    setBlog({ title: "", description: "" });
    navigate("/");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h3>{editingBlog !== null ? "Edit Blog" : "Add Blog"}</h3>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Blog Title"
          name="title"
          value={blog.title}
          onChange={handleChange}
          style={{ marginRight: "10px", marginBottom: "10px", width: "40%" }}
        />
        <TextField
          label="Description"
          name="description"
          value={blog.description}
          onChange={handleChange}
          style={{ marginRight: "10px", marginBottom: "10px", width: "40%" }}
        />
        <Button type="submit" variant="contained" color="primary">
          {editingBlog !== null ? "Update Blog" : "Save Blog"}
        </Button>
      </form>
    </div>
  );
};

export default AddBlog;
