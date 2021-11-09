import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

const index: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Admin Usuarios | Gestion de proyectos</title>
            </Head>
            <div>Pagina de admin usuarios</div>
            <Link href={'/'}>
                <a>Ir al home</a>
            </Link>
        </div>
    );
};

export default index;