/**
 * @providesModule PALoading
 * Created by easy on 15/11/27.
 */

'use strict';

var PAFFLoading = require('NativeModules').PAFFLoading;

class PALoading {

    static showLoading(title) {
        PAFFLoading.show(0,title,1);
    }

    static showSuccess(title) {
        PAFFLoading.show(1,title,1);
    }

    static showFail(title) {
        PAFFLoading.show(2,title,1);
    }

    static showProgress(title,progress = 0) {
        PAFFLoading.show(3,title,progress);
    }

    static hide() {
        PAFFLoading.hide();
    }
}

exports = module.exports = PALoading;