import Image from "next/image";
import Link from "next/link";
export default function Nav() {
  return (
    <header className='font-sans w-[1452px]'>
    {/* Top bar */}
    <div className="bg-[#F5F5F5] flex justify-between items-center px-6 py-2 md:text-[11px] sm:text-[9px] text-[8px] font-medium text-gray-500">
      <Image src={"/lo1.png"} alt={''} width={24} height={24}/>
      <div>
</div>
      <div className="flex md:gap-4 sm:gap-3 gap-2 font-bold">
        <Link href="/productDetail" className="text-[#111111]">Find Link Store</Link>
        <p className="text-[#111111] font-bold">|</p>
        <Link href="/contactUs" className="text-[#111111]">Help</Link>
        <p className="text-[#111111] font-bold">|</p>
        <Link href="/joinUs" className="text-[#111111]">Join Us</Link>
        <p className="text-[#111111] font-bold">|</p>
        <Link href="/signUp" className="text-[#111111]">Sign In</Link>
      </div>
    </div>
  </header>
  );
}