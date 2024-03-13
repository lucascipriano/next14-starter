import {
  DashboardPage,
  DashboardPageHeader,
  DashboardPageHeaderTitle,
  DashboardPageMain
} from '../../../dashboard/page';

export default function Page() {
  return (
    <>
      <DashboardPage>
        <DashboardPageHeader>
          <DashboardPageHeaderTitle>Home</DashboardPageHeaderTitle>
        </DashboardPageHeader>
        <DashboardPageMain className="flex justify-center items-center h-[50rem]">
          <h1>Home dashboard</h1>
        </DashboardPageMain>
      </DashboardPage>
    </>
  );
}
