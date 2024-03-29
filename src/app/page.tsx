import {
  DashboardPage,
  DashboardPageHeader,
  DashboardPageHeaderTitle,
  DashboardPageMain
} from '@/components/dashboard/dashboardHeadrs';

export default function Home() {
  return (
    <DashboardPage>
      <DashboardPageHeader>
        <DashboardPageHeaderTitle>Home</DashboardPageHeaderTitle>
      </DashboardPageHeader>
      <DashboardPageMain className="flex justify-center items-center h-[50rem]">
        <h1>Home dashboard</h1>
      </DashboardPageMain>
    </DashboardPage>
  );
}
