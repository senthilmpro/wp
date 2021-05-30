import React, { useEffect, useState } from 'react';
import parser from '../../services/parser-util';
import './Home.css';

const Home = () => {
    const [data, setData] = useState([]);
    const [pageIndex, setPageIndex] = useState(1);

    const setLinks = async (pageIndex) => {
        const linksArray = await parser.parseContent(pageIndex);
        console.log("LINKS ARRAY: ", linksArray)
        setData(linksArray);
    }

    const nextItems = () => {
        setPageIndex(c => c+1);
    }

    const prevItems = () => {
        if(pageIndex > 1){
            setPageIndex(c => c-1);
        }
    }

    useEffect(() => {
        setLinks(pageIndex);
    }, [pageIndex])

    return (
        <div className="container Home">
            <div className="LinkItemsContainer">
                {
                    data.map(val => {
                        return (
                            <div className="LinkItem">
                                <span class="dot"></span> <a href={val.url}> {val.title}</a>
                            </div>
                        )
                    })
                }
            </div>
            <div className="btn-container">
                <button className="btn" onClick={() => prevItems()}>Previous</button>
                <button className="btn" onClick={() => nextItems()}>Next</button>
            </div>
        </div>
    )
}

export default Home;