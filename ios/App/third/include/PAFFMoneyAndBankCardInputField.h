//
//  PAFFMoneyAndBankCardInputField.h
//  Pods
//
//  Created by andy on 16/3/16.
//
//

#import <UIKit/UIKit.h>
#import "PAFFSecurityKeyboardConstant.h"


@interface PAFFMoneyAndBankCardInputField : UIView

- (instancetype)initWithTitle:(NSString *)title subtitle:(NSString *)subtitle frame:(CGRect)frame callBack:(PAFFInuputFieldBtnCallBack)callback;

- (void)updateInputLabelTextWithString:(NSString *)text;

@end
