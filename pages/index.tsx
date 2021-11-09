import type { NextPage } from 'next';
import Link from 'next/link';
import Head from 'next/head';

const Home: NextPage = () => {
    return (
        <div className="bg-red-500">
            <Head>
                <title>Home | Gestion de proyectos</title>
            </Head>
            <p>Pagina de index</p>
            <Link href={'/admin/users'}>
                <a>Pagina de admin usuarios</a>
            </Link>
            <div>
                <i className="fas fa-home" />
            </div>
        </div>
    );
};

export default Home;
