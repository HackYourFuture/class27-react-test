import React, {useState} from 'react';
import Alert from '@material-ui/lab/Alert';
import User from './User';
import SearchButton from './SearchButton';

const LoadUsers = () => {
    const [friend, setFriend] = useState({});
    const [users, setUsers] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState({show:false, text:''});

    const getUsers = () => {
        setLoading(true);
        setError({show:false});
        fetch('https://www.randomuser.me/api?results=5')
        .then(response => {
            return response.json();
        })
        .then(data =>{
            setFriend(data.results[0]);
            setUsers(data.results);
            setLoading(false);
        })
        .catch(err => {
            setError({show:true, text: err.message});
            setLoading(false);
        });
    };

    return ( 
        <div>
            <SearchButton getUsers={getUsers}/>
            <div>
                    {isLoading && <p>loading</p>}
            </div>
            {error.show && <Alert severity="error">{error.text}</Alert>}
            {users.map((user, index)=><p key={index}>{user.name.title} {user.name.first} {user.name.last} </p>)}
            {friend.name && <User friend={friend} />}    
        </div>
     );
}
 
export default LoadUsers;