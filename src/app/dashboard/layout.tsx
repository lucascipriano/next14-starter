import { PropsWithChildren } from 'react';
import MainSidebar from './_components/mainSidebar';

export default async function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <div className="flex gap-4 ">
        <MainSidebar />
        <main className="w-screen ">{children}</main>
      </div>
    </>
  );
}
