import React from "react";
import { useDispatch } from "react-redux";
import { DeleteUsers } from "../store/slices/userSlice";
export const DeleteAllUser = () => {
  const dispatch=useDispatch()
  const deleteall=()=>{
    dispatch(DeleteUsers())
    console.log("dastgir")
  }
  return( 
  <button
    onClick={deleteall}

  >
    DeleteAllUser</button>)
};