import React from 'react'
import './Projects.css'

// Projects data in JSON format
const projectsData = [
    {
        id: 1,
        image: 'https://blog.templatetoaster.com/wp-content/uploads/2019/09/best-Blog-Sites.jpg',
        githubUrl: 'https://github.com/Anand930singh/CS-301-Project-1',
        description: 'A dynamic blogging website allowing users to create, edit, and delete blogs.',
        techStacks: ['React', 'MongoDB', 'NodeJS']
    },
    {
        id: 2,
        image: 'https://img.freepik.com/free-vector/house-rent-abstract-concept-illustration-booking-house-online-best-rental-property-real-estate-service-accommodation-marketplace-rental-listing-monthly-rent_335657-1123.jpg',
        githubUrl: 'https://github.com/Anand930singh/DBMS_Rental_Service',
        description: 'Home rental service utilizing relational database for efficient data management and retrieval.',
        techStacks: ['React', 'MySQL', 'NodeJS']
    },
    {
        id: 3,
        image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80',
        githubUrl: 'https://github.com/Anand930singh/Portfolio_website',
        description: 'Personal portfolio website showcasing my skills, projects, and experiences.',
        techStacks: ['ReactJS']
    },
    {
        id: 4,
        image: 'https://images.timesproperty.com/blog/3689/Upcoming_Government_Infrastructure.jpg',
        githubUrl: 'https://github.com/Anand930singh/HackOverflow_attention_mavericks',
        description: 'Government project portal facilitating citizen feedback for informed decision-making and reporting.',
        techStacks: ['React', 'PostgresSQL', 'TypeORM', 'Python']
    },
    {
        id: 5,
        image: 'https://i.pinimg.com/736x/04/34/09/043409660072cb8e95d1a6d0da123905.jpg',
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
                  e.target.src = 'https://via.placeholder.com/400x300?text=Image+Not+Available';
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