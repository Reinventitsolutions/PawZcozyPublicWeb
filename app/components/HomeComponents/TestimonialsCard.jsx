import { Image } from '@nextui-org/image'

export default function TestimonialsCard({ image, name, desc}) {
  return (
    <div className='flex flex-col rounded-2xl min-h-[350px] min-w-[325px] overflow-hidden'>
        <div className='flex items-center justify-center w-full h-[200px]'>
            <Image src={image} className='w-full h-full object-cover' removeWrapper />
        </div>
        <div className='flex flex-col p-3 gap-3'>
        <div className='text-3xl w-full text-surface-foreground'>
            {name}
        </div>
        <div className='text-sm text-utils-outline line-clamp-3'>
            {desc}
        </div>
        </div>
    </div>
  )
}
