import axios from "axios";
const token = localStorage.getItem("token");

const getPhotoRef = (data) => {
    console.log("getphoto", { ...data, maxwidth: 900 });
    return new Promise((resolve, reject) => {
        axios.post(` ${process.env.REACT_APP_BE_URL}/restaurant/getPhotoRefernce`, { ...data, maxwidth: 900 }, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Authorization': token
            }
        })
            .then(res => {
                resolve(res.data);
            }).catch(reason => {
                reject(reason);
            })
    });
}

const queryPlace = (data) => {

    return new Promise((resolve, reject) => {
        axios.post(`${process.env.REACT_APP_BE_URL}/restaurant/queryPlace`, {
            "textsearch": data
        }, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Authorization': token
            }
        })
            .then(res => {
                resolve(res.data);
            }).catch(reason => {
                reject(reason);
            })
    });
}

const getPlaceDetail = (data) => {
   
    return new Promise((resolve, reject) => {
        axios.post(`${process.env.REACT_APP_BE_URL}/restaurant/placeDetail`, {
            "place_id":data
        }, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Authorization': token
            }
        })
            .then(res => {
                resolve(res.data);
            }).catch(reason => {
                reject(reason);
            })
    });
}
const getcontentProminence = (data) => {

    return new Promise((resolve, reject) => {
        axios.get(`${process.env.REACT_APP_BE_URL}/restaurant/getcontentProminence`, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Authorization': token
            }
        })
            .then(res => {
                resolve(res.data);
            }).catch(reason => {
                reject(reason);
            })
    });
}

const apis = {
    getPhotoRef,
    queryPlace,
    getcontentProminence,
    getPlaceDetail
};

export default apis;