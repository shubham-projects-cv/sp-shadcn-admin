import { cn } from '@/lib/utils'

export function IconThemeDmacq({ className }: { className?: string }) {
  return (
    <svg
      viewBox='0 0 79.86 51.14'
      xmlns='http://www.w3.org/2000/svg'
      className={cn('h-full w-full', className)}
    >
      {/* Base */}
      <rect
        x='0.5'
        y='0.5'
        width='78.8'
        height='50'
        rx='3.5'
        fill='var(--dmacq-neutral-50)'
        stroke='var(--dmacq-neutral-200)'
      />

      {/* Sidebar */}
      <rect
        x='0.5'
        y='0.5'
        width='22'
        height='50'
        rx='3'
        fill='var(--dmacq-neutral-100)'
      />

      {/* Avatar */}
      <circle cx='6.7' cy='7' r='3.5' fill='#fff' />

      {/* Lines */}
      <rect x='4' y='14' width='14' height='2' rx='1' fill='#cbd5e2' />
      <rect x='4' y='19' width='11' height='2' rx='1' fill='#cbd5e2' />

      {/* Chart */}
      <rect x='32' y='20' width='3' height='8' fill='#4d7fff' />
      <rect x='37' y='16' width='3' height='12' fill='#305eff' />
      <rect x='42' y='12' width='3' height='16' fill='#2243b6' />

      {/* Content */}
      <rect x='29' y='30' width='42' height='16' rx='2' fill='#fff' />
    </svg>
  )
}
