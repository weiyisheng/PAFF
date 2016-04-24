//
//  PAFFSecurityInputField.h
//  FFProject
//
//  Created by luochenxun on 16/3/7.
//  Copyright © 2016年 pingan. All rights reserved.
//
/*!
 *  输入框，根据屏幕宽画出等比的格子。 并依据用户输入更新显示. <br>
 *  主要思想是把这个密码格子框当作一个栈来操作。用户输入一个字符相当于入栈了一个黑点。删除一个字符相当于出栈一个黑点。
 *
 *  Usage :
 *  
 *
 */


#import <UIKit/UIKit.h>

@interface PAFFSecurityInputField : UIView

/*! 向输入框输入一个字符，增加一个星形图标 */
-(void)pushOneText;

/*! 向输入框减少一个字符，减少一个星形图标 */
-(void)popOneText;


- (instancetype)initWithFrame:(CGRect)frame maxLenght:(int)len;

@end