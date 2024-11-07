import Wrapper from "../assets/wrappers/ErrorPage";
import { Link, useRouteError } from 'react-router-dom';
import img from '../assets/roblox error page.svg'

const Error = () => {
    const error = useRouteError()
        console.log(error);
        if(error.status === 404) {
            return <Wrapper>
                <div>
                    <img src={img} alt='img'/>
                    <h3>anita max wynn</h3>
                    <Link to='/'>freon gas emitter</Link>
                </div>
            </Wrapper>
        }
    return (
        <h1>hi</h1>
    )
}

export default Error;