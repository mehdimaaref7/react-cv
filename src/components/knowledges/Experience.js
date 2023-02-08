import React from 'react';

const Experience = () => {
    return (
        <div className="experience">
            <h3>Expériences</h3>
            <div className="exp-1">
                <h4> CDD - Analyste développeur Java Full Stack - INSEE</h4>
                <h5> 2021 - Aujourd'hui</h5>
                <p>
                    <li>
                        <ul> Maintenance backend des applications Java SpringBoot 3 / Java 8-11-17 / Spring MVC </ul>
                        <ul> Développement Frontend : Librairie React 17 - 18</ul>
                        <ul> Monitoring des applications : Grafana, ELK, Sonar, tests unitaires, tests fonctionnels  </ul>
                        <ul> Devops : Déploiement avec Gitlab/Github CI-CD, Docker, Kubernetes, shell, YAML, Linux  </ul>
                        <ul> Database : Ldap, Postgresql, DBeaver  </ul>
                        <ul> Gestion en mode Agile, Tickets Kanban</ul>
                        <ul> IaC: Puppet</ul>
                    </li>
                </p>

            </div>
            <div className="exp-2">
                <h4> Stage de fin d'étude - Data Analyste et développeur logiciel - Cobham Avionics</h4>
                <h5> Mars 2021 - Septembre 2021</h5>
                <p>
                    Développement d'une application web : 
                    <li>
                        <ul> Frontend: Angular 11 - Bootstrap - Highcharts.js - Jqwidgets.js </ul>
                        <ul> Backend: Node.js - PHP</ul>
                        <ul> Database: phpmyadmin/Mysql  </ul>
                        <ul> Extraction & Nettoyage de données : Excel/SQL </ul>
                        <ul> Gestion en mode Agile </ul>
                        <ul> Systèmes ERP - secteur aéronautique  </ul>
                    </li>
                </p>

            </div>
            <div className="exp-3">
                <h4> Stage Data Scientist</h4>
                <h5> Juillet 2020 - Aout 2020</h5>
                <p>
                    <li>
                        <ul> Mise en place de modèles</ul>
                        <ul> Apprentissage automatique / IA</ul>
                        <ul> google Colab / Jupiter Notebook </ul>
                        <ul> Librairies : Numpy, Pandas, Scikit-Learn, TensorFlow </ul>
                        <ul> Visualisation et analyse : Excel </ul>
                    </li>
                </p>

            </div>
            
        </div>
    );
};

export default Experience;