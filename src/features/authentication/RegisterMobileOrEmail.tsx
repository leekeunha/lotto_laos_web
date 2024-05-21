// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
// import { Typography } from '@material-tailwind/react';
// import LoginForm from '../features/authentication/LoginForm';
// import Logo from '../ui/Logo';
// import { NavLink } from 'react-router-dom';

// export default function RegisterMobileOrEmail() {
//     return (
//         <main className="flex flex-col items-center gap-8">
//             <div className="flex justify-center mt-4">
//                 <Logo className="h-24" />
//             </div>
//             <div className="text-center mt-8">
//                 <Typography variant="h4" className="mb-2">
//                     Join membership
//                 </Typography>
//                 <Typography variant="paragraph">
//                     ID can be used after registration using mobile phone number or email.
//                 </Typography>
//             </div>
//             <div className="grid grid-cols-2 gap-3">
//                 <NavLink
//                     to={'/register-mobile'}
//                     className="flex flex-col items-center justify-center border border-gray-300 h-36 w-36 p-5"
//                 >
//                     <Typography className="mb-3" variant="small">
//                         Register with Mobile Phone Number
//                     </Typography>
//                     <FontAwesomeIcon icon={faMobileAlt} className="text-gray-500 mb-2" size="2x" />
//                 </NavLink>
//                 <NavLink
//                     to={'/join'}
//                     className="flex flex-col items-center justify-center border border-gray-300 h-36 w-36 p-5"
//                 >
//                     <Typography className="mb-3" variant="small">
//                         Register with Email Address
//                     </Typography>
//                     <FontAwesomeIcon icon={faEnvelope} className="text-gray-500 mb-2" size="2x" />
//                 </NavLink>
//             </div>
//         </main>
//     );
// }
