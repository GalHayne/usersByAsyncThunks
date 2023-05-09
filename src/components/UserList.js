import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsrs } from '../store';
import Skeleton from './Skeleton';

function UserList() {

    const dispatch = useDispatch();

    const { isLoading, data, error } = useSelector((state) => {
        return state.users;
    })

    useEffect(() => {
        dispatch(fetchUsrs());
    }, [dispatch])

    if (isLoading) {
        return <Skeleton times={6} className="h-10 w-full" />
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

    return <div>{renderUsers}</div>

}

export default UserList;