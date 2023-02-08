import React from 'react';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SportsGymnasticsIcon from '@mui/icons-material/SportsGymnastics';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
const Hobbies = () => {
    return (
        <div className='hobbies'>
            <h3> Intérêts</h3>
            <ul>
                <li className='hobby'>
                    <LibraryMusicIcon/>
                    <span> Musique </span>

                </li>
                <li className='hobby'>
                    <SportsGymnasticsIcon/>
                    <span> Sport </span>

                </li>
                <li className='hobby'>
                    <SportsEsportsIcon/>
                    <span> Jeux Vidéos </span>

                </li>
                
                <li className='hobby'>
                    <LibraryBooksIcon/>
                    <span> Lecture </span>

                </li>
                <li className='hobby'>
                    <CurrencyBitcoinIcon/>
                    <span> Cryptos </span>

                </li>
            </ul>
            
        </div>
    );
};

export default Hobbies;