//
//  PAFFCircleProgress.h
//  PaffLib
//
//  Created by ak on 3/16/16.
//  Copyright © 2016 ak. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface PAFFCircleProgress : UIView

@property (nonatomic, strong) UIColor *trackTintColor; //底线颜色
@property (nonatomic, assign) CGFloat trackWidth;//底线宽度

@property (nonatomic, strong) UIColor *progressTintColor;//进度条线颜色
@property (nonatomic, assign) CGFloat progressWidth;//进度条线宽度
@property (nonatomic, assign) CGFloat progress;//进度

@property (nonatomic, strong) UIColor *titleColor;//title颜色
@property (nonatomic, strong) NSString *title;
@property (nonatomic, strong) UIFont *titleFont;//titile字体

@property (nonatomic, assign) CGFloat startAngle; // 起始角度
@property (nonatomic, assign) BOOL clockwise; // 是否顺时针

@end
