// 'use client';

// import { ListItem, ListItemButton, ListItemIcon, ListItemText, Divider } from '@mui/material';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import { sidebarMenuItems } from './menuItems';

// export default function NavLinks() {
//   const pathname = usePathname();

//   return (
//     <>
//       {/* 각 타이틀 */}
//       {sidebarMenuItems.map((menuItem) => (
//         <div key={menuItem.ListMenuTitle.title}>
//           <ListItem
//             sx={{
//               color: '#E8E3D2',
//               fontSize: '12px',
//               gap: '10px',
//             }}
//           >
//             <menuItem.ListMenuTitle.icon />
//             {menuItem.ListMenuTitle.title}
//           </ListItem>

//           {/* 타이틀안에 목록 */}
//           {menuItem.ListMenuItems.links.map((link) => {
//             const LinkIcon = link.icon;
//             return (
//               <Link key={link.name} href={link.href} passHref style={{ textDecoration: 'none' }}>
//                 <ListItemButton
//                   sx={{
//                     ':hover': { color: '#1dc4e9' },
//                     color: pathname === link.href ? '#1dc4e9' : '#9FB3D0',
//                   }}
//                 >
//                   <ListItemIcon>
//                     <LinkIcon
//                       sx={{
//                         color: pathname === link.href ? '#1dc4e9' : '#9FB3D0',
//                       }}
//                     />
//                   </ListItemIcon>
//                   <ListItemText primary={link.name} />
//                 </ListItemButton>
//               </Link>
//             );
//           })}
//           <Divider />
//         </div>
//       ))}
//     </>
//   );
// }
