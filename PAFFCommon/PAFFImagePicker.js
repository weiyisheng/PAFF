/**
 * @providesModule PAFFImagePicker
 * Created by lizhihua on 16/3/5.
 */


'use strict';

var PAFFImagePicker = require('NativeModules').PAFFImagePicker;
var Platform = require('Platform');

class ImagePicker {

    /*
    *  选择图片.
    *  type='0'  调用相机采集图片
    *  type='1'  调用相册采集图片
    *  result: base64String
    * */
    static pickImage(type) {
        return new Promise(async (resolve, reject)=> {
            PAFFImagePicker.pickImage(type ,(result)=> {
                resolve(result);
            },(err)=> {
                reject(err);
            });
        });
    }

    static pickImageFromCamera(){
        return ImagePicker.pickImage('0');
    }

    static pickImageFromAlbum() {
        return ImagePicker.pickImage("1");
    }
}

exports = module.exports = ImagePicker;
