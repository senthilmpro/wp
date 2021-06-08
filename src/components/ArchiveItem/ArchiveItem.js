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

    return (
        <div className="LinkItem">
            <div className="TitleItem">
                <div>
                    <span className="dot"></span>
                    <a href={url} target="_blank">{cleanTitle(title)}</a>
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