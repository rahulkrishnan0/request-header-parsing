const express = require('express');
const router = express.Router();


router.get('/whoami', (req, res)=>{
    
    // Get the request headers
    console.log(req.headers);

    
    const ipaddrs = req.headers.host;
    const lang = req.headers['accept-language'];
    const sw = req.headers['user-agent'];


    res.json({
        "ipaddress" : ipaddrs,
        "language":lang,
        "software":sw
    })
})



router.get('/whoami/ip', (req, res) => {

    const ipaddrs = req.headers.host

    res.json({
        "ipaddress" : ipaddrs
    })
})

router.get('/whoami/user_agent', (req, res) => {

    const user_agent = req.headers['user-agent']

    res.json({
        "user agent" :user_agent
    })
})



router.get('/whoami/custom', (req, res) => {

    const request_header = req.params.query.header;
    const reqHeader = req.heades[request_header];

    res.json({
        request_header: reqHeader,
    })
})


module.exports = router;
