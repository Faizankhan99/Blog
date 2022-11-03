import { Box, Button } from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import style from "../../Components/Nav.module.css";
import { Logout } from "../Store/Auth/Auth.action";

export default function Navbar() {
  const token = useSelector((store) => store.auth.token);
  const dispatch = useDispatch();
  const nav = [
    { id: 1, title: "ALLBLOG", to: "/" },
    { id: 2, title: "SIGNUP", to: "signup" },
    { id: 3, title: "LOGIN", to: "login" },
    { id: 4, title: "ADD BLOG", to: "addblog" },
  ];

  const handlelogout = () => {
    dispatch(Logout());
  };
  return (
    <Box className={style.nav_main}>
      <Box className={style.b}>
        {nav.map((elem) => (
          <NavLink
            key={elem.id}
            to={elem.to}
            className={({ isActive }) =>
              !isActive ? style.active : style.default
            }
          >
            {elem.title}
          </NavLink>
        ))}
        <Button onClick={handlelogout} disabled={!token}>
          LOGOUT
        </Button>
      </Box>
    </Box>
  );
}
