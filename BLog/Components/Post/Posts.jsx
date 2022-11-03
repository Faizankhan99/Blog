import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Post from "./Post";
import { Box, Heading } from "@chakra-ui/react";
function blogdata() {
  return axios.get("http://127.0.0.1:8080/blog");
}

const Posts = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    handle();
  }, []);

  function handle() {
    setLoading(true);
    blogdata().then((res) => {
      console.log(res.data);
      setLoading(false);
      setData(res.data);
    });
  }

  return (
    <Box bgImage="https://images.ctfassets.net/vfkpgemp7ek3/6Y4B2Xm2jEipEwnoQMX2d9/8e0305672e442875ebc723fd3b307213/Featured-blog-post-image.jpg">
      <Heading ml="40%" color="black">
        {" "}
        ALL BLOGS
      </Heading>
      {loading && <p>It's loading</p>}
      {!loading &&
        data.map((elem, index) => (
          <>
            {console.log(elem)}
            <Post key={index} index={index} {...elem} />
          </>
        ))}
    </Box>
  );
};

export default Posts;
