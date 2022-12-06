import { Box, Button, Heading, Table } from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import style from "../AllUser/user.module.css";

function fetch() {
  return axios.get("http://localhost:8080/user");
}
export default function Alluser() {
  const [users, setUsers] = useState();
  const token = useSelector((store) => store.auth.token);
  //   const verify = jwt_decode(token);

  useEffect(() => {
    handleuser();
  }, [users]);

  function handleuser() {
    fetch().then((res) => {
      //   console.log(res.data);
      setUsers(res.data);
    });
  }

  function handledelete(id) {
    return axios
      .delete(`http://localhost:8080/user/${id}`, {
        headers: {
          "x-authorization": token,
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  //   console.log(users);
  return (
    <Box>
      <Heading marginLeft="45%">ALL USERS </Heading>
      <Table className={style} w="80%" m="auto">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Delete</th>
          </tr>
        </thead>
        {users &&
          users.map((elem) => (
            <tbody key={elem._id}>
              <tr>
                <td>{elem._id}</td>
                <td>{elem.name}</td>
                <td>{elem.email}</td>
                <Button
                  m="auto"
                  mt="20px"
                  ml="20px"
                  onClick={() => handledelete(elem._id)}
                >
                  Delete
                </Button>
              </tr>
            </tbody>
          ))}
      </Table>
    </Box>
  );
}
