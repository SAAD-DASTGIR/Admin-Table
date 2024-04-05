import { useDispatch, useSelector } from "react-redux";
import styled  from "styled-components";
// import  UseDispatch  from "react-redux";
import { removeUsers } from "../store/slices/userSlice";
    const DisplayUsers = ()=>{
    const data = useSelector((state) => {
    return state.user;
    })
    const dispatch = useDispatch()
    const deleteUser=(id)=>{
        dispatch(removeUsers(id))
    }

    console.log(data);
    return(
        <Wrapper>
            {
               data && data.map((user, id) => {
                    return <li key={id}>
                      {user}
                      <button 
                      onClick={()=>deleteUser(id)}
                      >
                        remove
                      </button>
                    </li>
                  })
            }
        </Wrapper>
    )
}

const Wrapper = styled.section`
  li{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    border-bottom: 1px solid #eee;
    
    &:first-child{
      border-top: 1px solid #eee;
    }
  }
  
  .btn-delete{
    background-color: transparent;
    border: 0;
    color: #fff;
}
`
export default DisplayUsers;