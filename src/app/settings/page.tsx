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
        <DashboardPageHeaderTitle>Configurações</DashboardPageHeaderTitle>
      </DashboardPageHeader>
      <DashboardPageMain className="flex justify-center items-center h-[50rem]">
        <h1>Configurações</h1>
      </DashboardPageMain>
    </DashboardPage>
  );
}
