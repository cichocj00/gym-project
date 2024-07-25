import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Theme, Themes, useThemeStore } from '@/store/theme';
import { Moon, Sun } from 'lucide-react';

function ThemeToggle() {
  const setTheme = useThemeStore((state) => state.setTheme);

  const handleUpdateTheme = (theme: Theme) => () => {
    setTheme(theme);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon" variant="outline">
          <Sun className="size-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute size-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={handleUpdateTheme(Themes.LIGHT)}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleUpdateTheme(Themes.DARK)}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleUpdateTheme(Themes.SYSTEM)}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default ThemeToggle;
