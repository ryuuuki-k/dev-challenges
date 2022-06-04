import { Paper } from '@mui/material';
import Image from 'next/image';

const Index = () => {
  return (
    <div className="my-4 mx-8 md:mx-20 md:mt-10">
      <div className="font-bold">404 NOT FOUND</div>
      <div className="mt-12 md:mt-44 md:flex">
        <div className="md:h-132 md:w-104">
          <Image
            src="/responsive/Scarecrow.png"
            width={539}
            height={414}
            layout="intrinsic"
            alt=""
            className="mx-auto"
          />
        </div>
        <div className="mt-8 font-mono text-5xl md:h-48 md:w-96">
          <h2>I have bad news for you</h2>
          <div className="md:h-28 md:w-96">
            <p className="mt-9 font-mono text-xl">
              The page you are looking for might be removed or is temporarily
              unavailable
            </p>
          </div>
          <button className="mt-16 h-16 w-52 rounded bg-black text-sm text-white">
            BACK TO HOMEPAGE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
