//
//  PAFFVerifyCodeTextField.h
//  Pods
//
//  Created by 陈美锦 on 16/3/9.
//
//

#import "PAFFTextField.h"

@class  PAFFVerifyCodeTextField;


typedef enum {
    PAFFVerifyCodeTextFieldStatuSend,
    PAFFVerifyCodeTextFieldStatuTimerEnd
}PAFFVerifyCodeTextFieldStatus;

typedef void(^PAFFVerifyCodeTextFieldBlock)(PAFFVerifyCodeTextField *textField, PAFFVerifyCodeTextFieldStatus status);

@interface PAFFVerifyCodeTextField : PAFFTextField


@property (nonatomic, copy) PAFFVerifyCodeTextFieldBlock verifyCodeTextFieldBlock;

@property (nonatomic, assign) NSInteger waitSecond;//等待时间

@property (nonatomic, strong) UIColor *verifyCodeColor;//字体颜色

@property (nonatomic, strong) UIFont *verifyCodeFont;//字体大小

@property (nonatomic, copy) NSString *preSendText; // 点击发送之前显示的字符串
@property (nonatomic, copy) NSString *sendingText; // 发送中显示的字符串
@property (nonatomic, copy) NSString *afterSendText; // 发送超时后字符串
//开始计时
- (void)beginTimer;

@end
