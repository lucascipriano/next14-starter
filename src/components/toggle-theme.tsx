'use client';
import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon } from '@radix-ui/react-icons';

export function ToggleTheme() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  return (
    <div
      onClick={toggleTheme}
      className=" border w-8 h-8 flex justify-center items-center"
    >
      {theme === 'light' ? (
        <MoonIcon className=" " />
      ) : (
        <SunIcon className="" />
      )}
    </div>
  );
}
