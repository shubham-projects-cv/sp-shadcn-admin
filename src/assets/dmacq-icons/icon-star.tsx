import { type SVGProps } from 'react'
import { cn } from '@/lib/utils'

export function IconStar({ className, ...props }: SVGProps<SVGSVGElement>) {
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
      <polygon points='12 2 15 9 22 9 17 14 19 21 12 17 5 21 7 14 2 9 9 9' />
    </svg>
  )
}
