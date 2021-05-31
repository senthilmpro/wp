import React, { useEffect, useState } from 'react';
import utils from '../../services/archive-util';
import MetadataUtil from '../../services/metadata-util';
import parser from '../../services/parser-util';
import './Home.css';

const Home = () => {
    const [data, setData] = useState([]);
    const [pageIndex, setPageIndex] = useState(1);
    const [links, setLinks] = useState(null);
    const [currentUrl, setCurrentUrl] = useState(null);
    const siteTitle = "Archive WP";

    const setArchiveLinks = async (pageIndex) => {
        const linksArray = await parser.fetchDataAndTransform(pageIndex);
        console.log("LINKS ARRAY: ", linksArray)
        setData(linksArray);
    }

    const fetchArchiveUrl = async (url) => {
        if(url == currentUrl)
            setCurrentUrl(null);
        else
            setCurrentUrl(url);
        let reqUrl = url.replace('/details/','/metadata/');
        const data = await utils.fetchArchiveItem(reqUrl);
        const linksArr = MetadataUtil.fileLinks(data);
        setLinks(linksArr);
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
        setArchiveLinks(pageIndex);
    }, [pageIndex])

    return (
        <div className="container Home">
            <div>
                <h2>{siteTitle} - page {pageIndex}</h2>
            </div>
            <div className="LinkItemsContainer">
                {
                    data.map(val => {
                        return (
                            <div>
                                <div className="LinkItem">
                                    <span class="dot"></span> <a href={val.url} target="_blank"> {val.title}</a>
                                    <button className="btn btn-primary btn-sm links-btn" onClick={() => fetchArchiveUrl(val.url)} >Links</button>
                                </div>
                                {
                                    val.url == currentUrl && 
                                    <div className="fileLinks">
                                    <ul>
                                        {links && links.map(x => <li><a href={x}>{x}</a></li>)}
                                    </ul>
                                </div>
                                }
                                
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