//
//  PAFFSecurityKeyboardConstant.h
//  Pods
//
//  Created by andy on 16/3/15.
//
//

#ifndef PAFFSecurityKeyboardConstant_h
#define PAFFSecurityKeyboardConstant_h

#import "PAFFCommonThemeMarco.h"
// **********  配置 ************
// 要输入的密码个数
#define kDefaultMaxLenght 6
#define kDefaultSMSCodeMaxLenght 6
#define kDefaultTimeCount 60 //默认 短信验证码 倒计时 60s

// **********  Frame size ************
// 键盘的缩放比例（以宽320为基准）
#define kKeyBoardScale (([[UIScreen mainScreen]bounds].size.width) / 375.0)
#define kFrameHeight (390 * kKeyBoardScale)
#define kKeyboardHeight (200 * kKeyBoardScale)
#define kInputFrameHeight (kFrameHeight - kKeyboardHeight)
#define kMoneyInputFrameHeight (54)
#define kMoneyIconWidth (20)
#define kMoneyLabelPadWithIcon   (18)
#define kViewXOffset_1a (18) //一些view和左边缘的间距 1a
#define kViewYOffset_1a (18) //一些view和上边缘的间距 1a
#define kViewYOffset_3a (54) //一些view和上边缘的间距 3a


// **********  layout size ************
#define kEdgePadding (18 * kKeyBoardScale)
#define kMsgPadding (18 * kKeyBoardScale)

// **********  Color & font ************
#define kBtnTextSize [UIFont systemFontOfSize:(18 * kKeyBoardScale)]
#define kBtnTextSizeSmall [UIFont systemFontOfSize:(15 * kKeyBoardScale)]
#define kTitleLableTextSize [UIFont systemFontOfSize:(22 * kKeyBoardScale)]
#define kMsgLabelTextSize [UIFont systemFontOfSize:(16 * kKeyBoardScale)]





// 安全键盘的回调， result表示用户是否放弃输入
typedef void (^PAFFSecurityPasswrodCallback)(BOOL isCancel, NSString *inputText);

// 数字输入区域 确认，取消 按钮回调
typedef void(^PAFFInuputFieldBtnCallBack)(BOOL isCancel,  NSString * inputText);

// 获取验证码回调
typedef void (^PAFFGetSMSCodeBtnCallBack)(void);





#endif /* PAFFSecurityKeyboardConstant_h */
