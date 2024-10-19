import Link from "next/link";
//  anchor tag can be use for navigating different pages but in this methor the code will be repeated 
// which is not the good practice as well as our request repeatedly gone to server for rendering page/loading

// export default function Homepage (){
//   return(
//     <div>
//       <h1> Home Page</h1>
//       <br/>
//       <a href="/about">About</a>
//       <br/>
//       <a href="/about/contact">Contact us</a>
//       <br/>
//       <a href="/job">Job</a>
//       <br/>
//       <a href="/job/programing">programing</a>
//     </div>
//   );
// }

// in this method we use "Link" tag which render the page on browser and quick access this method is better than
// anchor tag but the problem is that this code will be repeated in different pages which is not good practice
// import default from './components/navbar';
// export default function Homepage (){
//   return(
//     <div>
//       <div>
//       <Navbar/>
//       </div>
      
//       <h1> Home Page</h1>
//       <h1>Aboutpage</h1>
//       {/* <br/>
//       <Link href="/about">About</Link>
//       <br/>
//       <Link href="/about/contact">Contact us</Link>
//       <br/>
//       <Link href="/job">Job</Link>
//       <br/>
//       <Link href="/job/programing">programing</Link> */}
//     </div>
//   );
// }

// for navigation in different pages of the same webside the better way is that we create components folder
// and that folder we need fils i.e (navbar.tsx) and import it through this command 
// (import Navbar from './components/Navbar';) and this functionality we can invok or call through this 
// <div> <Navbar/></div> for invoking the function



// import Navbar from './components/navbar'; // Correct way to import a default export

export default function Homepage() {
  return (
    <div>
      <div>
        <h1 className="text-yellow-800 bg-slate-300 border-yellow-600 p-4 text-center">Home page</h1>
        {/* <Navbar /> Correct usage of Navbar */}
      </div>
      
      
    </div>
  );
}