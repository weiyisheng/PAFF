//
//  PAFFSwitchButton.h
//  PaffLib
//
//  Created by ak on 3/19/16.
//  Copyright © 2016 ak. All rights reserved.
//

#import <UIKit/UIKit.h>

#define PAFFSwitchButtonSwitchWidth 108.0
#define PAFFSwitchButtonContentSpacing 27.0;
#define PAFFSwitchButtonOnText @"开"
#define PAFFSwitchButtonOffText @"关"
#define PAFFSwitchButtonTextFont [UIFont systemFontOfSize:30]
#define PAFFSwitchButtonTextColor PAFFUIKit_Color_Hex(0x333333)

@interface PAFFSwitchButton : UIControl

@property(nonatomic, strong) UIColor *onTintColor;//开启状态颜色
@property(nonatomic, assign) UIColor *offTintColor;//关闭状态颜色
@property(nonatomic,getter=isOn,readonly) BOOL on;//是否开启
@property (nonatomic,copy) void(^valueChanged)(BOOL isOn);//开关操作回调

- (id)initWithFrame:(CGRect)frame;
- (void)setOn:(BOOL)on animated:(BOOL)animated;
@end



@interface PAFFSwitch : UIControl

@property(nonatomic, strong) UIColor *tintColor;
@property(nonatomic, strong) UIColor *onTintColor;
@property(nonatomic, assign) UIColor *offTintColor;
@property(nonatomic,getter=isOn) BOOL on;

@property (nonatomic,copy) void(^valueChanged)(BOOL isOn);

- (id)initWithFrame:(CGRect)frame;
- (void)setOn:(BOOL)on animated:(BOOL)animated;
@end


