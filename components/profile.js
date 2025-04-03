// import Link from 'next/link';

// const posts = [
//   { id: '1', title: 'Post One' },
//   { id: '2', title: 'Post Two' },
//   { id: '3', title: 'Post Three' },
// ];


// export async function generateMetadata({params}) {
//   const { id } =  params;
  
//   return {
//     title:`Profile ${id}`
//   };
// }

// export default function Blog() {
//   return (
//     <div>
//       <h1 className='text-red-500 text-center font-bold text-2xl pb-10'>Blog Posts</h1>
//       <ul className='space-y-4 p-5'>
//         {posts.map((post) => (
//           <li key={post.id}>
//             <Link href={`/profile/${post.id}`} className='hover:underline'>{post.title}</Link>
//           </li>
//         ))}
//       </ul>

//     </div>
//   );
// }
