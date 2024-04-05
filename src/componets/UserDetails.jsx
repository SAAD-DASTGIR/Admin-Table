import React from "react";
import { DeleteAllUser } from './DeleteAllUsers';
import styled from "styled-components";
import { fakeUserData } from "../api";
import {useDispatch} from 'react-redux'
import { addUsers } from "../store/slices/userSlice"; 
import DisplayUser from "./DisplayUsers"


const UserDetails = () => {
  const dispatch= useDispatch()
  const addNewUser = (name ) => {
    dispatch(addUsers(name))
  }
  return (
    <Wrapper>
      <div className="content">
        <div className="admin-table">
          <div className="admin-subtitle">List of User Details</div>
          <button 
          onClick={() => addNewUser(fakeUserData())}
          className="btn add-btn">Add New Users</button>
        </div>
        < DisplayUser/>
        <ul>
          {/* <li>Hi</li>
          <li>Hii</li> */}
        </ul>
        <hr />
        <DeleteAllUser />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin: 1rem 3.2rem;

  .content ul {
    list-style-type: none !important;
    display: flex;
    flex-direction: column;
  }

  h3 {
    margin: 0;
  }

  .admin-table {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 4rem 0;
  }

  .admin-subtitle {
    font-size: 3.2rem;
  }

  .delete-btn {
    background-color: transparent;
    border: none;
  }

  .delete-icon {
    font-size: 2.6rem;
    color: #f12711;
    filter: drop-shadow(0.2rem 0.2rem 0.5rem rgb(255 0 0 / 0.2));
    cursor: pointer;
  }
  @media screen and (max-width: 998px) {
    .admin-subtitle {
      margin-bottom: 1.6rem;
    }
  }
`;

export default UserDetails;