import Image from 'next/image'
import BackgroundVideo from '@/components/ui/bg_vid_carosel'
import bgvid from '../../videos/bgvidcarol.mp4'
import Link from 'next/link'

export default function Home() {

  return (
    <div className="bg-no-repeat w-fix h-fix">
      <div className="relative">
        <div className="absolute w-full h-full bg-emerald-900 opacity-20"></div>
        <div className="">
          <video src={bgvid} autoPlay muted loop className="w-fix h-fix" />
        </div>
        <div className="absolute w-full h-full top-0 grid place-content-center text-amber-50">
          <p className="text-7xl pb-3">GREEN CORNER</p>
          <p className="text-center text-3xl pb-36">Welcome to VN decor.</p>
          <div className="w-48 h-7 text-2xl text-center m-0 m-auto transition duration-150 ease-in-out hover:scale-110">
             <Link href="/products" className="bg-teal-700 opacity-80 px-4 py-2 rounded-3xl">Let's explore!</Link>
          </div>
         
        </div>
      </div>


    </div>
  )

}
