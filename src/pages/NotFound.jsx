import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <main className="">
        <Link to='/' className='' >
            <FaHome className='' />
                Take me Home
        </Link>
    </main>
  )
}

export default NotFound;