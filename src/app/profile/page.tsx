import {
  DashboardPage,
  DashboardPageHeader,
  DashboardPageHeaderTitle,
  DashboardPageMain
} from '@/components/dashboard/dashboardHeadrs';

export default function Page() {
  return (
    <DashboardPage>
      <DashboardPageHeader>
        <DashboardPageHeaderTitle>Perfil</DashboardPageHeaderTitle>
      </DashboardPageHeader>
      <DashboardPageMain className="flex justify-center items-center h-[50rem]">
        <h1>Profile page</h1>
      </DashboardPageMain>
    </DashboardPage>
  );
}
