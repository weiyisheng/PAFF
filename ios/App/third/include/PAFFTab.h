//
//  PAFFTab.h
//  PaffLib
//
//  Created by ak on 3/20/16.
//  Copyright © 2016 ak. All rights reserved.
//

#import <UIKit/UIKit.h>

#define PAFFTabFont [UIFont systemFontOfSize:20]
#define PAFFTabNormalColor PAFFUIKit_Color_Hex(0x999999)
#define PAFFTabSelectedColor PAFFUIKit_Color_Hex(0xe60012)
#define PAFFTabBottomLineColor PAFFUIKit_Color_Hex(0xe60012)
#define PAFFTabBottomLineHeight 3.0



@interface PAFFTab : UIView

@property (nonatomic, assign) NSInteger selectedIndex;
@property (nonatomic, assign) NSInteger tabCount;

/*!
 *  @brief 初始化方法
 *
 *  @param frame               tab frame
 *  @param items               选项内容数组
 *  @param padding             选项内容的间距
 *  @param didSelectedCallBack 选择回调
 *
 *  @return
 */
- (id)initWithFrame:(CGRect)frame items:(NSArray<NSString *> *)items itemPadding:(CGFloat)padding didSelectedCallBack:(void(^)(NSInteger selectedIndex))didSelectedCallBack;

- (void)setSelectedIndex:(NSInteger)index animated:(BOOL)animated;


@end