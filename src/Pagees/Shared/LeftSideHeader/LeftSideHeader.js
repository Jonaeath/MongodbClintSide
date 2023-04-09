import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideHeader = () => {
    
    const [categories,SetCategories] = useState([]);

    useEffect( ()=>{
        fetch('http://localhost:5000/news-categories')
        .then(res => res.json())
        .then(data => SetCategories(data));
    }, [])

    return (
        <div>
            <h2>All Categories:{categories.length}</h2>
            <div>
                {
                    categories.map(categorie => <p key={categorie.id}> 
                    <Link to={`/categorie/${categorie.id}`}>{categorie.name}</Link>

                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftSideHeader;