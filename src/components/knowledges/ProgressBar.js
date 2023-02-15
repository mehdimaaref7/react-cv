import React from 'react';
import { LinearProgress } from '@mui/material';
const ProgressBar = (props) => {
    return (
        <div className={props.className}>
            <h3>{props.title}</h3>
            <div className='years'>
                <span>Années d'expériences</span>
                <span>1 an</span>
                <span>2 ans</span>
            </div>

            <div>
                {
                    props.languages.map((item) => {
                        let xpYears = 2;
                        let progressBar = item.xp / xpYears * 100;

                        return (
                            <div key={item.id} className="languageslist">
                                <li>{item.value}</li>
                                <LinearProgress className='progress'variant="buffer" value={progressBar}/> 

                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default ProgressBar;