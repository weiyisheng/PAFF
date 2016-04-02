//
//  PAFFCommonThemeMarco.h
//  FFProject
//
//  Created by Yangtsing.Zhang on 15/11/20.
//  Copyright © 2015年 pingan. All rights reserved.
//  此头文件用于集中管理项目使用的配色，字体，图片资源名
//  同时用于主题自动化配置

#ifndef PAFFCommonThemeMarco_h
#define PAFFCommonThemeMarco_h

#import "UIColor-PAFFUIkit.h"

//便利宏
#define PA_COLOR_FOR_KEY(__x) [UIColor colorWithHexString: __x]
#define PA_SYS_FONT_FOR_SIZE(__x) [UIFont systemFontOfSize: __x] //系统字体
//平方字体
#define PINGFANG_FONT_FOR_SIZE(__x) [UIFont fontWithName:@"PingFangSC Light" size: __x]

#define PA_HelveticaNeue_Light_FOR_SIZE(__x) [UIFont fontWithName:@"HelveticaNeue-Light" size: __x]  //纤细字体

/*===============Color begin===============*/

#define kCarViolation_detailText_lightGrey  @"#cccccc"  // 浅灰色字
#define kCardBox_detailText_brown           @"#675853"  // 棕色描述文字
#define kCardBox_detailText_red             @"#ff3222"  // 红色文本颜色
#define kCardBox_listbg_grey                @"#cccccc"  // 外框描边色
#define kCardBox_titlebg_white              @"#ffffff"  // 标题背景色
#define kCardBox_topInfor_brownText         @"#beb8b6"  // 棕色字  （待统一）
#define kCommon_bg_brown                    @"#63534e"  // 顶部深棕色
#define kCommon_bg_lightGrey                @"#f7f7f7"  // 浅灰色
#define kCommon_bottomTab_bg                @"#ffffff"  // 底部tab背景颜色
#define kCommon_bottomTab_text_nor          @"#999999"  // 文字一般颜色
#define kCommon_bottomTab_text_selected     @"#6a534f"  // 文字选中颜色
#define kCommon_btnBg_darkBrown_nor         @"#63534e"  // 按钮背景-深棕色-一般颜色（带切图）
#define kCommon_btnBg_darkBrown_pre         @"#4d413e"  // 按钮背景-深棕色-按下颜色（带切图）
#define kCommon_btnBg_lightYellow_nor       @"#ffe7bc"  // 按钮背景-浅黄色-一般颜色（带切图）
#define kCommon_btnBg_lightYellow_pre       @"#fddca1"  // 按钮背景-浅黄色-按下颜色（带切图）
#define kCommon_btnBg_red_nor               @"#e43523"  // 按钮背景-红色-一般颜色（ 带切图）
#define kCommon_btnBg_red_pre               @"#db2000"  // 按钮背景-红色-按下颜色（ 带切图）
#define kCommon_btnText_darkBrown           @"#63534e"  // 按钮文字-深棕色
#define kCommon_btnText_lightYellow         @"#ffe7bc"  // 按钮文字-浅黄色
#define kCommon_btnText_white               @"#ffffff"  // 按钮文字-白色
#define kCommon_detailText_lightGrey        @"#999999"  // 浅灰色字
#define kCommon_detailText_midGrey			@"#666666"	// 中灰色字
#define kCommon_titleText_darkGrey			@"#333333"	//深灰色标题字
#define kCommon_detailText_orange           @"#ff7800"  // 橙色描述字
#define kCommon_detailText_red              @"#e43523"  // 红色描述字
#define kCommon_detailText_red02            @"#e73315"  // 红色描述字（多用于“用户协议”数字、等）
#define kCommon_detailText_supperLightGrey  @"#dddddd"  // 超浅灰色描述字（用于输入文本前的提示语）
#define kCommon_line_Grey                   @"#dddddd"  // 灰色
#define kCommon_listBg_white_nor            @"#ffffff"  // 白色
#define kCommon_listBg_white_pre            @"#eeeeee"  // 按下颜色
#define kCommon_text_brown                  @"#6a534f"  // 棕色标题字
#define kCommon_text_darkBrown              @"#63534e"  // 深棕色文字(标题字或用于输入框文字及左边的提示语)
#define kCommon_topInforText_brown          @"#b59792"  // 棕色字
#define kCommon_topInforText_lightyellow    @"#ffe7bc"  // 浅黄色字
#define kCommon_topInforText_white          @"#ffffff"  // 白色字
#define kCommon_tostBg_black                @"#99000000"// tost的提示语颜色背景色  （带切图）
#define kCommon_tostText_white              @"#ffffff"  // tost的提示语颜色-白色
#define kFinancin_listDetailText_lightBrown @"#9a8f8d"  // 浅棕色描述字
#define kFinancin_listTitleText_red         @"#d78d85"  // “保险”
#define kHomePage_listTitleText_lightBrown  @"#9a8e8c"  // 浅棕色描述字
#define kLifeService_list_priceText         @"#f2761c"  // 价格颜色
#define kLifeService_menuTab_text_nor       @"#63534d"  // 一般状态文字颜色
#define kLifeService_menuTab_text_selected  @"#f19149"  // 选中文字颜色
#define kLogin_DetailText_brown             @"#6a534f"  // 棕色描述字（温馨提示等文本）
#define kMessageCenter_btnBg_red            @"#ff675b"  // 删除按钮背景颜色
#define kMessageCenter_btntext_red          @"#ffffff"  // 按钮文字颜色-白色
#define kCredit_detailText_brown          @"#ad9d98"  // 深棕色描述字
#define kCredit_detailText_red            @"#e73315"  // 红色字
#define kCredit_progressBarEdge_end       @"#825c44"  // 进度圈外围结束颜色
#define kCredit_progressBarEdge_start     @"#82484b"  // 进度圈外围起始颜色
#define kCredit_progressBarSpot_end       @"#746546"  // 进度圈圆点颜色
#define kCredit_progressBar_end           @"#ffce00"  // 进度圈结束颜色
#define kCredit_progressBar_start         @"#ff0048"  // 进度圈起始颜色
#define kCredit_textBg_darkGrey           @"#33363a"  // 信用分深灰色背景
#define kCredit_text_black                @"#000000"  // 按钮文字颜色
#define kCredit_yellow                    @"#f8ca29"  // 鲜黄色字、按钮背景颜色
#define finance_headerLabel_lightGray @"#9c8680"//理财头部各种label的浅灰文字颜色
#define kApply_separator_lightGray          @"#dddddd"  //分割线浅灰色
#define kNavigationBarTitltColor            @"#000000"  //导航栏title的颜色


