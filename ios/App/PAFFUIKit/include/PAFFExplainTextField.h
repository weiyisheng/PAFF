//
//  PAFFExplainTextField.h
//  Pods
//  金额输入框
//  Created by 陈美锦 on 16/3/8.
//
//

#import "PAFFTextField.h"


typedef enum {
    PAFFExplainTextFieldExplainType_Normal, //普通文本
    PAFFExplainTextFieldExplainType_Link    //链接文本
}PAFFExplainTextFieldExplainType;


typedef enum {
    PAFFExplainTextFieldType_Normal,        //普通输入框
    PAFFExplainTextFieldType_Sum            //金额输入框
}PAFFExplainTextFieldType;

@class PAFFExplainTextField;
@protocol PAFFExplainTextFieldDelegate <NSObject>

- (void)explainTextField:(PAFFExplainTextField *)explainField height:(CGFloat)height;

- (BOOL)explainTextField:(PAFFExplainTextField *)explainField shouldChangeCharactersInRange:(NSRange)range replacementString:(NSString *)string;
/**
 *  ！基本不用处理
 *  点击错误提示
 *
 *  @param textField PAFFTextField
 */
- (void)explainTextFieldErrorContent:(PAFFTextField *)textField;
//说明文本的点击事件，有链接文本才会回调
- (void)explainTextClickEvent:(PAFFTextField *)textField;
@end



@interface PAFFExplainTextField : UIView

/**
 *  初始化PAFFExplainTextField
 *
 *  @param txfH 输入框的高度
 *
 *  @return PAFFExplainTextField
 */
- (id)initWithTextFiledHeight:(CGFloat)txfH;


@property (nonatomic, assign) PAFFExplainTextFieldType explainTextFieldType;

@property (nonatomic, assign) id<PAFFExplainTextFieldDelegate> delegate;

@property (nonatomic, strong) PAFFTextField *textField;
@property (nonatomic, assign) CGFloat textFieldHeight;//输入框的高度
@property (nonatomic, strong) UIFont *explainFont;//说明文本的字体
@property (nonatomic, strong) UIColor *desColor;//说明文本的非链接字体颜色
@property (nonatomic, strong) UIColor *linkColor;//说明文本的链接字体颜色
@property (nonatomic, strong) UIColor *sumColor;//金额输入框的字体颜色
@property (nonatomic, copy) NSString *errMsg;//错误提示信息

//设置不同状态下的文本
- (void)setExplainText:(NSString *)text forExplainType:(PAFFExplainTextFieldExplainType)explainType;


@end
