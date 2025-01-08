import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const BlogList = ({ allBlogs, setAllBlogs, setEditingBlog }) => {
  const navigate = useNavigate();

  // Handle delete blog
  const deleteBlog = (index) => {
    const updatedBlogs = allBlogs.filter((_, i) => i !== index);
    setAllBlogs(updatedBlogs);
  };

  // Handle edit blog
  const editBlog = (index) => {
    setEditingBlog(index);
    navigate("/add-blog");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h3>Blog List</h3>
      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate("/add-blog")}
        style={{ marginBottom: "10px" }}
      >
        Add Blog
      </Button>
      <TableContainer component={Paper}>
        <Table>
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

export default BlogList;
