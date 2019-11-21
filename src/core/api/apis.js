import request from "./http";
import params from "./params";

class Apis {
    getIndexData() {
        return request({
            method: "GET",
            url: "/file/getPdf",
            headers: {
                token: params.token
            }
        })
    }
    getUserData() {
        return request({
            method: "GET",
            url: "/student/getInfo",
            headers: {
                token: params.token
            }
        })
    }
    getAward() {
        return request({
            method: "GET",
            url: "/student/getAward",
            headers: {
                token: params.token
            }
        })
    }
}
export default new Apis();