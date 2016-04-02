/**
 * @providesModule PAFFNetworkMock
 * @author  liuzhanhong
 * 设计思路：
 * native已经有网络mock接口，设计react-native的mock主要在于两点
 * 1. native使用mock需要改代码重新编译
 * 2. mock数据是假数据而不是死数据，若能智能的根据请求体来构造返回值会更有价值，具体看用法3
 * 若mock数据设计的充分，完全可以模拟后端的逻辑，建议在开发时先写mock数据再写代码
 * 使用方式(以下仅为构造mock数据，网络请求依然使用PAFFNetwork接口，无需修改代码)
 * import { mockGet, mockPost } from 'PAFFNetworkMock';
 * // 1. 匹配请求对象（条件可以是实际请求的一部分）
 * mockGet({path: '/getUserInfo', params: {uid: '001'}}, {name: 'testUser'});
 * // 2. 通过函数来匹配请求
 * mockPost(req => req.path.startsWith('/path/to/api'), {response: {}});
 * // 3. 通过函数来构造返回内容
 * // 3.1 登陆（甚至可以模拟被踢的情况，具体代码略）
 * mockPost({path: '/login'}, options => {
 *   let user;
 *   switch(option.params.uid) {
 *     case '13800300293': user = '张三'; break;
 *     case '13800300902': user = '李四'; break;
 *     default: break;
 *   }
 *   if (user) {
 *     return {user};
 *   } else {
 *     return new Error('用户名或密码错误');
 *   }
 * });
 * // 3.2 获取系统时间
 * mockPost({path: '/getServerTime'}, () => new Date().getTime());
 * // 3.3 存取款
 * let totalMoney = 1000;
 * mockPost({path: '/addMoney'}, (options) => {
 *   return {
 *     curMoney: totalMoney += options.params.money;
 *   };
 * });
 * mockPost({path: '/withdrawMoney'}, (options) => {
 *   let { money } = options.params;
 *   if (totalMoney >= money) {
 *     return { curMoney: totalMoney -= money };
 *   } else {
 *     return new Error('余额不足');
 *   }
 * });
 * // 4. 构造出错请求
 * mockPost({path: '/notFound'}, new Error('404 Not Fount'));
 * // 5. 设定网络延时
 * mockPost({path: '/delayApi'}, {res: {}}, 300);
 * Created by easy on 2015-12-22
 */

'use strict';

import PAFFNetwork from 'PAFFNetwork';

let rawNetwork = {...PAFFNetwork};
let mockData = [];
function request(options) {
  for (var i = 0; i < mockData.length; i++) {
    const mock = mockData[i];
    if (mock.match(options)) {
      return new Promise((resolve, reject) => setTimeout(() => {
        let {response} = mock;
        if (response instanceof Function) {
          try {
            response = response(options);
          } catch (e) {
            response = e;
          }
        }
        if (response instanceof Error) {
          reject(response);
        } else {
          resolve(response);
        }
      }, mock.delay));
    }
  }
  return Promise.reject(new Error('not found'));
}

function get(path, params) {
  return request({path: path, params: params, method: 'GET'});
}

function post(path, params) {
  return request({path: path, params: params, method: 'POST'});
}

// 修改原来的函数
Object.assign(PAFFNetwork, {
  request,
  get,
  post,
});

function equal(match, toMatch) {
  if (Array.isArray(match)) {
    for (var i = 0, l = match.length; i < l; i++) {
      if (!equal(match[i], toMatch[i])) {
        return false;
      }
    }
  } else if (Object.prototype.toString.call(match) === '[object Object]') {
    for (var k in match) {
      if (match.hasOwnProperty(k)) {
        if (!equal(match[k], toMatch[k])) {
          return false;
        }
      }
    }
  } else {
    return match === toMatch;
  }
  return true;
}

export function mockRequest(match, response, delay=0) {
  let mock = {};
  mock.delay = delay;
  if (match instanceof Function) {
    mock.match = match;
  } else {
    mock.match = equal.bind(null, match);
  }
  mock.response = response;
  mockData.push(mock);
}

export function mockGet(match, response, delay=0) {
  return mockRequest({ ...match, method: 'GET'}, response, delay);
}

export function mockPost(match, response, delay=0) {
  return mockRequest({ ...match, method: 'POST'}, response, delay);
}

// module.exports = post;
