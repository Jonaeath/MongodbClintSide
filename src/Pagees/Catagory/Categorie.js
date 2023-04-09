import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../Shared/NewsSummaryCard/NewsSummaryCard';

const Categorie = () => {
    
    const catagoryNews = useLoaderData();
    return (
        <div>
            {
                catagoryNews.map( news=><NewsSummaryCard
                
                    key = {news._id}
                    news = {news}

                ></NewsSummaryCard>)
            }
        </div>
    );
};

export default Categorie;