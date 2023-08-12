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
    <div className="flex">
      <div>
        <SideBar navItems={navItems} />
      </div>
      <div className="max-h-screen mx-10 mt-5 overflow-auto">
        <p className="text-2xl text-black">Hello</p>
      </div>
    </div>
  );
}

export default App;
