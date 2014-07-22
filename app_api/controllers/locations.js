var sendJSONresponse = function(res, status, content) {
    res.status(status);
    res.json(content);  
};

module.exports.locationsCreate = function(req, res) {
    sendJSONresponse(res, 200, {"status" : "success"});
};

module.exports.locationsListByDistance = function(req, res) {
    sendJSONresponse(res, 200, {"status" : "success"});
};

module.exports.locationsReadOne = function(req, res) {
    sendJSONresponse(res, 200, {"status" : "success"});
};

module.exports.locationsUpdateOne = function(req, res) {
    sendJSONresponse(res, 200, {"status" : "success"});
};

module.exports.locationsDeleteOne = function(req, res) {
    sendJSONresponse(res, 200, {"status" : "success"});
};

module.exports.reviewsCreate = function(req, res) {
    sendJSONresponse(res, 200, {"status" : "success"});
};

module.exports.reviewsReadOne = function(req, res) {
    sendJSONresponse(res, 200, {"status" : "success"});
};

module.exports.reviewsUpdateOne = function(req, res) {
    sendJSONresponse(res, 200, {"status" : "success"});
};

module.exports.reviewsDeleteOne = function(req, res) {
    sendJSONresponse(res, 200, {"status" : "success"});
};