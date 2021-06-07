import React, { useEffect, useState } from 'react';
import parser from '../../services/parser-util';
import './Home.css';
import ArchiveItem from '../ArchiveItem/ArchiveItem';

const Home = () => {
    const [data, setData] = useState([]);
    const [pageIndex, setPageIndex] = useState(1);
    const siteTitle = "Archive WP";

    const setArchiveLinks = async (pageIndex) => {
        const linksArray = await parser.fetchDataAndTransform(pageIndex);
        setData(linksArray);
    }

    const nextItems = () => {
        setPageIndex(c => c + 1);
    }

    const prevItems = () => {
        if (pageIndex > 1) {
            setPageIndex(c => c - 1);
        }
    }

    useEffect(() => {
        setArchiveLinks(pageIndex);
    }, [pageIndex])

    return (
        <div className="container Home">
            <div>
                <h2>{siteTitle} - Page {pageIndex}</h2>
            </div>
            <div className="LinkItemsContainer">
                {  
                    data.map(val => <ArchiveItem url={val.url} title={val.title} key={val.url} />)
                }
            </div>
            <div className="btn-container">
                <button className="btn btn-info" onClick={() => prevItems()}>Previous</button>
                <button className="btn btn-info" onClick={() => nextItems()}>Next</button>
            </div>
        </div>
    )
}

export default Home;