import React, { useEffect, useState } from 'react';
import parser from '../../services/parser-util';
import './Home.css';
import ArchiveItem from '../ArchiveItem/ArchiveItem';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { WpConfig } from '../../config';



const Home = () => {
    const [data, setData] = useState([]);
    const [count, setCount] = useState(0);
    const [pageIndex, setPageIndex] = useState(1);
    const [searchValue, setSearchValue] = useState(null);
    const siteTitle = "Archive WP";

    const setArchiveLinks = async (pageIndex) => {
        const {found, posts} = await parser.fetchDataAndTransform(pageIndex);
        setCount(found);
        setData(posts);
    }

    const searchItem = async (pageIndex) => {
        setPageIndex(pageIndex);
        const {found, posts} = await parser.fetchDataAndTransform(pageIndex, searchValue);
        setCount(found);
        setData(posts);
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
        if (searchValue) {
            searchItem(pageIndex);
        } else {
            setArchiveLinks(pageIndex);
        }
        // eslint-disable-next-line
    }, [pageIndex])

    return (
        <div className="container Home">
            <div>
                <h2>{siteTitle} - Page {pageIndex}</h2>
            </div>
            <div>
                <input type="text" placeholder="Search.." onKeyUp={e => setSearchValue(e.target.value)} />
                <button className="btn btn-secondary btn-search" onClick={() => searchItem(1)}><FontAwesomeIcon icon={faSearch} /></button>
            </div>
            <div className="LinkItemsContainer">
                {
                    data.map(val => <ArchiveItem url={val.url} title={val.title} key={val.url} />)
                }
            </div>
            <div className="btn-container">
                <button className="btn btn-info" disabled={pageIndex == 1}onClick={() => prevItems()}>Previous</button>
                <button className="btn btn-info" disabled={pageIndex == Math.ceil(count/WpConfig.number) }onClick={() => nextItems()}>Next</button>
            </div>
        </div>
    )
}

export default Home;