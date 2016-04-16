'use strict';

var HFModuleManager = require('HFModuleManager');

// HFModuleManager.registerModule('PAFFMessage', require('PAFFMessage'));
// HFModuleManager.registerModule('OrderCenter', require('OrderCenter'));
// HFModuleManager.registerModule('Loan', require('Loan'));
// HFModuleManager.registerModule('LifeService', require('LifeService'));
// HFModuleManager.registerModule('FinancialProduct', require('FinancialProduct'));
// HFModuleManager.registerModule('PAFFPersonalCenter', require('PAFFPersonalCenter'));

HFModuleManager.registerModule('LoanCenter', require('LoanCenter')); // 存贷通申请
//HFModuleManager.registerModule('DebtCenter', require('DebtCenter')); //负债详情
HFModuleManager.registerModule('AddProperty', require('AddProperty')); //资产加挂
HFModuleManager.registerModule('PropertyCenter', require('PropertyCenter')); //资产详情

HFModuleManager.registerModule('MainModule', require('MainModule')); //临时主页面
