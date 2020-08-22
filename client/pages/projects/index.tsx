import { Fragment } from 'react';
import Navbar from '../../components/Navbar'

const Projects = () => {
    return (
        <Fragment>
            <Navbar page={'projects'} />
            <div className="container">Projects</div>
        </Fragment>
    )
}

export default Projects;