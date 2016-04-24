//
//  PAFFMoneyAndBankCardInputDialog.h
//  Pods
//
//  Created by andy on 16/3/16.
//
//

#import <UIKit/UIKit.h>
#import "PAFFSecurityKeyboardProtocol.h"
#import "PAFFSecurityKeyboardConstant.h"
#import "PAFFSecurityKeyboardNumberPad.h"
#import "RCTBridgeModule.h"

@interface PAFFMoneyAndBankCardInputDialog : UIView<PAFFSecurityKeyboardNumberPadDelegate>


/** 是否可以点击空白处返回（默认允许） */
@property(nonatomic, assign) BOOL isClickShadowCanDissmiss;

- (instancetype)initWithTitle:(NSString *)title subTitle:(NSString *)subTitle callback:(PAFFSecurityPasswrodCallback)callback;


- (void)updateInputLabelTextWithString:(NSString *)text;
- (void)setSubTitle:(NSString *)title;

- (void)show;
- (void)dismiss;

@end


@interface NumberInputModule : NSObject <RCTBridgeModule>

@end
