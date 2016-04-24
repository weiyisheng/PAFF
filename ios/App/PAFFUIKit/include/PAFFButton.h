//
//  PAFFButton.h
//  Pods
//
//  Created by junming on 2/25/16.
//
//

#import <UIKit/UIKit.h>

typedef NS_ENUM(NSInteger, PAFFButtonType) {
    
    PAFFButtonType_Normal = 1,   //普通的直角按钮
    PAFFButtonType_Round,        //圆角按钮
    PAFFButtonType_Line,         //线框按钮
    PAFFButtonType_Empty         //纯文字的按钮
};

typedef void (^PAFFButtonBlock)(id btn);

@interface PAFFButton : UIButton

/**
 * 按钮点击回调block
 */
@property(nonatomic , copy) PAFFButtonBlock block;


/**
 * 圆角半径
 */
@property(nonatomic, assign) CGFloat cornerRadius;


/**
 * 线框按钮边线宽度
 * 按钮类型为PAFFButtonType_Line时有效
 */
@property(nonatomic, assign) CGFloat borderWidth;


/**
 * 线框按钮边线颜色
 * 按钮类型为PAFFButtonType_Line时有效
 */
@property(nonatomic, strong) UIColor *borderColor;


/**
 * 线框按钮高亮时的边线颜色
 * 按钮类型为PAFFButtonType_Line时有效
 */
@property(nonatomic, strong) UIColor *highlightedBorderColor;


/**
 * 线框按钮disable时的边线颜色
 * 按钮类型为PAFFButtonType_Line时有效
 */
@property(nonatomic, strong) UIColor *disableBorderColor;


/**
 * 创建按钮
 *
 * @param type  按钮类型
 */
-(instancetype)initWithType:(PAFFButtonType)type;


/**
 * 设置按钮在不同状态下的背景颜色
 *
 * @param backgroundColor 背景颜色
 * @param state           按钮状态
 */
-(void)setBackgroundColor:(UIColor *)backgroundColor forState:(UIControlState)state;

@end
