import React, { useState } from 'react';
import utils from '../../services/archive-util';
import MetadataUtil from '../../services/metadata-util';
import ItemLink from '../ItemLink/ItemLink';
import './ArchiveItem.css';

const ArchiveItem = ({ title, url }) => {
    const [visible, setVisible] = useState(false);
    const initialState = {
        status: 'loading',
        items: null
    };
    const [itemState, setItemState] = useState(initialState);
    const isFullLink = false;

    const fetchArchiveUrl = async (url) => {
        let isPostVisible = visible;
        setVisible(c => !c);
        if(!isPostVisible){
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
        
    }

    let filters = [`www-tamilblasters-re-`,`www-tamil-blasters-pl-`,`www-tamilblasters-re-`,`www-tamil-blasters-one-`,`www-1-tamil-mv-mx-`,'-torrent','www-tamil-blasters-ws-','www-tamil-blasters-nl-',
        'www-tamil-blasters-me-','www-tamilblasters-me-','www-tamil-blasters-re-','www-tamil-blasters-uk-','www-tmil-blasters-me-','www-tamil-blasters-net-'];
    const cleanTitle = (title) => {
        let strCopy = new String(title);
        try {
            filters.forEach(x => {
                title = title.replace(x,'');
            });
            // check for year.
            let match = title.match(/((19|20)(\d{2}))/);
            if(match && match.length > 0){
                let splits = title.split("-"+ match[0]+ "-");
                title = splits[0] + ` (${match[0]}) `+ splits[1];
            }
            return title;
        } catch(err) {
            return strCopy;
        }
    }

    const getResolution = (title) => {
        if(title.includes('-720-p-')){
            return '720p'
        } else if(title.includes('-1080-p-')){
            return '1080p'
        } 
        return null;
    }

    return (
        <div className="LinkItem">
            <div className="TitleItem">
                <div>
                    <span className="dot"></span>
                    <a href={url} target="_blank">{cleanTitle(title)}</a>
                    <span className="resolution-badge badge badge-secondary">{getResolution(title)}</span>
                </div>
                <button className="btn btn-default btn-sm links-btn"
                    onClick={() => fetchArchiveUrl(url)}>
                    {`${visible ? `- ` : '+ ' } Links`}
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
                                itemState.items.map(x => <li className="file-link"><ItemLink url={x} fullLink={isFullLink} /></li>)
                            }
                        </ul>
                    }

                </div>
            }

        </div>
    )
}

export default ArchiveItem;