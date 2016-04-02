/**
 * @providesModule PAFFNetwork
 * Created by easy on 15/11/17.
 */

'use strict';
var debug = require('debug');
var log = debug('PAFFNetwork');
var error = debug('PAFFNetwork:error');
var PAFFNetwork = require('NativeModules').PAFFNetwork;
var PAToast = require('PAToast');
var PALoading = require('PALoading');
var Platform = require('Platform');

/**
 * 银行一账通业务请求模块
 *
 * Example:
 * var PAFFNetwork = require('PAFFNetwork');
 * PAFFNetwork.get('Your API path',{Your API params})
 *      .then((data)=>{
 *      })
 *      .catch((err)=>{
 *      });
 * */
class Network {

    /**
     * @method HTTP 请求
     * @param options = {
     *      path    : ''        //http url path
     *      method  : ''        //http method,默认 GET
     *      params  : {}        //url query(GET) or body query(POST)
     * }
     * @return A Promise(
     *      then    : Response JSON Object 中 data 数据
     *      catch   : Request Error 或 Response JSON Object error code 失败的错误
     *  )
     * */
    static async request(options) {
        return new Promise(async (resolve, reject)=> {
            PAFFNetwork.request(options || {},(result)=> {
                resolve(result);
            },(err)=> {
                reject(err);
            });
        });
    }

    /**
     *  @method GET 请求
     *  @return @see Network.request
     **/
    static async get(path,params) {
        return Network.request({path:path,params:params || {},method:'GET'});
    }

    /**
     *  @method POST 请求
     *  @return @see Network.request
     **/
    static async post(path,params) {
        return Network.request({path:path,params:params || {},method:'POST'});
    }


    /**
     * 网络请求中的密码加密
     * */
    static encriptPassword(password) {
        return new Promise((resolve, reject)=> {
            PAFFNetwork.encriptPassword(password,(result)=> {
                resolve(result);
            },(err)=> {
                reject(err);
            });
        });
    }

    /**
     * 网络请求中的密码加密 其他银行专用
     * */
    static encryptOtherPassword(password) {
        return new Promise((resolve, reject)=> {
            PAFFNetwork.encryptOtherPassword(password,(result)=> {
                resolve(result);
            },(err)=> {
                reject(err);
            });
        });
    }

  static showErrorToast(error, errorTodo) {
    /*
     * 网络错误,服务器异常
     * 密码错误
     * 账号被锁定
     */
    if (error && (900001 == error.code || 900002 == error.code || 900003 == error.code)) {
      if (Platform.OS === 'android') {
        PALoading.hide();
        PAToast.show('网络异常', PAToast.SHORT);
      } else {
        PALoading.showFail('网络异常');
      }
    }
    else if (error && '' != error.code && (error.message || error.msg)) {
      let notiMsg = error.message ? error.message : error.msg;
      if (Platform.OS === 'android') {
        PALoading.hide();
        PAToast.show(notiMsg, PAToast.SHORT);
      } else {
        PALoading.showFail(notiMsg);
      }
      errorTodo && errorTodo();
    }
    else {
      if (Platform.OS === 'android') {
        PALoading.hide();
        PAToast.show('请求失败,请重试', PAToast.SHORT);
      } else {
        PALoading.showFail('请求失败,请重试');
      }
    }

  }
}

exports = module.exports = Network;
