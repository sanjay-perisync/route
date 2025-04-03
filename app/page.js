import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div className='flex justify-between px-10 border-b border-gray-500 py-4'>
        <h1>Home Page</h1>

        <nav>
          <ul className='flex gap-4'>
            <li className='hover:underline'>
              <Link href={`/profile`}>Blog Details</Link>
            </li>
            <li>
              <Link href={`/Files`} className='hover:underline'>Files</Link>
            </li>

          </ul>
        </nav>

      </div>
    </>
  );
}
