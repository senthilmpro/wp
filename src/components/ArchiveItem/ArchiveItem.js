import React, { useState } from 'react';
import utils from '../../services/archive-util';
import MetadataUtil from '../../services/metadata-util';
import './ArchiveItem.css';

const ArchiveItem = ({ title, url }) => {
    const [visible, setVisible] = useState(false);
    const initialState = {
        status: 'loading',
        items: null
    };
    const [itemState, setItemState] = useState(initialState);

    const fetchArchiveUrl = async (url) => {
        setVisible(true);
        setItemState(x => ({
            ...x,
            initialState
        }))
        let reqUrl = url.replace('/details/', '/metadata/');
        reqUrl = reqUrl.replace('http://', 'https://');
        const data = await utils.fetchArchiveItem(reqUrl);
        const linksArr = MetadataUtil.fileLinks(data);
        setItemState(x => ({
            ...x,
            status: 'fetched',
            items: linksArr
        }));
    }

    return (
        <div className="LinkItem">
            <div className="TitleItem">
                <div>
                    <span className="dot"></span>
                    <a href={url} target="_blank">{title}</a>
                </div>
                <button className="btn btn-default btn-sm links-btn"
                    onClick={() => fetchArchiveUrl(url)}>
                    Links
                </button>
            </div>
            {
                visible &&
                <div className="fileLinks">
                    {
                        itemState.status == "loading" &&
                        <div> Loading... </div>
                    }
                    {
                        itemState.status == "fetched" &&
                        <ul>
                            {
                                itemState.items && itemState.items.length == 0 &&
                                <li key={url}>No Items</li>
                            }
                            {
                                itemState.items && 
                                itemState.items.map(x => <li className="file-link"><a href={x}>{x}</a></li>)
                            }
                        </ul>
                    }

                </div>
            }

        </div>
    )
}

export default ArchiveItem;