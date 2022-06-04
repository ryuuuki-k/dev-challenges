import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className="m-10">
      <button className="rounded p-2 transition hover:bg-emerald-600 hover:text-white">
        <Link href="/reponsive-web-developer/404">404</Link>
      </button>
    </div>
  );
};

export default Home;
