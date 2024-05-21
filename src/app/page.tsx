import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="p-10">
      <ul className="space-y-2">
        <li><Link href={'/'}>Home</Link></li>
        <li className="text-blue-500 hover:underline font-semibold"><Link href={'/dashboard'}>Dashboard</Link></li>
      </ul>
    </div>
  );
}
