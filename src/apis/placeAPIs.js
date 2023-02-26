import axios from "axios";
const token = localStorage.getItem("token");

const getPhotoRef = (data) => {
    console.log("getphoto", { ...data, maxwidth: 900 });
    return new Promise((resolve, reject) => {
        axios.post(`http://localhost:3001/restaurant/getPhotoRefernce`, { ...data, maxwidth: 900 }, {
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
        axios.post(`http://localhost:3001/restaurant/queryPlace`, {
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
        axios.post(`http://localhost:3001/restaurant/placeDetail`, {
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
        axios.get(`http://localhost:3001/restaurant/getcontentProminence`, {
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