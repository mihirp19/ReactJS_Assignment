import React, { useState } from "react";
import {
  Button,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

export const BlogCRUD = () => {
  const [blog, setBlog] = useState({
    title: "",
    description: "",
  });
  const [allBlogs, setAllBlogs] = useState([]);
  const [id, setId] = useState("");

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlog({
      ...blog,
      [name]: value,
    });
  };

  // Save a new blog
  const saveBlog = (e) => {
    e.preventDefault();
    setAllBlogs([...allBlogs, blog]);
    setBlog({
      title: "",
      description: "",
    });
  };

  // Edit an existing blog
  const editBlog = (index) => {
    setId(index);
    const selectedBlog = allBlogs[index];
    setBlog({
      title: selectedBlog.title,
      description: selectedBlog.description,
    });
  };

  // Update the blog
  const updateBlog = (e) => {
    e.preventDefault();
    const updatedBlogs = allBlogs.map((item, index) => {
      if (index === id) {
        return { ...item, ...blog };
      }
      return item;
    });
    setAllBlogs(updatedBlogs);
    setBlog({
      title: "",
      description: "",
    });
    setId("");
  };

  // Delete a blog
  const deleteBlog = (index) => {
    const filteredBlogs = allBlogs.filter((_, i) => i !== index);
    setAllBlogs(filteredBlogs);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h3>Blog Manager</h3>
      <form onSubmit={id !== "" ? updateBlog : saveBlog}>
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
        <Button
          type="submit"
          variant="contained"
          color="primary"
          style={{ marginBottom: "10px" }}
        >
          {id !== "" ? "Update Blog" : "Save Blog"}
        </Button>
      </form>

      <TableContainer component={Paper}>
        <Table border={4}>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allBlogs.map((blog, index) => (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{blog.title}</TableCell>
                <TableCell>{blog.description}</TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => editBlog(index)}
                    style={{ marginRight: "5px" }}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={() => deleteBlog(index)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default BlogCRUD;