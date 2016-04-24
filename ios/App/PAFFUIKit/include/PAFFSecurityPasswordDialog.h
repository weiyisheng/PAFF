//
//  PAFFSecurityPasswordDialog.h
//  FFProject
//
//  Created by luochenxun on 16/3/6.
//  Copyright © 2016年 pingan. All rights reserved.
//

// Usage :
//    PAFFSecurityPasswordDialog *passwordDialog;
//    passwordDialog = [[PAFFSecurityPasswordDialog alloc]
//                                                  initWithTitle:@"输入交易密码"
//                                                  msg:@"赎回金额 ￥600"
//                                                  callback:^(BOOL isCancel, NSString *inputText) {
//                                                      // isCancel 表示用户主动退出输入
//                                                      if (!isCancel) {
//                                                          // 输入成功后的回调
//                                                          [HFInterface_Toast
//                                                               showToast:[NSString stringWithFormat:@"%@%@", @"输入成功,您输入的是", [passwordDialog decode:inputText]
//                                                               duration:3
//                                                               title:nil
//                                                               postion:HFToastPosition_Center];
//                                                      }
//                                                  }];
//    // 如果要设置加密算法，这样得到的成功回调方法中的 inputText就是加密后的密文
//    passwordDialog.encryDelegate = [[xxEncryptMethod alloc]init];
//    [passwordDialog show];

#import <UIKit/UIKit.h>
#import "PAFFSecurityKeyboardProtocol.h"
#import "RCTBridgeModule.h"

// 安全键盘的回调， result表示用户是否放弃输入
typedef void (^PAFFSecurityPasswrodCallback)(BOOL isCancel, NSString *inputText);
// 用户按忘记密码的回调
typedef void (^PAFFSecurityPasswrodForgetCallback)();

@interface PAFFSecurityPasswordDialog : UIView <RCTBridgeModule>

/** 标题  */
@property(nonatomic, copy) NSString *title;
@property(nonatomic, strong) UILabel *titleLabel;

/** 对话框提示信息  */
@property(nonatomic, copy) NSString *msg;
@property(nonatomic, strong) UILabel *msgLabel;

/** 对话框下方小按钮的方案 */
@property(nonatomic, copy) NSString *smallBtnText;

/** 最大可输入的字符数  */
@property(nonatomic, assign) int maxLength;

/** 是否输出加密字符（默认开启） */
@property(nonatomic, strong) id<PAFFSecurityKeyboardEncryptDelegate> encryDelegate;

/** 是否可以点击空白处返回（默认允许） */
@property(nonatomic, assign) BOOL isClickShadowCanDissmiss;

/** 用户输入的字符 */
@property(nonatomic, copy) NSMutableString *inputText;

/** 用户输入完或取消后的回调 */
@property(nonatomic, copy) PAFFSecurityPasswrodCallback callback;

/** 用户按忘记密码的回调 */
@property(nonatomic, copy) PAFFSecurityPasswrodForgetCallback forgetPswCallback;

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
-(instancetype)initWithTitle:(NSString *)title msg:(NSString *)msg callback:(PAFFSecurityPasswrodCallback)callback;

- (void)show;
- (void)dismiss;

-(void)setCallback:(PAFFSecurityPasswrodCallback)callback;
-(void)setForgetPswCallback:(PAFFSecurityPasswrodForgetCallback)callback;


@end