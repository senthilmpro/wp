
import axios from 'axios';

const utils = {
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
    },
    fetchArchiveItem: async(url) => {
        const data = await axios.get(url).then(res => res.data);
        console.log(data);
        return data;
    }
}

let main = async () => {
    
}

export default utils;