import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import style from "../../Components/Nav.module.css";

const Post = ({ title, body, imgUrl, author }) => {
  const [count, setCount] = useState(1);
  return (
    <Box w="90%" m="auto" mt="70px" className={style.blog_main}>
      <Text fontSize="30px" as="b" ml="40%" mt="50%">
        {title}
      </Text>
      <Box display="flex" gap="25px">
        <Box w="30%">
          <Image className="image" src={imgUrl} alt="post" />
        </Box>

        <Box>
          <Text size="xl" w="70%">
            {body}
          </Text>
          <Text as="b" size="m" fontSize="20px" m="auto">
            Written by: {author}
          </Text>

          <Box display="flex" mt="20px">
            <Button mr="20px" onClick={() => setCount(count + 1)}>
              👍
            </Button>
            <Text fontSize="30px">{count}</Text>
            <Button
              ml="20px"
              disabled={count == 1}
              onClick={() => setCount(count - 1)}
            >
              👎
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Post;
