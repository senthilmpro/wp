import React from 'react';

const isValidLink = (url) => {
    try {
        new URL(url);
        return true;
    } catch (err) {
        console.log("ERR >> Invalid Link ", url);
        return false;
    }
}

const ItemLink = ({ url, fullLink }) => {
    const getLink = (url, fullLink) => {
        if (fullLink) {
            // let fileName = url.split('/').pop();
            // let encodedFileName = encodeURIComponent(fileName);
            // return url.replace(fileName, encodedFileName);
            let str = url;
            str = str.replaceAll(`[`, `%5B`);
            str = str.replaceAll(`]`, `%5D`);
            str = str.replaceAll(`)`, `%29`);
            str = str.replaceAll(`(`, `%28`);
            return str;
        } else {
            return url.split('/').pop();
        }
    }
    return isValidLink(url) && (<a href={getLink(url, true)} target="_blank" rel="noreferrer" className="ArchiveLinkTitle">{getLink(url, fullLink)}</a>);
}

export default ItemLink;