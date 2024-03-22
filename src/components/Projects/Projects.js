import React from 'react'
import './Projects.css'

function Projects() {
  return (
    <div className='projectContainer' id='proj'>
      <div className='projHeading'><div>Projects</div></div>
      <div className='allProjects'>
        <div className='projCard'>
            <div className='projImg'><img src='https://blog.templatetoaster.com/wp-content/uploads/2019/09/best-Blog-Sites.jpg' alt='not available'/></div>
            <div className='projDetail'>
                <div className='projCount'>01</div>
                <div className='githubDetail'>
                    <div className='githubButton'>
                        <a href=''>GitHub</a>
                    </div>
                    <div className='detailProj'>
                    A dynamic blogging website allowing users to create, edit, and delete blogs.
                    </div>
                    <div className='techStacks'>
                            <span>React</span>
                            <span>MongoDB</span>
                            <span>NodeJS</span>
                        </div>
                </div>
            </div>
        </div>
        <div className='projCard'>
            <div className='projImg'><img src='https://img.freepik.com/free-vector/house-rent-abstract-concept-illustration-booking-house-online-best-rental-property-real-estate-service-accommodation-marketplace-rental-listing-monthly-rent_335657-1123.jpg'/></div>
            <div className='projDetail'>
                <div className='projCount'>02</div>
                <div className='githubDetail'>
                    <div className='githubButton'>
                        <a href=''>GitHub</a>
                    </div>
                    <div className='detailProj'>
                    Home rental service utilizing relational database for efficient data management and retrieval.
                    </div>
                    <div className='techStacks'>
                            <span>React</span>
                            <span>MySQL</span>
                            <span>NodeJS</span>
                        </div>
                </div>
            </div>
        </div>
        <div className='projCard'>
            <div className='projImg'><img src='https://media.designrush.com/articles/244453/conversions/how-to-make-a-graphic-design-portfolio-details.jpg'/></div>
            <div className='projDetail'>
                <div className='projCount'>03</div>
                <div className='githubDetail'>
                    <div className='githubButton'>
                        <a href=''>GitHub</a>
                    </div>
                    <div className='detailProj'>
                    Personal portfolio website showcasing my skills, projects, and experiences.
                    </div>
                    <div className='techStacks'>
                            <span>ReactJS</span>
                        </div>
                </div>
            </div>
        </div>
        <div className='projCard'>
            <div className='projImg'><img src='https://images.timesproperty.com/blog/3689/Upcoming_Government_Infrastructure.jpg'/></div>
            <div className='projDetail'>
                <div className='projCount'>04</div>
                <div className='githubDetail'>
                    <div className='githubButton'>
                        <a href=''>GitHub</a>
                    </div>
                    <div className='detailProj'>
                    Government project portal facilitating citizen feedback for informed decision-making and reporting.
                    </div>
                    <div className='techStacks'>
                            <span>React</span>
                            <span>PostgresSQL</span>
                            <span>TypeORM</span>
                            <span>Python</span>
                        </div>
                </div>
            </div>
        </div>
        <div className='projCard'>
            <div className='projImg'><img src='https://i.pinimg.com/736x/04/34/09/043409660072cb8e95d1a6d0da123905.jpg'/></div>
            <div className='projDetail'>
                <div className='projCount'>05</div>
                <div className='githubDetail'>
                    <div className='githubButton'>
                        <a href=''>GitHub</a>
                    </div>
                    <div className='detailProj'>
                    Predicts cricket match runs based on player and ground data.
                    </div>
                    <div className='techStacks'>
                            <span>ReactJS</span>
                            <span>Python</span>
                        </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Projects