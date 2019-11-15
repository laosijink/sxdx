import request from "./http";
import params from "./params";

var poxy = "/apis";
class Apis {
    getTest() {
        return request({
            method: "GET",
            url: poxy + "/api/v1/topics",
            headers: {
                token: params.token
            }
        })
    }
}
export default new Apis();