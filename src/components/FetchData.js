import React, { useState } from 'react';
import ListOfUsers from './ListOfUsers'
import UserInfo from "./UserInfo";
import Loader from 'react-loader-spinner'

const FetchData = () => {
    const [ isLoading, setLoading ] = useState(true);
    const [users, setUsers] = useState([])
    const [getUser, setGetUser] = useState()
    const [UserClick, setUserClick] = useState(false)


    async function UserData(){
        try {
            const response = await fetch('https://randomuser.me/api/?results=5')
        
            const data =  await response.json()
            const Data = await data.results 
            console.log(data)
            setUsers(Data)
            setLoading(false);
            
        } catch (Error) {
            throw new Error('there is an Error')
        }
    }

    const selectId = (uuid) =>{
        setGetUser(users.filter(user => user.login.uuid === uuid)[0])
        setUserClick(true)
    }


    return (
        <div>
            
            <button onClick={UserData}> Get users </button>
            {isLoading && <Loader type="BallTriangle" color="#00BFFF" height={80} width={80} />} 
            <ListOfUsers userInfo={users} selectId={selectId} />
            {UserClick && <UserInfo userInfo={getUser} />}
            
            
        </div>
    );
};

export default FetchData;