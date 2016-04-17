//
//  PAFFUIKitFactory.h
//  Pods
//
//  Created by LQ_MAC on 16/3/16.
//
//

#import <Foundation/Foundation.h>
#import "PAFFButton.h"
#import "PAFFTextField.h"
#import "PAFFExplainTextField.h"
#import "PAFFVerifyCodeTextField.h"
#import "PAFFPullTextField.h"
#import "PAFFTextView.h"
#import "PAFFBaseAlertView.h"
#import "PAFFCustomCheckBox.h"
#import "PAFFCircleProgress.h"
#import "PAFFPicker.h"
#import "PAFFSwitchButton.h"
#import "PAFFTab.h"
#import "PAFFCommonTableViewCell.h"
#import "PAFFToast.h"
#import "PAFFSecurityInputField.h"
#import "PAFFSecurityKeyboardNumberPad.h"
#import "PAFFSecurityPasswordDialog.h"
#import "PAFFMoneyAndBankCardInputDialog.h"
#import "PAFFMoneyAndBankCardInputField.h"
#import "PAFFMoneyInputDialog.h"
#import "PAFFMoneyInputField.h"
#import "PAFFSMSCodeDialog.h"
#import "PAFFSMSCodeInputField.h"

@interface PAFFUIKitFactory : NSObject


#pragma mark -  < Button >
//**************************** Button Kit Begin ********************************

/*!  快速创建一个普通的直角按钮 */
+ (PAFFButton *)getRectBtn;

/*!  快速创建一个圆角矩形填充的按钮 */
+ (PAFFButton *)getRoundRectBtn;

/*!  快速创建一个线条矩形的按钮 */
+ (PAFFButton *)getLineRectBtn;

/*!  快速创建一个圆角线性的按钮 */
+ (PAFFButton *)getRoundLineBtn;

/*!  快速创建一个只有文字没有背景的按钮 */
+ (PAFFButton *)getOnlyTextBtn;

//**************************** Button Kit End ********************************

#pragma mark -  < TextField >
//**************************** TextField Kit Begin ********************************

/*!
 *  普通的单行输入框
 *
 *  @description leftImage设置则title不显示
 *  @param placeholder placeholder
 *  @param title       有文本时的左上角标题
 *  @param text        要显示的文本
 *  @param leftImage   左边图片
 *  @param isSecure    是否是密码输入框
 *  @param delegate    代理
 *
 *  @return PAFFTextField
 */
+ (PAFFTextField *)getTextFieldWithPlaceholder:(NSString *)placeholder
                                   andTitle:(NSString *)title
                                    andText:(NSString *)text
                               andLeftImage:(UIImage *)leftImage
                                andIsSecure:(BOOL)isSecure
                                andDelegate:(id)delegate;

/**
 *  带说明文档的单行输入框
 *
 *  @param placeholder placeholder
 *  @param title       有文本时的左上角标题
 *  @param type        输入框类型，如果为金额输入框则会自动转化成中文大写
 *  @param textSize    输入框的大小
 *  @param delegate    代理
 *
 *  @return 带说明文档的单行输入框
 */
+ (PAFFExplainTextField *)getExplainTextFieldWithPlaceholder:(NSString *)placeholder
                                                 andTitle:(NSString *)title
                                                  andType:(PAFFExplainTextFieldType)type
                                         andTextFieldSize:(CGSize)textSize
                                              andDelegate:(id)delegate;

/**
 *  验证码输入框
 *
 *  @param placeholder placeholder
 *  @param title       有文本时的左上角标题
 *  @param waitSecond  倒计时时间（单位s）
 *  @param delegate    代理
 *  @param block       点击“获取验证码”及“倒计时结束”回调
 *
 *  @return 验证码输入框
 */
+ (PAFFVerifyCodeTextField *)getVerifyCodeTextFieldWithPlaceholder:(NSString *)placeholder
                                                       andTitle:(NSString *)title
                                                  andWaitSecond:(NSInteger)waitSecond
                                                    andDelegate:(id)delegate
                                    andVerifyCodeTextFieldBlock:(PAFFVerifyCodeTextFieldBlock)block;

/**
 *  下拉框
 *
 *  @param placeholder placeholder
 *  @param title       有文本时的左上角标题
 *  @param block       点击下拉框的箭头的点击事件回调
 *
 *  @return 下拉框
 */
+ (PAFFPullTextField *)getPullTextFieldWithPlaceholder:(NSString *)placeholder
                                           andTitle:(NSString *)title
                                     withClickBlock:(PAFFPullTextFieldSelectBlock)block;

/**
 *  多行输入框
 *
 *  @param placeholder placeholder
 *  @param title       有文本时的左上角标题
 *  @param delegate    代理
 *
 *  @return 多行输入框
 */
+ (PAFFTextView *)getTextViewWithPlaceholder:(NSString *)placeholder
                                 andTitle:(NSString *)title
                              andDelegate:(id)delegate;
//**************************** TextField Kit End ********************************

#pragma mark -  < AlertView >
/**
 *  弹窗
 *
 *  @param type     类型
 *  @param msg      显示内容
 *  @param titles   按钮文字
 *  @param callback 回调
 *
 *  @return 弹窗
 */
+ (PAFFBaseAlertView *)getAlertViewWithType:(PAFFBaseAlertViewType)type
                                        msg:(NSString *)msg
                               buttonTitles:(NSArray *)titles
                                   callback:(PAFFBaseAlertViewCallback)callback;

#pragma mark -  < CheckBox >
/**
 *  单选框
 *
 *  @param frame 位置，大小
 *  @param type  类型
 *
 *  @return 单选框
 */
+ (PAFFCustomCheckBox *)getCheckBoxWithFrame:(CGRect)frame
                                  type:(PAFFCheckBoxType)type;

