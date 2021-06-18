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
    '__ia_thumb.jpg',
    'Musafirboy Official.url'
].map(x => x.toLowerCase());

const URL_TYPE = {
    "ORIGINAL": "ORIGINAL",
    "PARSED": "PARSED"
}

const SELECTED_URL_TYPE = URL_TYPE.ORIGINAL;

const containsIgnoreExtension = (filename) => {
    let isPresent = false;
    ignoreExtensions.forEach(x => {
        if (filename.indexOf(x.toLowerCase()) !== -1) {
            isPresent = true;
        }
    })
    return isPresent;
}

const MetadataUtil = {
    fileLinks: (obj) => {
        if (!obj) return [];
        if (obj.dark) return [];
        const { server, dir, files, metadata } = obj;
        let newFiles = [];
        if (files && files.length > 0) {
            newFiles = files.filter(x => ignoredFormats.indexOf(x.format) === -1).filter(x => !containsIgnoreExtension(x.name)).filter(x => (x.source === "original"));
            if (SELECTED_URL_TYPE === URL_TYPE.ORIGINAL) {
                let identifier = metadata.identifier;
                let hostname = `archive.org`
                newFiles = newFiles.map(x => `https://${hostname}/download/${identifier}/${x.name}`)
            } else {
                newFiles = newFiles.map(x => `https://${server}${dir}/${x.name}`)
            }
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