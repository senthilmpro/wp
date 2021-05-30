

const utils = {
    fetchPostsUrl: (site, page, number) => {
        return `https://public-api.wordpress.com/rest/v1.1/sites/${site}/posts?number=${number}&page=${page}&fields=title,content`;
    },
    fetchPosts: (site, page, number) => {

    },
    parseContent: (content) => {
        const parser = new DOMParser();
        const htmlObj = parser.parseFromString(content, 'text/html');
        const text= htmlObj.querySelector('p').innerText;
        return text;
    },
    parseEncodedContent: (text) => {
        const splitIndex = 4;
        if(text && text.length > 4){
            return text.substring(0,splitIndex) + text.substring(12)
        }
        return null;
    },
    convertToObject: (text) => {
        let str = atob(text);
        if(str && typeof str == "string"){
            return JSON.parse(str);
        }
    }
}

let main = async () => {
    
}

export default utils;