import React from 'react'
import './Projects.css'
import BloggingImg from '../../assets/projects/blogging.png'
import RentalImg from '../../assets/projects/rental.png'
import PortfolioImg from '../../assets/projects/portfolio.png'
import GovernmentImg from '../../assets/projects/government.png'
import CricketImg from '../../assets/projects/cricket.png'
import PlaceholderImg from '../../assets/projects/placeholder.png'

// Projects data in JSON format
const projectsData = [
    {
        id: 1,
        image: BloggingImg,
        githubUrl: 'https://github.com/Anand930singh/CS-301-Project-1',
        description: 'A dynamic blogging website allowing users to create, edit, and delete blogs.',
        techStacks: ['React', 'MongoDB', 'NodeJS']
    },
    {
        id: 2,
        image: RentalImg,
        githubUrl: 'https://github.com/Anand930singh/DBMS_Rental_Service',
        description: 'Home rental service utilizing relational database for efficient data management and retrieval.',
        techStacks: ['React', 'MySQL', 'NodeJS']
    },
    {
        id: 3,
        image: PortfolioImg,
        githubUrl: 'https://github.com/Anand930singh/Portfolio_website',
        description: 'Personal portfolio website showcasing my skills, projects, and experiences.',
        techStacks: ['ReactJS']
    },
    {
        id: 4,
        image: GovernmentImg,
        githubUrl: 'https://github.com/Anand930singh/HackOverflow_attention_mavericks',
        description: 'Government project portal facilitating citizen feedback for informed decision-making and reporting.',
        techStacks: ['React', 'PostgresSQL', 'TypeORM', 'Python']
    },
    {
        id: 5,
        image: CricketImg,
        githubUrl: 'https://github.com/Anand930singh/Cricket-Code-Hack',
        description: 'Predicts cricket match runs based on player and ground data.',
        techStacks: ['ReactJS', 'Python']
    }
];

function Projects() {
  return (
    <div className='projectContainer' id='proj'>
      <div className='projHeading'><div>Projects</div></div>
      <div className='allProjects'>
        {projectsData.map((project) => (
          <div key={project.id} className='projCard'>
            <div className='projImg'>
              <img 
                src={project.image} 
                alt='not available'
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = PlaceholderImg;
                }}
              />
            </div>
            <div className='projDetail'>
              <div className='projCount'>{String(project.id).padStart(2, '0')}</div>
                <div className='githubDetail'>
                    <div className='githubButton'>
                  <a href={project.githubUrl}>GitHub</a>
                    </div>
                    <div className='detailProj'>
                  {project.description}
                    </div>
                    <div className='techStacks'>
                  {project.techStacks.map((tech, index) => (
                    <span key={index}>{tech}</span>
                  ))}
                        </div>
                </div>
            </div>
        </div>
        ))}
      </div>
    </div>
  )
}

export default Projects