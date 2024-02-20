import { FaArrowCircleLeft } from 'react-icons/fa'
import Link from 'next/link'



interface Iurl {
  url: string,
}


export default function BackButton({ url }: Iurl) { // incoming
  return (
    <div>
      <Link href={url} className='flex flex-row px-2 py-2 text-center'>
        <FaArrowCircleLeft /> Back
      </Link>
    </div>
  )
    
}
