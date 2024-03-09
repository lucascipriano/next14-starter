import { ToggleTheme } from '@/components/toggle-theme';

export default function Home() {
  return (
    <div className="flex flex-row min-h-screen justify-center items-center">
      <ToggleTheme />
    </div>
  );
}
