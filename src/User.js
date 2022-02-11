import { Link, useParams } from 'react-router-dom';

function User() {
    const params = useParams();
    return(
    <div>
        <h2>This user is : <span style={{color: 'red', textTransform: 'capitalize'}}>{params.id}</span></h2>
        <Link to="/">Back to Home</Link>
    </div>
    );
}

export default User;