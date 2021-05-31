// archive metadata util.

const ignoredFormats = [
    "Metadata",
    "Archive BitTorrent",
    "BitTorrent",
    "Thumbnail",
    "BitTorrentContents",
    "Text"
];

const MetadataUtil = {
    fileLinks: (obj) => {
        if(!obj) return [];
        if(obj.dark) return [];
        const {server, dir, files} = obj;
        let newFiles = [];
        if(files && files.length > 0){
            newFiles = files.filter(x => ignoredFormats.indexOf(x.format) == -1).filter(x => (x.source == "original"));
            newFiles = newFiles.map(x => `https://${server}${dir}/${x.name}`)
        }
        console.log("FILES: ", newFiles);
        return newFiles;
    },
    downloadUrl: (obj) => {
        let identifier = obj?.metadata?.identifer;
        return `https://archive.org/download/${identifier}`;
    }
}

export default MetadataUtil;