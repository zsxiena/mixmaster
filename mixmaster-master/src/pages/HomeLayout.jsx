// import Navbar from "../components/Navbar";
// import { Outlet } from "react-router-dom";

// const HomeLayout =() => {
//     return (
//         <>
//         <Navbar>
//             <section class='page'>
//             <Outlet/>
//             </section>
//         </Navbar>
//         </>

//     )
// }

// export default HomeLayout;

import { Outlet, useNavigation } from 'react-router-dom';
import Navbar from '../components/Navbar';

const HomeLayout = () => {
  const navigation = useNavigation();

  const isPageLoading = navigation.state === 'loading';
  const value = 'some value';
  return (
    <>
      <Navbar />
      <section className='page'>
        {isPageLoading ? (
          <div className='loading' />
        ) : (
          <Outlet context={{ value }} />
        )}
      </section>
    </>
  );
};
export default HomeLayout;
