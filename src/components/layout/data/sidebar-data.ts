import {
  Construction,
  LayoutDashboard,
  Monitor,
  Bug,
  ListTodo,
  FileX,
  HelpCircle,
  Lock,
  Bell,
  Package,
  Palette,
  ServerOff,
  Settings,
  Wrench,
  UserCog,
  UserX,
  Users,
  MessagesSquare,
  ShieldCheck,
  AudioWaveform,
  Command,
  GalleryVerticalEnd,
} from 'lucide-react'
import { ClerkLogo } from '@/assets/clerk-logo'
// Dmacq Custom Icons
import { IconDashboard } from '@/assets/dmacq-icons/icon-dashboard'
import { IconDatabase } from '@/assets/dmacq-icons/icon-database'
import { IconFolder } from '@/assets/dmacq-icons/icon-folder'
import { IconReports } from '@/assets/dmacq-icons/icon-reports'
import { IconSearch } from '@/assets/dmacq-icons/icon-search'
import { IconSettings } from '@/assets/dmacq-icons/icon-settings'
import { IconStar } from '@/assets/dmacq-icons/icon-star'
import { IconWorkflow } from '@/assets/dmacq-icons/icon-workflow'
import { type SidebarData, type NavGroup, type NavItem } from '../types'

/* ---------------------------------------------
 Base Sidebar (All Themes)
--------------------------------------------- */

const baseSidebarData: SidebarData = {
  user: {
    name: 'satnaing',
    email: 'satnaingdev@gmail.com',
    avatar: '/avatars/shadcn.jpg',
  },

  teams: [
    {
      name: 'Shadcn Admin',
      logo: Command,
      plan: 'Vite + ShadcnUI',
    },
    {
      name: 'Acme Inc',
      logo: GalleryVerticalEnd,
      plan: 'Enterprise',
    },
    {
      name: 'Acme Corp.',
      logo: AudioWaveform,
      plan: 'Startup',
    },
  ],

  navGroups: [
    {
      title: 'General',
      items: [
        {
          title: 'Dashboard',
          url: '/',
          icon: LayoutDashboard,
        },
        {
          title: 'Tasks',
          url: '/tasks',
          icon: ListTodo,
        },
        {
          title: 'Apps',
          url: '/apps',
          icon: Package,
        },
        {
          title: 'Chats',
          url: '/chats',
          badge: '3',
          icon: MessagesSquare,
        },
        {
          title: 'Users',
          url: '/users',
          icon: Users,
        },
        {
          title: 'Secured by Clerk',
          icon: ClerkLogo,
          items: [
            {
              title: 'Sign In',
              url: '/clerk/sign-in',
            },
            {
              title: 'Sign Up',
              url: '/clerk/sign-up',
            },
            {
              title: 'User Management',
              url: '/clerk/user-management',
            },
          ],
        },
      ],
    },

    {
      title: 'Pages',
      items: [
        {
          title: 'Auth',
          icon: ShieldCheck,
          items: [
            { title: 'Sign In', url: '/sign-in' },
            { title: 'Sign In (2 Col)', url: '/sign-in-2' },
            { title: 'Sign Up', url: '/sign-up' },
            { title: 'Forgot Password', url: '/forgot-password' },
            { title: 'OTP', url: '/otp' },
          ],
        },

        {
          title: 'Errors',
          icon: Bug,
          items: [
            {
              title: 'Unauthorized',
              url: '/errors/unauthorized',
              icon: Lock,
            },
            {
              title: 'Forbidden',
              url: '/errors/forbidden',
              icon: UserX,
            },
            {
              title: 'Not Found',
              url: '/errors/not-found',
              icon: FileX,
            },
            {
              title: 'Internal Server Error',
              url: '/errors/internal-server-error',
              icon: ServerOff,
            },
            {
              title: 'Maintenance Error',
              url: '/errors/maintenance-error',
              icon: Construction,
            },
          ],
        },
      ],
    },

    {
      title: 'Other',
      items: [
        {
          title: 'Settings',
          icon: Settings,
          items: [
            {
              title: 'Profile',
              url: '/settings',
              icon: UserCog,
            },
            {
              title: 'Account',
              url: '/settings/account',
              icon: Wrench,
            },
            {
              title: 'Appearance',
              url: '/settings/appearance',
              icon: Palette,
            },
            {
              title: 'Notifications',
              url: '/settings/notifications',
              icon: Bell,
            },
            {
              title: 'Display',
              url: '/settings/display',
              icon: Monitor,
            },
          ],
        },
        {
          title: 'Help Center',
          url: '/help-center',
          icon: HelpCircle,
        },
      ],
    },
  ],
}

/* ---------------------------------------------
 Dmacq Reference Menus
--------------------------------------------- */

const dmacqReference: NavItem[] = [
  {
    title: 'Dashboard',
    url: '/',
    icon: IconDashboard,
  },
  {
    title: 'Files & Folders',
    url: '/files',
    icon: IconFolder,
  },
  {
    title: 'Favourite',
    url: '/favourite',
    icon: IconStar,
  },
  {
    title: 'Advance Search',
    url: '/advance-search',
    icon: IconSearch,
  },
  {
    title: 'Metadata',
    url: '/metadata',
    icon: IconDatabase,
  },
  {
    title: 'Workflow',
    url: '/workflow',
    icon: IconWorkflow,
  },
  {
    title: 'Reports',
    url: '/reports',
    icon: IconReports,
  },
  {
    title: 'Settings',
    url: '/settings',
    icon: IconSettings,
  },
]

/* ---------------------------------------------
 Helpers
--------------------------------------------- */

function applyDmacqToGroups(groups: NavGroup[]): NavGroup[] {
  if (!groups.length) return groups

  return groups.map((group, index) => {
    // Only modify first/main group
    if (index !== 0) return group

    const itemsMap = new Map<string, NavItem>()

    // Existing items
    group.items.forEach((item) => {
      itemsMap.set(item.title, { ...item })
    })

    // Apply dmacq overrides/additions
    dmacqReference.forEach((dmacqItem) => {
      const existing = itemsMap.get(dmacqItem.title)

      if (existing) {
        // Override icon only
        itemsMap.set(dmacqItem.title, {
          ...existing,
          icon: dmacqItem.icon ?? existing.icon,
        })
      } else {
        // Add missing item
        itemsMap.set(dmacqItem.title, dmacqItem)
      }
    })

    return {
      ...group,
      items: Array.from(itemsMap.values()),
    }
  })
}

/* ---------------------------------------------
 Final Export
--------------------------------------------- */

export function buildSidebarData(isDmacq: boolean): SidebarData {
  const base: SidebarData = {
    ...baseSidebarData,
    navGroups: baseSidebarData.navGroups.map((group) => ({
      ...group,
      items: [...group.items],
    })),
  }

  if (!isDmacq) {
    return base
  }

  return {
    ...base,
    navGroups: applyDmacqToGroups(base.navGroups),
  }
}

// Backward compatibility (for files like command-menu.tsx)
export const sidebarData: SidebarData = baseSidebarData
