//
//  PAFFSecurityKeyboardNumberPad.h
//  FFProject
//
//  Created by luochenxun on 16/3/9.
//  Copyright © 2016年 pingan. All rights reserved.
//

/*!
 *  @author luochenxun(luochenxun@gmail.com), 16-03-09 10:03:14
 *
 *  数字安全键盘
 *
 *  Usage : 
 *
 *  PAFFSecurityKeyboardNumberPad *numKeyboard = [[PAFFSecurityKeyboardNumberPad alloc] initWithFrame:frame];
 *  numKeyboard.delegate = self ; // 前提是必须实现 PAFFSecurityKeyboardNumberPadDelegate 协议
 *  [self addSubView : numKeyboard];
 *
 */

#import <UIKit/UIKit.h>

/*!
 *  使用数字键盘的父 View 或 ViewController 一定要使用本协议
 */
@protocol PAFFSecurityKeyboardNumberPadDelegate <NSObject>

/*! 处理键盘的按键事件，按键的值放在 sender.accessibilityValue 中 */
- (void)inputKeyPressed:(nullable UIButton *)sender;
- (void)deleteKeyPressed:(nullable UIButton *)sender;

@end

@interface PAFFSecurityKeyboardNumberPad : UIView

@property (nonatomic, weak, nullable) id <PAFFSecurityKeyboardNumberPadDelegate> delegate;

@end
