import Link from 'next/link'; // Import Link from Next.js
import Navbar from '../../components/navbar'; // Correct relative path

export default function Programing () {
    return (
    <div>
        <div>
            <Navbar />
        </div>
    <h1>Programing section</h1>
    </div>
    );
}


// import Link from 'next/link'; // Import Link from Next.js
// import Navbar from '../components/navbar'; // Ensure the correct path to Navbar

// export default function Programming() { // Corrected function name and spelling
//   return (
//     <div>
//       <Navbar /> {/* Render the Navbar component */}
//       <h1>Programming Section</h1> {/* Corrected spelling */}
//     </div>
//   );
// }