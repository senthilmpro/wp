import axios from "axios";
import { WpConfig } from "../config";

const WordpressUtil = {
    fetchPostsUrl: (site, page, number) => {
        return `https://public-api.wordpress.com/rest/v1.1/sites/${site}/posts?number=${number}&page=${page}&fields=title,content`;
    },
    fetchSearchPostsUrl: (site, page, number,search) => {
        return `https://public-api.wordpress.com/rest/v1.1/sites/${site}/posts?number=${number}&page=${page}&fields=title,content&search=${search}`;
    },
    fetchWpContent: async (site = WpConfig.site, page=WpConfig.site, number = WpConfig.number, search) => {
        let url = null;
        if(search){
            url = WordpressUtil.fetchSearchPostsUrl(site, page, number, search);
        } else {
            url = WordpressUtil.fetchPostsUrl(site, page, number);
        }
        try {
            let data = await axios.get(url).then(res => res.data);
            return data;
        } catch(err) {
            return null;
        }
    }
}

export default WordpressUtil;