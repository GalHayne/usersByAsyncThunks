import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsrs, addUser } from '../store';
import Button from './Button';
import Skeleton from './Skeleton';

function UserList() {

    const dispatch = useDispatch();

    const { isLoading, data, error } = useSelector((state) => {
        return state.users;
    })

    useEffect(() => {
        dispatch(fetchUsrs());
    }, [dispatch])

    const handleUserAdd = () => {
        dispatch(addUser());
    }

    console.log("isLoading:", isLoading);
    console.log("data:", data);
    console.log("error:", error);

    if (isLoading) {
        return (
            <div>
                <div className='flex flex-row justify-between m-3'>
                    <h1 className='m-2 text-xl'>Users</h1>
                </div>
                <Skeleton times={data.length} className="h-10 w-full" />
            </div>

        )
    }

    if (error) {
        return <div>
            Error fetching data...
        </div>
    }

    const renderUsers = data.map((user) => {
        return <div key={user.id} className='mb-2 border rounded'>
            <div className='flex p-2 justify-between items-center cursor-pointer'>
                {user.name}
            </div>
        </div>
    });
    return (

        <div>
            <div className='flex flex-row justify-between m-3'>
                <h1 className='m-2 text-xl'>Users</h1>
                <Button onClick={handleUserAdd}>
                    + Add User
                </Button>
            </div>
            {renderUsers}
        </div>
    )

}

export default UserList;