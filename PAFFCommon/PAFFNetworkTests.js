/**
 * @providesModule PAFFNetworkTests
 * Created by easy on 15/11/19.
 */

'use strict';
var PAFFNetwork = require('PAFFNetwork');


class PAFFNetworkTests {

    async _runTests() {
        console.log('PAFFNetworkTests.runTests');

        for (var key in this) {
            var value = this[key];
            if (typeof value == 'function' && key.indexOf('test') == 0) {
                console.log('TEST:'+key);
                var result = await (()=> {
                    return new Promise(async (resolve,reject) => {
                        value().then((r)=>{
                            console.info('RESP:'+key);
                            console.info(r);
                            resolve(r);
                        }).catch((e) => {
                            console.warn('ERROR:'+key);
                            console.warn(e);
                            resolve(e);
                        });
                    });
                })();
            }
        }
    }

    static runTests() {
        var tests = new PAFFNetworkTests();
        tests._runTests().then();
    }

    constructor() {
        this.testFundLogin = async () => {
            var params = {};
            return PAFFNetwork.post('/btoa/work/fund/fundLogin',params);
        };

        this.testFundBindCardBankList = async () => {
            var params = {};
            return PAFFNetwork.post('/btoa/work/fund/bindCardBankList',params);
        };

        this.testFundSendCode = async () => {
            var params = {};
            return PAFFNetwork.post('/btoa/fund/bank/sendCode',params);
        };

        this.testFundVerifyCode = async () => {
            var params = {};
            return PAFFNetwork.post('/btoa/fund/bank/verifyCode',params);
        };

        this.testFundOpenAcc = async () => {
            var params = {};
            return PAFFNetwork.post('/btoa/work/fund/openAcc',params);
        };

        this.testFundAccountState = async () => {
            var params = {};
            return PAFFNetwork.post('/btoa/work/fund/accountState',params);
        };

        this.testGetFundCach = async () => {
            var params = {};
            return PAFFNetwork.post('/btoa/work/fund/getFundCach',params);
        };

        this.testGetFundSale = async () => {
            var params = {};
            return PAFFNetwork.post('/btoa/work/fund/getFundSale',params);
        };

        this.testGetFundMarketByTime = async () => {
            var params = {};
            return PAFFNetwork.post('/btoa/portal/fund/getFundMarketByTime',params);
        };

        this.testSuperMoneyInfo = async () => {
            var params = {};
            return PAFFNetwork.post('/btoa/work/fund/superMoneyInfo',params);
        };

        this.testSupermoneyprofit = async () => {
            var params = {};
            return PAFFNetwork.post('/btoa/work/fund/supermoneyprofit',params);
        };

        this.testGetTradeInfo = async () => {
            var params = {};
            return PAFFNetwork.post('/btoa/work/fund/getTradeInfo',params);
        };

        this.testModifyPwd = async () => {
            var params = {};
            return PAFFNetwork.post('/btoa/work/fund/modifyPwd',params);
        };

        this.testCountFundFestivalsHolidays = async () => {
            var params = {};
            return PAFFNetwork.post('/btoa/work/fund/countFundFestivalsHolidays',params);
        };

        this.testMerOpenAcc = async () => {
            var params = {};
            return PAFFNetwork.post('/btoa/work/fund/merOpenAcc',params);
        };

        this.testFundInfo = async () => {
            var params = {};
            return PAFFNetwork.post('/btoa/work/fund/fundInfo',params);
        };
    }
}

exports = module.exports = PAFFNetworkTests;