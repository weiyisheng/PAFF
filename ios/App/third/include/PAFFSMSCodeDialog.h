//
//  PAFFSMSCodeDialog.h
//  Pods
//
//  Created by andy on 16/3/19.
//
//

#import <UIKit/UIKit.h>
#import "PAFFSecurityKeyboardNumberPad.h"
#import "PAFFSecurityKeyboardConstant.h"




@interface PAFFSMSCodeDialog : UIView<PAFFSecurityKeyboardNumberPadDelegate>


@property (nonatomic, assign) BOOL isClickShadowCanDissmiss;
@property (nonatomic, strong) PAFFGetSMSCodeBtnCallBack getSMSCodeCallBack;


- (instancetype)initWithTitle:(NSString *)title subTitle:(NSString *)subTitle mobileNo:(NSString *)mobileNo callback:(PAFFSecurityPasswrodCallback)callback;

- (void)show;
- (void)dismiss;
- (void)hide;

- (void)setSubTitle:(NSString *)title color:(UIColor *)color;
- (void)setMobilePhoneWithString:(NSString *)mobileNo;


@end
