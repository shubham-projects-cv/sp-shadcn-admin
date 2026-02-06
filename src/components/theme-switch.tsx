import { useEffect } from 'react'
import { Check, Moon, Sun } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useTheme } from '@/context/theme-provider'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

function DmacqIcon() {
  return (
    <svg
      width='20'
      height='20'
      viewBox='0 0 36 36'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        xmlns='http://www.w3.org/2000/svg'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M18.3133 2.74121L17.1172 3.06808C17.1172 3.06808 18.7961 8.8254 19.8213 12.3838C21.2105 16.5142 21.9757 22.4573 22.0277 23.4973C18.8556 21.3578 15.0743 19.3446 12.8976 18.9212C10.721 18.4903 8.37351 19.1143 8.99753 22.0561C9.98556 26.298 15.3046 31.3347 17.3549 32.3079C19.4053 33.281 21.8048 33.0062 22.6517 31.097C23.4986 29.1952 23.3723 25.9488 23.3723 25.9488L26.4255 28.1106L27.1015 27.026C26.849 26.7511 23.2831 24.3368 23.2831 24.3368C22.7557 18.7429 22.2208 16.5588 21.0991 12.3169C19.9773 8.0751 18.3133 2.74121 18.3133 2.74121ZM10.2444 20.7708C9.96958 21.9594 11.069 23.9726 11.069 23.9726C12.8742 27.1298 15.9275 29.9528 17.5395 30.9705C19.1516 31.9883 20.6819 31.966 21.4842 30.6288C22.3311 29.3956 22.138 25.0721 22.138 25.0721C19.6716 23.3263 15.9498 21.2834 13.892 20.4959C12.8297 20.1096 10.5193 19.5822 10.2444 20.7708Z'
        fill='#0F0F0F'
      />
    </svg>
  )
}

export function ThemeSwitch() {
  const { theme, setTheme } = useTheme()
  /* Update theme-color meta tag
   * when theme is updated */
  useEffect(() => {
    let themeColor = '#fff'

    if (theme === 'dark') themeColor = '#020817'
    if (theme === 'dmacq') themeColor = '#0f172a' // Dmacq primary tone (can adjust)

    const metaThemeColor = document.querySelector("meta[name='theme-color']")
    if (metaThemeColor) metaThemeColor.setAttribute('content', themeColor)
  }, [theme])

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button
          variant='ghost'
          size='icon'
          style={
            theme == 'dmacq'
              ? { backgroundColor: 'var(--dmacq-primary-logo)' }
              : {}
          }
          className='scale-95 rounded-full'
        >
          {theme === 'dmacq' ? (
            <DmacqIcon />
          ) : (
            <>
              <Sun className='size-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90' />
              <Moon className='absolute size-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0' />
            </>
          )}

          <span className='sr-only'>Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align='end'>
        <DropdownMenuItem onClick={() => setTheme('light')}>
          Light
          <Check
            size={14}
            className={cn('ms-auto', theme !== 'light' && 'hidden')}
          />
        </DropdownMenuItem>

        <DropdownMenuItem onClick={() => setTheme('dark')}>
          Dark
          <Check
            size={14}
            className={cn('ms-auto', theme !== 'dark' && 'hidden')}
          />
        </DropdownMenuItem>

        <DropdownMenuItem onClick={() => setTheme('dmacq')}>
          Dmacq
          <Check
            size={14}
            className={cn('ms-auto', theme !== 'dmacq' && 'hidden')}
          />
        </DropdownMenuItem>

        <DropdownMenuItem onClick={() => setTheme('system')}>
          System
          <Check
            size={14}
            className={cn('ms-auto', theme !== 'system' && 'hidden')}
          />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
