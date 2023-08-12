import { SideBar } from './components';
import { AiOutlineDashboard, AiOutlineContainer, AiOutlineTeam, AiOutlineMail, AiOutlineContacts } from 'react-icons/ai';

const navItems = [
  { href: '/admin', icon: AiOutlineDashboard, label: 'dashboard' },
  { href: '/posts', icon: AiOutlineContainer, label: 'dashboard' },
  { href: '/users', icon: AiOutlineTeam, label: 'dashboard' },
  { href: '/comments', icon: AiOutlineMail, label: 'dashboard' },
  { href: '/contacts', icon: AiOutlineContacts, label: 'contacts' },
];

function App() {
  return (
    <div className="">
      <SideBar navItems={navItems} />
    </div>
  );
}

export default App;
