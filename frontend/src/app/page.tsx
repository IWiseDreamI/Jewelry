import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="h-[100vh] w-[100%]">
        <Image 
          className="w-[100%] h-[100%]" 
          src="/images/ring.jpg" alt="slider image" 
          width={1200} height={600} 
        />
          
      </div>
    </>
  );
}
