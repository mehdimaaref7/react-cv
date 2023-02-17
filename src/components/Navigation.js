import React from 'react';
import { NavLink } from 'react-router-dom';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import PermContactCalendarSharpIcon from '@mui/icons-material/PermContactCalendarSharp';
import ImportContactsSharpIcon from '@mui/icons-material/ImportContactsSharp';
import { PsychologySharp } from '@mui/icons-material';
const Navigation = () => {
    return (
        <div className="sidebar">
            <div className="id">
                <div className="idContent">
                    <img src="./media/mehdi-maaref.jpg" alt="profil-pic" height={"200"} width={"180"}/>
                    <h3> Mehdi Maaref </h3>
                </div>
            </div>

            <div className="navigation">
                <ul>
                    <li>
                        <NavLink exact to="/react-cv/home" ClassName="navActive">
                           <i> <HomeSharpIcon/> </i> <span> Accueil </span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/react-cv/competences" ClassName="navActive">
                            <i> <PsychologySharp/> </i> <span> Compétences </span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/react-cv/portfolio" ClassName="navActive">
                           <i> <ImportContactsSharpIcon/> </i> <span> Portfolio </span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/react-cv/contact" ClassName="navActive">
                            <i> <PermContactCalendarSharpIcon/> </i> <span> Contacts </span>
                        </NavLink>
                    </li>
                </ul>
            </div>  

            <div className="socialNetwork">
                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/mehdi-maaref-81b02a14b/" target="_blank"
                        rel="noopener noreferrer"><i class="fa fa-linkedin"></i></a>
                    </li>
                    <li>
                        <a href="https://github.com/mehdimaaref7" target="_blank"
                        rel="noopener noreferrer"><i class="fa fa-github"></i></a>
                    </li>
                    <li>
                        <a href="https://twitter.com/MaarefMehdi1" target="_blank"
                        rel="noopener noreferrer"><i class="fa fa-twitter"></i></a>
                    </li>
                    <li>
                        <a href="https://codepen.io/mehdimaaref7" target="_blank"
                        rel="noopener noreferrer"><i class="fa fa-codepen"></i></a>
                    </li>
                </ul>
                <div className="signature">
                    <p> Mehdi Maaref - 2023</p>
                </div>
            </div>
        </div>
    );
};

export default Navigation;