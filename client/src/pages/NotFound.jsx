import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import { Link } from 'react-router-dom';

export default function NotFoundound() {
  return (
    <div className='d-flex fex-column justify-content-center align-items-center mt-5'>
        
        <h1><WarningAmberIcon sx={{ color: "red"}}/>404</h1>
        <p className='lead'>Sorry, this page does not exist</p>
        <Link to='/' className='btn btn-primary'>Go Back</Link>
        
    </div>
  )
}