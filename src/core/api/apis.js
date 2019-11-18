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
}
export default new Apis();