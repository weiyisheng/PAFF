//
//  PAFFSMSCodeInputField.h
//  Pods
//
//  Created by andy on 16/3/19.
//
//

#import <UIKit/UIKit.h>
#import "PAFFButton.h"
#import "PAFFSecurityKeyboardConstant.h"
#import "PAFFVerifyCodeTextField.h"


@interface PAFFSMSCodeInputField : UIView

@property (nonatomic, strong) PAFFVerifyCodeTextField * inputCodeView;//获取验证码按钮
@property (nonatomic, strong) PAFFGetSMSCodeBtnCallBack getSMSCodeCallBack;
@property (nonatomic, assign) NSInteger timeCount;//倒计时


- (instancetype)initWithTitle:(NSString *)title subtitle:(NSString *)subtitle mobileNo:(NSString *)mobileNo frame:(CGRect)frame callBack:(PAFFInuputFieldBtnCallBack)callback;

- (void)updateInputLabelTextWithString:(NSString *)text;

- (void)setSubTitle:(NSString *)title color:(UIColor *)color;
- (void)setMobileNoWithString:(NSString *)mobileNo;


@end
