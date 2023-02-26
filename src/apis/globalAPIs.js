import axios from "axios";
const token = localStorage.getItem("token");

const getApiKey = () => {
    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `${process.env.REACT_APP_BE_URL}/restaurant/authen/getApiKey`,
        headers: {
            'Authorization': `Basic ${process.env.REACT_APP_API_KEY}`
        }
    };

    return new Promise((resolve, reject) => {
        axios(config)
            .then(res => {
                resolve(res.data);
            }).catch(reason => {
                reject(reason);
            })
    });
}

const apis = {
    getApiKey
};

export default apis;