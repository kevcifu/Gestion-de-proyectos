import type { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = () => {
    return (
        <div className='bg-red-500'>
            <p>Pagina de index</p>
            <Link href={'/admin/users'}>
                <a>Pagina de admin usuarios</a>
            </Link>
        </div>
    );
};

export default Home;
