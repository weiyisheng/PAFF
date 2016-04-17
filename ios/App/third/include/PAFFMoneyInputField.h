//
//  PAFFMoneyInputField.h
//  Pods
//
//  Created by andy on 16/3/15.
//
//

#import <UIKit/UIKit.h>

/** 赎回按钮回调 */
typedef void(^PAFFMoneyInputFieldRedemptionBtnCallBack)(NSString * money);

@interface PAFFMoneyInputField : UIView

- (instancetype)initWithFrame:(CGRect)frame btnText:(NSString *)btnText;

- (void)setRedemptionBtnCallback:(PAFFMoneyInputFieldRedemptionBtnCallBack)callback;
- (void)updateMoneyString:(NSString *)moneyString;




@end
