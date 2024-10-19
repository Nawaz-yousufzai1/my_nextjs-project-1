import Link from 'next/link'; // Import Link from Next.js
// export default function Navbar(){
//     return(
//         <div>
//       <Link href="/">Home</Link>
//       <br/>
//       <Link href="/about">About</Link>
//       <br/>
//       <Link href="/contact">Contact us</Link>
//       <br/>
//       <Link href="/job">Job</Link>
//       <br/>
//       <Link href="/programing">programing</Link>
//       <br/>
//       <Link href="/service">Services</Link>
//     </div>
//     );
// }




// for proper navigation
export default function Navbar(){
  return(
      <div>

    {/* <Link href="/">Home</Link>
    <br/>
    <Link href="/about">About</Link>
    <br/>
    <Link href="/contact">Contact us</Link>
    <br/>
    <Link href="/job">Job</Link>
    <br/>
    <Link href="/programing">programing</Link>
    <br/>
    <Link href="/service">Services</Link> */}

<nav className="bg-gray-800 p-2">
    <div className="container mx-auto flex justify-between items-center">
    
      {/* <Link href="/" className="text-white text-2xl font-bold">MyWebsite</Link> */}
      <h1 className='text-red-600 text-2xl font-bold'> MyWebsite</h1>

<div>
        <ul className="flex space-x-2">
          <li><Link href="/" className="text-gray-300 hover:text-white">Home</Link></li>
          <li><Link href="/about" className="text-gray-300 hover:text-white">About</Link></li>
          <li><Link href="/service" className="text-gray-300 hover:text-white">Services</Link></li>
          <li><Link href="/about/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
          <li><Link href="/job" className="text-gray-300 hover:text-white">jobs</Link></li>
         
        </ul>
      </div>

      <div>
        <Link href="/signup" className="bg-blue-500 text-white px-1 py-1 rounded hover:bg-blue-600">Sign Up</Link>
      </div>
    </div>
  </nav>


  </div>
  );
}