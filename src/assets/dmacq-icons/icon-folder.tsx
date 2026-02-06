import { type SVGProps } from 'react'
import { cn } from '@/lib/utils'

export function IconFolder({ className, ...props }: SVGProps<SVGSVGElement>) {
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
      <path d='M3 7h5l2 2h11v10H3z' />
    </svg>
  )
}
