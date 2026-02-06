import { type SVGProps } from 'react'
import { cn } from '@/lib/utils'

export function IconDatabase({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox='0 0 24 24'
      width='24'
      height='24'
      className={cn('[&>path]:stroke-current', className)}
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      {...props}
    >
      <ellipse cx='12' cy='5' rx='9' ry='3' />
      <path d='M3 5v7c0 1.7 4 3 9 3s9-1.3 9-3V5' />
      <path d='M3 12v7c0 1.7 4 3 9 3s9-1.3 9-3v-7' />
    </svg>
  )
}
