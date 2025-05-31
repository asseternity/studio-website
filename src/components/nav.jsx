import { useEffect, useState } from 'react';

export default function Nav({ callback1, callback2, callback3, tab }) {
  const [activeTab, setActiveTab] = useState(tab);

  useEffect(() => {
    setActiveTab(tab);
  }, [tab]);

  return (
    <div className="nav_inner">
      <button
        onClick={callback1}
        className={activeTab === 'projects' ? 'active' : ''}
      >
        PROJECTS
      </button>
      <button
        onClick={callback2}
        className={activeTab === 'news' ? 'active' : ''}
      >
        NEWS
      </button>
      <button
        onClick={callback3}
        className={activeTab === 'about' ? 'active' : ''}
      >
        ABOUT
      </button>
    </div>
  );
}
