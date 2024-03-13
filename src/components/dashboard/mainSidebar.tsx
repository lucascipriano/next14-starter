'use client';

import {
  CubeIcon,
  DotsVerticalIcon,
  GearIcon,
  PersonIcon
} from '@radix-ui/react-icons';
import { useState } from 'react';
import { HomeIcon } from 'lucide-react';
import { usePathname } from 'next/navigation';
import {
  DashboardSidebar,
  DashboardSidebarHeader,
  DashboardSidebarMain,
  DashboardSidebarNav,
  DashboardSidebarNavMain,
  DashboardSidebarNavLink,
  DashboardSidebarNavHeader,
  DashboardSidebarNavHeaderTitle,
  DashboardSidebarFooter
} from './dashboardSide';

export default function MainSidebar() {
  const [openDashboard, setOpenDashboard] = useState(true);
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };
  return (
    <>
      <DashboardSidebar
        className={` ${openDashboard ? 'w-64' : 'w-[6rem]'} duration-300  relative`}
      >
        <DashboardSidebarHeader>
          <div className=" inline-flex items-center gap-2 ">
            <div className="bg-primary h-8 w-8 flex items-center justify-center rounded-md ">
              <CubeIcon className="h-5 w-5 text-white dark:text-black " />
            </div>
            <p
              className={`font-semibold mr-auto ${openDashboard ? '' : 'hidden'}`}
            >
              toolBox
            </p>
            <DotsVerticalIcon
              className="text-black bg-white text-8xl rounded-full absolute -right-0  cursor-pointer"
              onClick={() => setOpenDashboard(!openDashboard)}
            />
          </div>
        </DashboardSidebarHeader>
        <DashboardSidebarMain className="flex flex-col flex-grow">
          <DashboardSidebarNav>
            <DashboardSidebarNavMain>
              <DashboardSidebarNavLink href="/" active={isActive('/')}>
                <HomeIcon className="w-4 h-4 mr-3 ml-3" />
                {openDashboard ? 'Home' : ''}
              </DashboardSidebarNavLink>
              <DashboardSidebarNavLink
                href="/settings"
                active={isActive('/settings')}
              >
                <GearIcon className="w-4 h-4 mr-3 ml-3" />
                {openDashboard ? 'Configurações' : ''}
              </DashboardSidebarNavLink>
              <DashboardSidebarNavLink
                href="/profile"
                active={isActive('/profile')}
              >
                <PersonIcon className="w-4 h-4 mr-3 ml-3" />
                {openDashboard ? 'Profile' : ''}
              </DashboardSidebarNavLink>
            </DashboardSidebarNavMain>
          </DashboardSidebarNav>

          <DashboardSidebarNav className="mt-auto">
            <DashboardSidebarNavHeader>
              <DashboardSidebarNavHeaderTitle>
                {openDashboard ? 'Links extras' : 'extras'}
              </DashboardSidebarNavHeaderTitle>
            </DashboardSidebarNavHeader>
            <DashboardSidebarNavMain>
              <DashboardSidebarNavLink href="/">
                {openDashboard ? 'Precisa de ajuda?' : 'Ajuda?'}
              </DashboardSidebarNavLink>
              <DashboardSidebarNavLink href="/">Site</DashboardSidebarNavLink>
            </DashboardSidebarNavMain>
          </DashboardSidebarNav>
        </DashboardSidebarMain>
        <DashboardSidebarFooter>
          <h1>footer</h1>
        </DashboardSidebarFooter>
      </DashboardSidebar>
    </>
  );
}
