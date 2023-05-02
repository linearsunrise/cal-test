import "./AppLayout.scss";
import NavBar from '@/components/app/layout/NavBar';
import ContentView from '@/components/app/layout/ContentView';

NavBar

export default function AppLayout() {
  return (
    <div className="app-layout">
      <NavBar></NavBar>
      <ContentView></ContentView>
    </div>
  );
}
