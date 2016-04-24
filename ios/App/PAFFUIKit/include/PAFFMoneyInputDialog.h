//
//  PAFFMoneyInputDialog.h
//  Pods
//
//  Created by andy on 16/3/14.
//
//

#import <UIKit/UIKit.h>
#import "PAFFSecurityKeyboardProtocol.h"
#import "PAFFSecurityKeyboardConstant.h"
#import "PAFFSecurityKeyboardNumberPad.h"


@interface PAFFMoneyInputDialog : UIView<PAFFSecurityKeyboardNumberPadDelegate>



/** 是否可以点击空白处返回（默认允许） */
@property(nonatomic, assign) BOOL isClickShadowCanDissmiss;

- (instancetype)initWithBtnText:(NSString *)btnText callback:(PAFFSecurityPasswrodCallback)callback;
- (void)show;
- (void)dismiss;
- (void)setCallback:(PAFFSecurityPasswrodCallback)callback;

@end
