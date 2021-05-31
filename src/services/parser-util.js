import { WpConfig } from '../config';
import utils from './archive-util';
import WordpressUtil from './wordpress-util';

const parser = {
    fetchDataAndTransform: async (pageIndex) => {
        let data = await WordpressUtil.fetchWpContent(WpConfig.site, pageIndex, WpConfig.number);
        let objArray = [];
        let posts = data.posts;
        posts.forEach((val, ind) => {
            let {content, title} = val;
            let htmlText = utils.parseContent(content);
            let decodedText = utils.parseEncodedContent(htmlText);
            let obj = utils.convertToObject(decodedText);
            let finalObj = {
                ...obj,
                title: title
            }
            objArray.push(finalObj);
        })
        return objArray;
    }
}

export default parser;