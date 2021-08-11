
import paytmchecksum from '../paytm/PaytmChecksum.js';
import { paytmParams, paytmMerchantKey } from '../index.js';
import formidable from 'formidable';
import https from 'https';

export const addPaymentGateway = async (request, response) => {
    let paytmChecksum =  await paytmchecksum.generateSignature(paytmParams, paytmMerchantKey);

    try{
        let params = {
            ...paytmParams, 'CHECKSUMHASH':paytmChecksum
        }
        response.json(params);
    } catch (error){
        console.log(error);
    }
}

export const paymentResponse = (request, response) => {
    const form = new formidable.IncomingForm();
    let paytmCheckSum = request.body.CHECKSUMHASH;
    delete request.body.CHECKSUMHASH;

    let isVerifysignature = paytmchecksum.verifySignature(request.body, 'bKMfNxPPf_QdZppa',paytmCheckSum);

    if(isVerifysignature){
        paytmParams['MID'] = request.body.MID;
        paytmParams['ORDERID'] = request.body.ORDERID;

        paytmchecksum.generateSignature(paytmParams, 'bKMfNxPPf_QdZppa').then(function(checksum){
            paytmParams['CHECKSUMHASH'] = checksum;

            let post_data = JSON.stringify(paytmParams);
            let options = {
                hostname: 'securegw-stage.paytm.in',
                port: 443,
                path: '/order/status',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Content-Length': post_data.length
                }
            };

            let res = ''

            let post_req = https.request(options, function(post_res){
                post_res.on('data',function(chunk){
                    res += chunk;
                })

                post_res.on('end',function(){
                    let result = JSON.parse(res);
                    response.redirect('http://localhost:3000/')
                });
            });
            post_req.write(post_data);
            post_req.end();
        })
    } else {
        console.log('checksum mismatched');
    }
}