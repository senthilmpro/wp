import axios from "axios";
import { WpConfig } from "../config";

const WordpressUtil = {
    fetchPostsUrl: (site, page, number) => {
        return `https://public-api.wordpress.com/rest/v1.1/sites/${site}/posts?number=${number}&page=${page}&fields=title,content`;
    },
    fetchWpContent: async (site = WpConfig.site, page=WpConfig.site, number = WpConfig.number) => {
        let url = WordpressUtil.fetchPostsUrl(site, page, number);
        try {
            let data = await axios.get(url).then(res => res.data);
            return data;
        } catch(err) {
            return null;
        }
    }
}

export default WordpressUtil;