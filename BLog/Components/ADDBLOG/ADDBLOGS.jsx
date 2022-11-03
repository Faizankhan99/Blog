import {
  Box,
  Button,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";
import style from "../../Components/Nav.module.css";
import axios from "axios";

const option = {
  weekdaty: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

const blogdata = {
  title: "",
  body: "",
  author: "",
  date: new Date().toLocaleDateString("en-US", option),
};

export function ADDBLOGS() {
  const [blog, setBlog] = useState(blogdata);
  const [submit, setSubmit] = useState();

  function handleChange(e) {
    const { name, value } = e.target;
    setBlog({ ...blog, [name]: value });
  }

  function AddBlog({ title, body, author, date }) {
    return axios.post("http://localhost:8080/blog/", {
      title: title,
      body: body,
      author: author,
      date: date,
    });
  }

  function handlesubmit(e) {
    e.preventDefault();
    setSubmit(blog);
    AddBlog(blog)
      .then((res) => {
        console.log(res.data.message);
        alert(res.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
    setBlog("");
  }

  console.log(blog);
  return (
    <Box className={style.main}>
      <Heading as="h1" size="lg" ml="45%">
        Add Your Blog
      </Heading>
      <Box>
        <form action="" className={style.form} onSubmit={handlesubmit}>
          <label htmlFor="">Title </label>
          <Input
            placeholder="title"
            name="title"
            mt="10px"
            value={blog.title}
            backgroundColor="white"
            onChange={handleChange}
          />

          <Textarea
            placeholder="Enter your Blog Here"
            mt="10px"
            name="body"
            value={blog.body}
            backgroundColor="white"
            onChange={handleChange}
          ></Textarea>

          <Input
            placeholder="Author"
            value={blog.author}
            name="author"
            mt="10px"
            backgroundColor="white"
            onChange={handleChange}
          />

          <Input type="submit" mt="10px" bgColor="white" />
        </form>
      </Box>
    </Box>
  );
}
