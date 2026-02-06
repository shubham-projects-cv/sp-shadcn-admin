import { type SVGProps } from 'react'
import { cn } from '@/lib/utils'

export function IconWorkflow({ className, ...props }: SVGProps<SVGSVGElement>) {
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
      <rect x='3' y='3' width='6' height='6' />
      <rect x='15' y='3' width='6' height='6' />
      <rect x='9' y='15' width='6' height='6' />

      <line x1='6' y1='9' x2='12' y2='15' />
      <line x1='18' y1='9' x2='12' y2='15' />
    </svg>
  )
}
