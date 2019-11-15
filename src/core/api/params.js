import qs from "qs";

var query = qs.parse(location.search.slice(1));

var params = {
    userType: query.userType || "",
    token: query.token || "",

}
export default params;