const mockserver = require('mockserver-node');
const open = require('open');

mockserver.start_mockserver({
	serverPort: 3002,
	trace: true,
    jvmOptions: "-Dmockserver.enableCORSForAllResponses=true"
});

const mockServerClient = require('mockserver-client').mockServerClient;

mockServerClient("localhost", 3002).openAPIExpectation({
    "specUrlOrPayload": "openapi.yaml"
}).then(
    function () {
        console.log("expectation created");
    },
    function (error) {
        console.log(error);
    }
);

(async () => {
    await open('http://localhost:3002/mockserver/dashboard');
})();

