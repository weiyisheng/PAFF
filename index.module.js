'use strict';

var HFModuleManager = require('HFModuleManager');

// HFModuleManager.registerModule('PAFFMessage', require('PAFFMessage'));
// HFModuleManager.registerModule('OrderCenter', require('OrderCenter'));
// HFModuleManager.registerModule('Loan', require('Loan'));
// HFModuleManager.registerModule('LifeService', require('LifeService'));
// HFModuleManager.registerModule('FinancialProduct', require('FinancialProduct'));
// HFModuleManager.registerModule('PAFFPersonalCenter', require('PAFFPersonalCenter'));

HFModuleManager.registerModule('LoanCenter', require('LoanCenter'));
HFModuleManager.registerModule('DebtCenter', require('DebtCenter'));
HFModuleManager.registerModule('MainModule', require('MainModule'));
