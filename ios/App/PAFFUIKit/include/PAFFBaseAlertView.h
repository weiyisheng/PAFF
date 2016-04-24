//
//  PAFFBaseAlertView.h
//  FFProject
//
//  Created by luochenxun on 16/3/6.
//  Copyright © 2016年 pingan. All rights reserved.
//


/*!
 Usage : 
 
 PAFFBaseAlertView *alertView = [PAFFBaseAlertView alertViewWithType:PAFFBaseAlertViewTypeWithRoundButton
                                                                 msg:@"对话框提示文字"
                                                        buttonTitles:@[@"选项1",@"选项2",@"选项3"] // 根据给定的ButtonTitle数组确定按钮个数
                                                            callback:^BOOL(NSInteger buttonIndex) {
                                                                NSLog(@"click the index is %@",@(buttonIndex));
                                                                return YES;// 返回NO对话框不会 dismiss
                                                            }];
 // alertView.isClickShadowCanDissmiss = NO; // 表示不允许点击空白处折叠对话框
 [alertView show];
 
 */



#import <UIKit/UIKit.h>

/*!
 *   对话框类型
 */
typedef NS_ENUM(NSInteger, PAFFBaseAlertViewType) {
    /*! 主按钮是实心的普通对话框 */
    PAFFBaseAlertViewTypeWithRoundButton = 1,
    /*! 主按钮线性框的普通对话框  */
    PAFFBaseAlertViewTypeWithLineButton = 2,
};

// 对话框的回调。buttonIndex表示产生事件的Button从上往下数的 index
typedef BOOL (^PAFFBaseAlertViewCallback)(NSInteger buttonIndex);

@interface PAFFBaseAlertView : UIView

/** 对话框提示信息  */
@property(nonatomic, copy) NSString *msg;

#pragma mark - < Config properties >
/** 对话框类型 */
@property(nonatomic, assign) PAFFBaseAlertViewType type;

/** 是否可以点击空白处返回（默认允许） */
@property(nonatomic, assign) BOOL isClickShadowCanDissmiss;

/** 对话框用户确定后的回调 */
@property(nonatomic, copy) PAFFBaseAlertViewCallback callback;

#pragma mark - < Interface Method >

/** 获得一个对话框的实例  */
+(instancetype)alertViewWithType:(PAFFBaseAlertViewType)type msg:(NSString *)msg buttonTitles:(NSArray *)titles callback:(PAFFBaseAlertViewCallback)callback;
-(instancetype)initWithType:(PAFFBaseAlertViewType)type msg:(NSString *)msg buttonTitles:(NSArray *)titles callback:(PAFFBaseAlertViewCallback)callback;

- (void)show;
- (void)dismiss;

@end
