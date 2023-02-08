import React from 'react';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
const OtherSkills = () => {
    return (
        <div>
            <div className='otherSkills'>
                <h3>Autres Compétences</h3>
                <ul>
                    <li><CheckBoxIcon/> Anglais - TOEIC 820/990</li>
                    <li><CheckBoxIcon/> Leadership </li>
                    <li><CheckBoxIcon/> Gestion de Projet </li>
                    <li><CheckBoxIcon/> Sociologie - Psychologie </li>
                </ul>
                <ul>
                    <li><CheckBoxIcon/> UI/UX Design</li>
                    <li><CheckBoxIcon/> Architecture : Microservices / Monolithique</li>
                    <li><CheckBoxIcon/> WEB 2.0 </li>
                    <li><CheckBoxIcon/> ETL, Data-Security</li>
                    <li><CheckBoxIcon/> GitopS, GitSecOps, Cybersécurité</li>
                </ul>
            </div>
        </div>
    );
};

export default OtherSkills;