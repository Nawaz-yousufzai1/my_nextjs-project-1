// import Link from 'next/link'; // Import Link from Next.js
// import Navbar from '../components/navbar';
export default async function About () {
    await new Promise(resolve => setTimeout(resolve,5000));

    return(
        <div >
            <h1 className="text-red-800 bg-green-500" > About Page</h1>
            <div>
            {/* <Navbar /> */}
            </div>
            {/* <h1>About Page</h1> */}
         {/* <h1>About page</h1> */}
            {/* <h1>Job</h1>  */}
        </div>
    );
} 
