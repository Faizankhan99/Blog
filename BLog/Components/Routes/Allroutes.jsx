import React from "react";
import { Route, Routes } from "react-router-dom";
import { ADDBLOGS } from "../ADDBLOG/ADDBLOGS";
import Login from "../Login/Login";
import Posts from "../Post/Posts";
import { Private } from "../Private/Private";
import Signup from "../Sigup/Signup";

export default function Allroutes() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Private>
              <Posts />
            </Private>
          }
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/addblog"
          element={
            <Private>
              <ADDBLOGS />
            </Private>
          }
        />
      </Routes>
    </div>
  );
}
