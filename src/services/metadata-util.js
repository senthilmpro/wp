// archive metadata util.

const ignoredFormats = [
    "Metadata",
    "Archive BitTorrent",
    "BitTorrent",
    "Thumbnail",
    "BitTorrentContents",
    "Text"
];

const ignoreExtensions = [
    '.NFO',
    '__ia_thumb.jpg'
]

const containsIgnoreExtension = (filename) => {
    let isPresent = false;
    ignoreExtensions.forEach(x => {
        if(filename.indexOf(x) !== -1)
        {
            console.log(filename)
            isPresent = true;
        }
            
    })
    return isPresent;
}

const MetadataUtil = {
    fileLinks: (obj) => {
        if(!obj) return [];
        if(obj.dark) return [];
        const {server, dir, files} = obj;
        let newFiles = [];
        if(files && files.length > 0){
            
            newFiles = files.filter(x => ignoredFormats.indexOf(x.format) == -1).filter(x => !containsIgnoreExtension(x.name)).filter(x => (x.source == "original"));
            
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