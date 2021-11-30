import React from 'react';
import {Bolt, Launch} from "@mui/icons-material";
import Picture from '../assets/note.jpg'
import '../style/ProjectDetails.css';

const ProjectDetails = () => {
    return (
        <div className='projectDetails'>
            <div className='picture'>
                <img src={Picture} alt='image_for_projects'/>
            </div>
            <div className='description'>
                <h2>Project Name</h2>
                <p>
                    This project is built with...........
                    dydyjjfk bhcuihf;oh;v
                </p>

                <div className='projectLink'>
                    <button>Github repl <span><Bolt/></span></button>
                    <button>View project <Launch/> </button>
                </div>
            </div>


        </div>
    );
};

export default ProjectDetails;