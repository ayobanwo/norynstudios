import Image from 'next/image';

export default function Home() {
    return (
        <main className="flex flex-col items-center  min-h-screen p-8 bg-[#1a1a1a] h-min-[100vh]">
            <div className="bg-white  rounded-xl  p-3 w-[1000px] ">
                <div className="flex gap-3 ">
                    <Image
                        src="/images/image 9.png"
                        alt="Hero Image"
                        width={503}
                        height={350}
                        className="rounded-xl h-[300px] w-[450px] "
                    />
                    <Image
                        src="/images/Frame 131198.png"
                        alt="Hero Image"
                        width={244}
                        height={350}
                        className="rounded-xl h-[300px] w-[300px] "
                    />
                    <Image
                        src="/images/Frame 131199.png"
                        alt="Hero Image"
                        width={592}
                        height={350}
                        className="rounded-xl h-[300px] w-[500px] " 
                    />

                </div>
                <div className="flex gap-3 mt-4 w-full">

                    <Image
                        src="/images/Frame 131196.png"
                        alt="Hero Image"
                        width={244}
                        height={350}
                        className="rounded-xl h-[250px] w-[170px] basis-2/12" 
                    />
                    <Image
                        src="/images/Frame 131197.png"
                        alt="Hero Image"
                        width={244}
                        height={350}
                        className="rounded-xl h-[250px] w-[170px] basis-2/12" 
                    />
                    <div className="bg-[#1A1A1A] flex w-full items-start p-5 font-montserrat basis-8/12 rounded-xl">
                        <div className="basis-7/12">
                            <span className="text-[60px] font-montserrat">
                                Future <br/>
                                 in form
                            </span>
                        </div>
                        <div className="flex flex-col items-start gap-5 basis-5/12 mt-4">
                            <span>
                            Elevating Products and Fashion Through Smart Design
                            </span>
                            <button className='border border-white rounded-xl px-5 py-3'>
                                Start your project
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}