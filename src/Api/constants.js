export default {
    // The URL we're connecting to

    //local
    //hostname: "http://localhost:8032/api",

    //Dev
    hostname: 'http://evmax.ghriantech.com/api',


    //Staging
    // hostname: 'http://api.evecosystem/api',


    //Prod
    //hostname:'https://api.evmax.in/api',


    //dev
    cdnHostname: "http://cdn.ghriantech.com/api/upload/",

    //staging
    // cdnHostname: "http://cdn.ghriantech.com/api/upload/",

    //prod
    //cdnHostname: "https://cdn.evmax.in/api/upload/",

    errors: {
        // Defaults
        default: "Hmm, an unknown error occured",
        timeout: "Server Timed Out. Check your internet connection",
        invalidJson: "Response returned is not valid JSON",
        authFailed: "Unauthorized Access"
    },
    endpoints: new Map([
        ["auth", "/oauth/token"],
        ["validateToken","/oauth/validateToken"],
        ["users", "/users"],
        ["organizations", "/organizations"],
        ["enquires", "/enquires"],
        ["approveEnquiry", "/enquires/approveEnquiry"],
        ["products", "/products"],
        ["inventories","/inventories"],
        ["productInventories","/productInventories"],
        ["productTypes", "/productTypes"],
        ["brands", "/brands"],
        ["categories", "/categories"],
        ["forgotPassword", "/oauth/forgotPassword"],
        ["orders","/orders"],
        ["dealers","/dealers"],
        ["states","/partners/states"]
    ]),
    tokenKey: "auth"
};
