import { useMemo, useState } from 'react';
import themeSettings from './settings/theme';
import { Theme } from './settings/types';
import HeaderNavigation, { NavigationItem } from './components/generated/HeaderNavigation';
import HomePage from './components/generated/HomePage';
import Dashboard from './components/generated/Dashboard';
import Approval from './components/generated/Approval';
import FooterSection from './components/generated/FooterSection';

function App() {
  const [currentPage, setCurrentPage] = useState<NavigationItem>('Home');

  function setTheme(theme: Theme) {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  setTheme(themeSettings.theme);

  const handleNavigation = (item: NavigationItem) => {
    setCurrentPage(item);
  };

  const handleSettingsClick = () => {
    console.log('Settings clicked');
  };

  const handleAvatarClick = () => {
    console.log('Avatar clicked');
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'Home':
        return <HomePage />;
      case 'Dashboard':
        return <Dashboard />;
      case 'Approval':
        return <Approval />;
      default:
        return <HomePage />;
    }
  };

  const generatedComponent = useMemo(() => {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        {/* Header Navigation - Sticky */}
        <div className="sticky top-0 z-50">
          <HeaderNavigation
            activeItem={currentPage}
            onNavItemClick={handleNavigation}
            onSettingsClick={handleSettingsClick}
            onAvatarClick={handleAvatarClick}
          />
        </div>

        {/* Main Content */}
        {renderCurrentPage()}

        {/* Footer */}
        <FooterSection />
      </div>
    );
  }, [currentPage]);

  if (themeSettings.container === 'centered') {
    return (
      <div className="h-full w-full flex flex-col items-center justify-center">
        {generatedComponent}
      </div>
    );
  } else {
    return generatedComponent;
  }
}

export default App;
