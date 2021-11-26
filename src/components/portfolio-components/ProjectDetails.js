import React from 'react';
import {Bolt, Launch} from "@mui/icons-material";

const ProjectDetails = () => {
    return (
        <div>
            <div className='picture'>

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