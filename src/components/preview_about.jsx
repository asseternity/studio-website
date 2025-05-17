import { useState } from 'react';
import profile1 from '/profile1.jpg';
import profile2 from '/profile2.png';

export default function PreviewAbout() {
  const [activeProfile, setActiveProfile] = useState(0);

  const testTeam = [
    {
      name: 'Test Developer 1',
      description:
        'Test developer 1 is an integral part of the Mythaxy Bears team.',
      image: profile1,
    },
    {
      name: 'Test Developer 2',
      description:
        'Test developer 2 is an integral part of the Mythaxy Bears team.',
      image: profile2,
    },
  ];

  return (
    <div className="preview_about_content">
      <h2>About</h2>
      <div className="preview_about">
        <div className="profile_pics">
          {testTeam.map((teamMemberObject, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${teamMemberObject.image})` }}
              onClick={() => setActiveProfile(index)}
              className={activeProfile === index ? 'selected' : ''}
            ></div>
          ))}
        </div>
        <div className="profile_description">
          <h4>{testTeam[activeProfile].name}</h4>
          <p>{testTeam[activeProfile].description}</p>
        </div>
      </div>
    </div>
  );
}