#pragma mark -  < CircleProgress >
/**
 *  圆形进度条
 *
 *  @return 圆形进度条
 */
+ (PAFFCircleProgress *)getCircleProgress;

#pragma mark -  < Picker >
/**
 *  选择器
 *
 *  @param frame          位置,大小
 *  @param title          标题
 *  @param dataSource     数据源
 *  @param cancelCallBack 取消回调
 *  @param doneCallBack   选择回调
 *
 *  @return 选择器
 */
+ (PAFFPicker *)getPickerWithFrame:(CGRect)frame
                             title:(NSString *)title
                        dataSource:(id<PAFFPickerDataSource>)dataSource
                    cancelCallBack:(void(^)(void))cancelCallBack
                      doneCallBack:(void(^)(NSArray *selectedRowIndexItems,NSArray *selectedRowTitleItems))doneCallBack;

#pragma mark -  < SwitchButton >
/**
 *  开关按钮
 *
 *  @param frame 位置大小
 *
 *  @return  切换按钮
 */
+ (PAFFSwitchButton *)initWithFrame:(CGRect)frame;

#pragma mark -  < Tab >
/**
 *  tab栏
 *
 *  @param frame               位置大小
 *  @param items               tab标题集
 *  @param padding             间距
 *  @param didSelectedCallBack 选择回调
 *
 *  @return tab栏
 */
+ (PAFFTab *)getTabWithFrame:(CGRect)frame
                       items:(NSArray<NSString *> *)items
                 itemPadding:(CGFloat)padding
         didSelectedCallBack:(void(^)(NSInteger selectedIndex))didSelectedCallBack;

#pragma mark -  < TableViewCell >
/**
 *  列表Cell
 *
 *  @param style           类型
 *  @param reuseIdentifier 重用id
 *
 *  @return 列表Cell
 */
+ (PAFFCommonTableViewCell *)getCommonTableViewCellWithStyle:(UITableViewCellStyle)style
                                             reuseIdentifier:(NSString *)reuseIdentifier;


#pragma mark -  < SecurityKeyboard >
/**
 *  安全输入框
 *
 *  @param frame 位置大小
 *  @param len   限制长度
 *
 *  @return 安全输入框
 */
+ (PAFFSecurityInputField *)getSecurityInputFieldWithFrame:(CGRect)frame
                                                 maxLenght:(int)len;

/**
 *  安全数字键盘
 *
 *  @return 安全数字键盘
 */
+ (PAFFSecurityKeyboardNumberPad *)getSecurityKeyboardNumberPad;

/*!
 *  @author luochenxun(luochenxun@gmail.com), 16-03-07 17:03:47
 *
 *  @brief 初始化方法
 *
 *  @param title    对话框Title
 *  @param msg      对话框提示信息
 *  @param callback 回调方法，其中isCancle表示用户是输入完成还是取消
 *
 */
+ (PAFFSecurityPasswordDialog *)getSecurityPasswordDialogWithTitle:(NSString *)title
                                                               msg:(NSString *)msg
                                                          callback:(PAFFSecurityPasswrodCallback)callback;
/**
 *  金额银行卡对话输入框
 *
 *  @param title    对话框主标题
 *  @param subTitle 对话框副标题
 *  @param callback 回调
 *
 *  @return 银行卡对话输入框
 */
+ (PAFFMoneyAndBankCardInputDialog *)getMoneyAndBankCardInputDialogWithTitle:(NSString *)title
                                                                    subTitle:(NSString *)subTitle
                                                                    callback:(PAFFSecurityPasswrodCallback)callback;

/**
 *  金额银行卡输入框
 *
 *  @param title    输入框标题
 *  @param subtitle 输入框子标题
 *  @param frame    位置大小
 *  @param callback 回调
 *
 *  @return 金额银行卡输入框
 */
+ (PAFFMoneyAndBankCardInputField *)getMoneyAndBankCardInputFieldWithTitle:(NSString *)title
                                                                  subtitle:(NSString *)subtitle
                                                                     frame:(CGRect)frame
                                                                  callBack:(PAFFInuputFieldBtnCallBack)callback;
/**
 *  金额输入对话框
 *
 *  @param btnText  按钮文字
 *  @param callback 回调
 *
 *  @return 金额输入对话框
 */
+ (PAFFMoneyInputDialog *)getMoneyInputDialogWithBtnText:(NSString *)btnText
                                                callback:(PAFFSecurityPasswrodCallback)callback;

/**
 *  金额输入框
 *
 *  @param frame   位置大小
 *  @param btnText 按钮输入框
 *
 *  @return 金额输入框
 */
+ (PAFFMoneyInputField *)getMoneyInputFieldWithFrame:(CGRect)frame
                                             btnText:(NSString *)btnText;

/**
 *  信息对话框
 *
 *  @param title    主标题
 *  @param subTitle 副标题
 *  @param callback 回调
 *
 *  @return 信息对话框
 */
+ (PAFFSMSCodeDialog *)getSMSCodeDialogWithTitle:(NSString *)title
                                        subTitle:(NSString *)subTitle
                                        mobileNo:(NSString *)mobileNo
                                        callback:(PAFFSecurityPasswrodCallback)callback;

/**
 *  信息输入框
 *
 *  @param title    主标题
 *  @param subtitle 副标题
 *  @param frame    位置大小
 *  @param callback 回调
 *
 *  @return 信息输入框
 */
+ (PAFFSMSCodeInputField *)getSMSCodeInputFieldWithTitle:(NSString *)title
                                                subtitle:(NSString *)subtitle
                                                mobileNo:(NSString *)mobileNo
                                                   frame:(CGRect)frame
                                                callBack:(PAFFInuputFieldBtnCallBack)callback;
@end
