import Image from 'next/image';

const Index = () => {
  return (
    <>
      <div className="mx-4 mt-28 md:mx-10 xl:mx-60">
        <div className="md:flex">
          <div className="h-12 w-72">
            <h1 className="font-serif text-3xl font-bold">The creative crew</h1>
          </div>
          <div className="md:ml-52 md:w-[439px]">
            <h3 className="text-2xl font-bold">Who we are</h3>
            <p className="text-xl">
              We are team of creatively diverse. driven. innovative individuals
              working in various locations from the world.
            </p>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-2  justify-items-center gap-1 md:grid-cols-3 md:justify-items-stretch">
          <div>
            <div className="flex">
              <div className="relative h-[200px] w-[139px] md:h-[335px] md:w-[238px] ">
                <Image
                  src="/responsive/my-team-page-master/photo1.png"
                  layout="fill"
                  objectFit="contain"
                  alt=""
                />
              </div>
              <p className="font-thin" style={{ writingMode: 'vertical-rl' }}>
                Product owner
              </p>
            </div>
            <p className="font-bold">Bill Mahoney</p>
          </div>

          <div>
            <div className="mt-14 flex md:mt-20">
              <div className=" relative h-[200px] w-[139px] md:h-[335px] md:w-[238px]">
                <Image
                  src="/responsive/my-team-page-master/photo2.png"
                  layout="fill"
                  objectFit="contain"
                  alt=""
                />
              </div>
              <p className="font-thin" style={{ writingMode: 'vertical-rl' }}>
                Art director
              </p>
            </div>
            <p className=" font-bold">Saba Cabrera</p>
          </div>

          <div>
            <div className="flex">
              <div className="relative flex h-[200px] w-[139px] md:h-[335px] md:w-[238px]">
                <Image
                  src="/responsive/my-team-page-master/photo3.png"
                  layout="fill"
                  objectFit="contain"
                  alt=""
                />
              </div>
              <p className="font-thin" style={{ writingMode: 'vertical-rl' }}>
                Tech Lead
              </p>
            </div>
            <p className="font-bold">Shae Le</p>
          </div>

          <div className="">
            <div className="mt-12 flex">
              <div className="relative h-[200px] w-[139px] md:h-[335px] md:w-[238px]">
                <Image
                  src="/responsive/my-team-page-master/photo4.png"
                  layout="fill"
                  objectFit="contain"
                  alt=""
                />
              </div>
              <p className="font-thin" style={{ writingMode: 'vertical-rl' }}>
                UX Designer
              </p>
            </div>
            <p className="font-bold">Skylah Lu</p>
          </div>

          <div>
            <div className="flex md:mt-20">
              <div className="relative h-[200px] w-[139px] md:h-[335px] md:w-[238px]">
                <Image
                  src="/responsive/my-team-page-master/photo5.png"
                  layout="fill"
                  objectFit="contain"
                  alt=""
                />
              </div>
              <p className="font-thin" style={{ writingMode: 'vertical-rl' }}>
                Developer
              </p>
            </div>
            <p className="font-bold">Griff Richards</p>
          </div>

          <div>
            <div className="mt-12 flex">
              <div className="relative h-[200px] w-[139px] md:h-[335px] md:w-[238px]">
                <Image
                  src="/responsive/my-team-page-master/photo6.png"
                  layout="fill"
                  objectFit="contain"
                  alt=""
                />
              </div>
              <p className="font-thin" style={{ writingMode: 'vertical-rl' }}>
                Developer
              </p>
            </div>
            <p className="font-bold">Stan John</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
