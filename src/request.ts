import Axios from "axios";

const url = "https://boiling-refuge-66454.herokuapp.com/images";

export function getImagesReq() {
    return Axios.get(url);
}

export function getImageByIdReq(id: number) {
    return Axios.get(`${url}:${id}`);
}

export function addCommentReq(id: number, comment: string) {
    return Axios.post(`${url}:${id}/comments`, { comment });
}
export function loadImageReq(url: string) {
    return Axios.get(url)
}
