import React, { useState } from 'react';

// Dummy data for technologies
const technologies = [
  { name: 'Prometheus', category: 'Devops' },
  { name: 'Loki', category: 'Devops' },
  { name: 'Bitbucket', category: 'Devops' },
  { name: 'Gitlab', category: 'Devops' },
  { name: 'Kotlin', category: 'Mobile' },
  { name: 'Android', category: 'Mobile' },
  { name: 'Java', category: 'Backend' },
  { name: 'Azure', category: 'Infrastructure' },
  { name: 'GCP', category: 'Infrastructure' },
  { name: 'DigitalOcean', category: 'Infrastructure' },
  { name: 'AWS', category: 'Infrastructure' },
  { name: 'Kubernetes', category: 'Infrastructure' },
  { name: 'ELK', category: 'Devops' },
  { name: 'Grafana', category: 'Devops' },
  { name: 'Terraform', category: 'Devops' },
  { name: 'iOS', category: 'Mobile' },
  { name: 'Swift', category: 'Mobile' },
  { name: 'Flutter', category: 'Mobile' },
  { name: 'Next.JS', category: 'Frontend' },
  { name: 'React.JS', category: 'Frontend' },
  { name: 'Javascript', category: 'Frontend' },
  { name: 'Balsamic', category: 'UX/UI' },
  { name: 'Invision', category: 'UX/UI' },
  { name: 'Figma', category: 'UX/UI' },
  { name: 'Docker', category: 'Devops' },
  { name: 'PostgreSQL', category: 'Backend' },
  { name: 'Python', category: 'Backend' },
  { name: 'Node.JS', category: 'Backend' },
  { name: 'PHP', category: 'Backend' },
  { name: 'GO', category: 'Backend' },
  { name: 'Ant Design', category: 'UX/UI' },
  { name: 'Gatsby.JS', category: 'Frontend' },
  { name: 'Vue.JS', category: 'Frontend' },
  { name: 'Principle', category: 'UX/UI' },
  { name: 'Sketch', category: 'UX/UI' },
  { name: 'Adobe suite', category: 'UX/UI' },
  { name: 'YouTrack', category: 'Testing' },
  { name: 'Appium', category: 'Testing' },
  { name: 'Cypress', category: 'Testing' },
  { name: 'Jmeter', category: 'Testing' },
  { name: 'MongoDB', category: 'Backend' },
  { name: 'Cassandra', category: 'Backend' },
  { name: 'Sass', category: 'Frontend' },
  { name: 'Material UI', category: 'Frontend' },
  { name: 'Zeplin', category: 'UX/UI' },
  { name: 'Illustrator', category: 'UX/UI' },
  { name: 'Lottie', category: 'UX/UI' },
  { name: 'Photoshop', category: 'UX/UI' },
];

const categories = ['Frontend', 'Backend', 'Devops', 'Testing', 'UX/UI', 'Infrastructure', 'Mobile'];

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredTechnologies = selectedCategory === 'All'
    ? technologies
    : technologies.filter(tech => tech.category === selectedCategory);

  return (
    <div className="w-full bg-[#F4F7FF] py-24">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <h2 className="text-[48px] font-semibold leading-7 text-blue-600 mb-9">Инструменты</h2>
        <div className="flex space-x-4 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 border rounded-full ${
                selectedCategory === category ? 'bg-blue-600 text-white' : 'bg-white text-gray-800'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-4 gap-4">
          {filteredTechnologies.map(tech => (
            <div key={tech.name} className="flex items-center justify-center bg-white p-4 rounded-lg shadow-md">
              <p className="text-center font-semibold text-gray-800">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
