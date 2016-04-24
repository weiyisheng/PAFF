//
//  PAFFCheckBox.h
//  PaffLib
//
//  Created by ak on 3/18/16.
//  Copyright © 2016 ak. All rights reserved.
//

#import <UIKit/UIKit.h>

typedef enum {
    PAFFCheckBoxTypeNone=0,
    PAFFCheckBoxTypeCircle,
    PAFFCheckBoxTypeRectangle,
} PAFFCheckBoxType;

@interface PAFFCustomCheckBox : UIView

@property (nonatomic, assign) PAFFCheckBoxType type;

@property (nonatomic, strong) UIImage *normalImage;//未选状态图片
@property (nonatomic, strong) UIImage *selectedImage;//已选状态图片
@property (nonatomic, strong) UIImage *disabledImage;//禁止状态图片
@property (nonatomic, strong) NSString *text;//内容
@property (nonatomic, strong) UIFont *textFont;//内容字体
@property (nonatomic, strong) UIColor *normalTextColor;//未选状态内容颜色
@property (nonatomic, strong) UIColor *disabledTextColor;//禁止状态内容颜色
@property (nonatomic, assign) CGFloat contentSpacing;//图片和内容间的间距

@property (nonatomic, assign) BOOL enable;
@property (nonatomic, assign) BOOL selectedDisable;

@property (nonatomic, assign,getter=isSelectable) BOOL selectable;//内容是否可点击
@property (nonatomic, strong) NSURL *linkUrl;//点击内容的url
@property (nonatomic, strong) UIColor *linkColor;//点击内容的url颜色
@property (nonatomic, assign) NSRange selectedRange;//内容可点击部分
@property (nonatomic, copy) void(^selectedCallBack)(NSURL *url);//点击回调


- (id)initWithFrame:(CGRect)frame type:(PAFFCheckBoxType)type;

@end
