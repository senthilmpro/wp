
import axios from 'axios';
import utils from './archive-util';

const parser = {
    parseContent: async (pageIndex) => {
        let siteName = `archive1x.wordpress.com`;
        let page = 1;
        let number = 10;

        let url = `https://public-api.wordpress.com/rest/v1.1/sites/archive1x.wordpress.com/posts?number=10&page=${pageIndex}&fields=title,content`;
        let data = await axios.get(url).then(res => res.data);
        console.log("DATA", data);
        let objArray = [];
        let posts = data.posts;
        posts.forEach((val, ind) => {
            let content = val.content;
            let title = val.title;
            let htmlText = utils.parseContent(content);
            let decodedText = utils.parseEncodedContent(htmlText);
            let obj = utils.convertToObject(decodedText);
            let finalObj = {
                ...obj,
                title: title
            }
            objArray.push(finalObj);
        })
        console.log("OBJ ARRAY", objArray);
        return objArray;

        //let htmlText = `eyJ18a8244abcmwiOiJodHRwOi8vYXJjaGl2ZS5vcmcvZGV0YWlscy8yMDIxLTUtMjktdG1wMHgtMTc4MTIzNzQiLCJ0b3JyZW50TmFtZSI6IkJpZy5GcmVha2luZy5SYXQuMjAyMC4xMDgwcC5CbHVSYXkuMTQwME1CLkRENS4xLngyNjQtR2FsYXh5UkcudG9ycmVudCIsInZlcnNpb24iOjF9`;
        
    }
}

export default parser;