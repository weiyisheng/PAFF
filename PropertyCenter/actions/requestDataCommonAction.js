'use strict';

/*公共组件*/
import PALoading from '../PAFFCommon/PALoading';
import Network from '../PAFFCommon/PAFFNetwork';
import * as testdata  from './testdata';
import * as urlmanager from './urlmanager';

const isTestData = true;

/*发送还款请求*/
export function RepayMethodData(clKey , params) {
    if (isTestData) {
      return ({
        type : clKey,
        data : testdata.DataDictionary[clKey]
      });
    }

    return (dispach) => {
        PALoading.showLoading('数据加载中...');
        Network.post(urlmanager.NetWorkURL[clKey]], params)
            .then((responseData) => {
                console.info('repayMethod back data :',responseData);

                PALoading.hide();
                dispach ({
                    type : clKey,
                    data : responseData,
                });
            })
            .catch((error) => {
                PALoading.hide();
                Network.showErrorToast(error);
            });
    }
}
