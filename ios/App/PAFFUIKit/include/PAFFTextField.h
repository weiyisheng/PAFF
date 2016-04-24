//
//  PAFFTextField.h
//  Pods
//
//  Created by 陈美锦 on 16/3/7.
//
//

#import <UIKit/UIKit.h>

@interface PAFFCustomBaseTextField : UITextField
@property (nonatomic, assign) BOOL canPerformAction;
@end



@interface PAFFInputPopView : UIView

@property (nonatomic, copy) NSString *msgString;

@end




@class PAFFTextField;

typedef NS_ENUM(NSInteger, PAFFTextFieldStatus) {
    
    PAFFTextFieldStatus_Normal = 0,   //常规编辑状态
    PAFFTextFieldStatus_Force,        //编辑状态
    PAFFTextFieldStatus_UnEnable,     //不可用状态
    PAFFTextFieldStatus_Error         //错误状态
};

typedef void (^PAFFTextFieldErrorBlock)(PAFFTextField *filed);

@protocol PAFFTextFieldDelegate <NSObject>

@optional

/**
 *  获取输入框文本的回调
 *
 *  @param textField 响应回调的PAFFTextField
 *  @param text      文本
 */
- (void)textField:(PAFFTextField *)textField textContent:(NSString *)text;

/**
 *  PAFFTextField 输入字符串时的回调事件
 *
 *  @param textField 响应回调的PAFFTextField
 *  @param range     范围
 *  @param string    字符串
 *
 *  @return 是否可输入
 */
- (BOOL)textField:(PAFFTextField *)textField shouldChangeCharactersInRange:(NSRange)range replacementString:(NSString *)string;

/**
 *  ！基本不用处理
 *  错误按钮的点击事件
 *
 *  @param textField 响应回调的PAFFTextField
 */
- (void)textFieldErrorContent:(PAFFTextField *)textField;

@end


@interface PAFFTextField : UIView

@property (nonatomic, assign) BOOL isSingleLine;//是否为单行

@property (nonatomic, assign) BOOL canPerformAction;//是否可复制粘贴等

@property (nonatomic, strong) UIImage *leftImage;//左边的按钮事件

@property (nonatomic, weak) id<PAFFTextFieldDelegate> delegate;

@property (nonatomic, assign) PAFFTextFieldStatus textFieldStatus;//输入框的状态

@property (nonatomic, strong) UIView *textFieldView;//输入框和X按钮的联合视图

@property (nonatomic, strong) UIView *backView;//边框内部视图

@property (nonatomic, strong) PAFFCustomBaseTextField *txfInput;

@property (nonatomic, copy) NSString *placeholder;//

@property (nonatomic, copy) NSString *title;//要显示的标题文本
@property (nonatomic, strong) UIFont *titleFont;//标题提示字体，默认[UIFont systemFontOfSize:10]
@property (nonatomic, copy) NSString *errMsg;//错误提示信息
@property (nonatomic, strong) UIColor *titleBackgroundColor;//标题背景色

@property (nonatomic, copy) NSString *text;
@property (nonatomic, strong) UIFont *textFont;//文本框字体，默认[UIFont systemFontOfSize:16]
@property (nonatomic, strong) UIColor *textColor;//文本框字体颜色

@property (nonatomic, assign) int maxLen;//最长文本
@property (nonatomic, assign) UIKeyboardType keyboardType;//键盘类型

@property (nonatomic, assign) BOOL isSecure;



/**
 * 按钮点击回调block
 */
@property(nonatomic , copy) PAFFTextFieldErrorBlock errorBlock;


/**
 *  设置边框及提示语的颜色
 *
 *  @param borderCol  边框颜色
 *  @param titleColor 提示语颜色
 *  @param status     状态
 */
- (void)setBorderColor:(UIColor *)borderCol andTitleColor:(UIColor *)titleColor withStatus:(PAFFTextFieldStatus)status;


/**
 *  显示错误pop
 *
 *  @param show YES为显示，NO为不显示
 */
- (void)showErrMsg:(BOOL)show;

- (void)textFieldLayout;

@end



