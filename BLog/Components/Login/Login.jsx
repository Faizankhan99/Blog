import {
  Box,
  Button,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Select,
} from "@chakra-ui/react";
import React, { useState } from "react";
import style from "../../Components/Nav.module.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Logindata } from "../Store/Auth/Auth.action";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const user = {
  email: "",
  password: "",
  role: "",
};

export default function Login() {
  const [show, setShow] = useState(false);
  const [data, setData] = useState(user);
  const [submit, setSubmit] = useState();
  const token = useSelector((store) => store.auth.token);
  const dispatch = useDispatch();
  console.log(token);
  const navigate = useNavigate();

  function handle() {
    setShow(!show);
  }

  function handleform(e) {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  }

  function handlesubmit(e) {
    e.preventDefault();
    setSubmit(data);
    dispatch(Logindata(data));
  }

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);
  console.log(data);
  return (
    <Box className={style.main}>
      <Heading marginLeft="45%">LOGIN </Heading>
      <Box>
        <form action="" className={style.form} onSubmit={handlesubmit}>
          <label htmlFor="">Email </label>
          <Input
            placeholder="Basic usage"
            mt="10px"
            onChange={handleform}
            name="email"
            value={data.email}
            bgColor="white"
          />
          <label htmlFor="">Password</label>
          <InputGroup>
            <Input
              mt="10px"
              type={show ? "text" : "password"}
              placeholder="Enter password"
              name="password"
              value={data.password}
              onChange={handleform}
            />
            <InputRightElement width="4.5rem" mt="10px">
              <Button h="1.75rem" size="sm" onClick={handle}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
          <Select
            placeholder="Select option"
            mt="20px"
            onChange={handleform}
            value={data.role}
            name="role"
          >
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </Select>
          <Input type="submit" mt="20px" bgColor="white" />
        </form>
      </Box>
    </Box>
  );
}