//标准控件
#define kInputAreaBackgroundColor           @"#f9f9f9"  //标准控件: 输入区域背景色
#define kMoneyInputBtnColor                 @"#e60012"  //标准控件: 金额输入框，赎回按钮颜色
#define kMoneyInputBackgroundColor          @"#ffffff"  //标准控件: 金额输入框区域背景颜色
#define kKeyboardBackgroundColor            @"#bfbfbf"  //标准控件: 数字键盘背景色
#define kBtnTextColor                       @"#3399ff"  //标准控件: 数字键盘中数字按钮
#define kBtnTextPressColor                  @"#99aaff"  //标准控件: 数字键盘背景色
#define kKeyboardBlankColor                 @"#d1d5db"  //标准控件: 数字键盘中删除按钮
#define kKeyboardKeyPressColor              @"#eeeeee"  //标准控件: 数字键盘中删除按钮
#define kCancelButtonWordColor              @"#333333"  //标准控件: 取消按钮文字颜色
#define kDoneButtonWordColor                @"#333333"  //标准控件: 确认按钮文字颜色

/*===============Color finish==============*/




/*===============Font begin===============*/
//正文系统字体
#define kMainTextSize_SysFont   [UIFont systemFontOfSize:16]
//NavigationBar标题系统字体
#define kNaviBarTitleSize_SysFont   [UIFont systemFontOfSize:20]

/*===============Font finish==============*/


#endif /* PAFFCommonThemeMarco_h */
