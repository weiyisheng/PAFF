//
//  PAFFPopoverView.h
//  ReactTest2
//
//  Created by arnold on 16/4/8.
//  Copyright © 2016年 pingan. All rights reserved.
//

#import <CoreGraphics/CoreGraphics.h>
#import <UIKit/UIKit.h>
#import "RCTBridgeModule.h"

UIKIT_EXTERN NSString* const PAFFPopoverPriorityHorizontal;
UIKIT_EXTERN NSString* const PAFFPopoverPriorityVertical;

@class PAFFPopoverView, PAFFPopoverViewAnimator;
typedef void (^PAFFPopoverViewConfiguration)(PAFFPopoverView* popoverView);
typedef void (^PAFFPopoverViewItemHandler)(UIButton* sender, NSUInteger index);
typedef void (^PAFFPopoverViewAnimation)(PAFFPopoverView* popoverView, BOOL animated, CGRect targetRect);

typedef NS_ENUM(NSUInteger, PAFFPopoverArrowDirection) {
  PAFFPopoverArrowDirectionAny,
  PAFFPopoverArrowDirectionTop,
  PAFFPopoverArrowDirectionLeft,
  PAFFPopoverArrowDirectionBottom,
  PAFFPopoverArrowDirectionRight
};

typedef NS_ENUM(NSUInteger, PAFFPopoverTranslucentStyle) {
  PAFFPopoverTranslucentDefault,
  PAFFPopoverTranslucentLight
};

@interface PAFFPopoverViewAnimator : NSObject
@property (copy, nonatomic) PAFFPopoverViewAnimation showing;
@property (copy, nonatomic) PAFFPopoverViewAnimation hiding;
+ (instancetype)animatorWithShowing:(PAFFPopoverViewAnimation)showing
                             hiding:(PAFFPopoverViewAnimation)hiding;
@end
@interface UIWindow (PAFFPopover)

@property (readonly, nonatomic) NSUInteger referenceCount;
@property (readonly, nonatomic) UITapGestureRecognizer* tap;
@property (readonly, nonatomic) UIPanGestureRecognizer* pan;
@property (readonly, nonatomic) NSMutableArray* registeredPopoverViews;
@property (assign, nonatomic) UIWindow* appKeyWindow;

- (void)registerPopoverView:(PAFFPopoverView*)popoverView;

- (void)unregisterPopoverView:(PAFFPopoverView*)popoverView;
@end

@interface PAFFPopoverView : UIView<RCTBridgeModule>

@property (assign, nonatomic) CGPoint offsets UI_APPEARANCE_SELECTOR;
@property (readonly, nonatomic) CGSize minSize;
@property (copy, nonatomic) NSString* priority UI_APPEARANCE_SELECTOR;
@property (assign, nonatomic) CGFloat arrowAngle UI_APPEARANCE_SELECTOR;
@property (assign, nonatomic) BOOL dimBackground;
@property (assign, nonatomic) CGFloat cornerRadius UI_APPEARANCE_SELECTOR;
@property (assign, nonatomic) CGFloat arrowConstant UI_APPEARANCE_SELECTOR;
@property (readonly, nonatomic) UIView* contentView;
@property (assign, nonatomic) CGFloat arrowCornerRadius UI_APPEARANCE_SELECTOR;
@property (readonly, nonatomic) CGPoint arrowPosition;
@property (readonly, nonatomic) CGPoint animatedFromPoint;
@property (readonly, nonatomic) UIEdgeInsets contentViewInsets;
@property (readonly, nonatomic) PAFFPopoverArrowDirection arrowDirection;
@property (assign, nonatomic) PAFFPopoverArrowDirection preferredArrowDirection UI_APPEARANCE_SELECTOR;
@property (assign, nonatomic, getter = isTranslucent) BOOL translucent;
@property (assign, nonatomic) PAFFPopoverTranslucentStyle translucentStyle UI_APPEARANCE_SELECTOR;
@property (assign, nonatomic, getter = isShowsOnPopoverWindow) BOOL showsOnPopoverWindow;
@property (assign, nonatomic, getter = isLockBackground) BOOL lockBackground;
@property (assign, nonatomic, getter = isHideOnTouch) BOOL hideOnTouch;

@property (strong, nonatomic) UIColor* backgroundDrawingColor UI_APPEARANCE_SELECTOR;
@property (strong, nonatomic) PAFFPopoverViewAnimator* animator UI_APPEARANCE_SELECTOR;
@property (readonly, nonatomic) UIWindow* popoverWindow;
@property (readonly, nonatomic) UIView* backgroundView;
@property (copy, nonatomic) dispatch_block_t showsCompletion;
@property (copy, nonatomic) dispatch_block_t hidesCompletion;
@property (assign, nonatomic) CGFloat preferredWidth UI_APPEARANCE_SELECTOR;
@property (assign, nonatomic) UIEdgeInsets contentInsets UI_APPEARANCE_SELECTOR;
@property (assign, nonatomic) CGFloat padding UI_APPEARANCE_SELECTOR;

@property (copy, nonatomic) NSString* title;
@property (copy, nonatomic) NSString* detail;
@property (strong, nonatomic) UIFont* titleFont UI_APPEARANCE_SELECTOR;
@property (strong, nonatomic) UIColor* titleTextColor UI_APPEARANCE_SELECTOR;
@property (strong, nonatomic) UIFont* detailFont UI_APPEARANCE_SELECTOR;
@property (strong, nonatomic) UIColor* detailTextColor UI_APPEARANCE_SELECTOR;

/**
 *  显示提示框
 *
 *  @param rect       响应显示区域
 *  @param animated   是否动画
 *  @param completion 回调
 */
- (void)showInRect:(CGRect)rect
          animated:(BOOL)animated
        completion:(dispatch_block_t)completion;

/**
 *  隐藏提示框
 *
 *  @param rect       响应显示区域
 *  @param delay      延迟时间
 *  @param completion 回调
 */
- (void)hideAnimated:(BOOL)animated
          afterDelay:(NSTimeInterval)delay
          completion:(dispatch_block_t)completion;

/**
 *  显示提示框
 *
 *  @param rect       响应显示区域
 *  @param animated   是否动画
 *  @param duration   显示时间
 */
- (void)showInRect:(CGRect)rect
          animated:(BOOL)animated
          duration:(NSTimeInterval)duration;

/**
 *  显示提示框
 *
 *  @param view       响应显示View
 *  @param animated   是否动画
 *  @param duration   显示时间
 */
- (void)showFromView:(UIView*)view
            animated:(BOOL)animated
            duration:(NSTimeInterval)duration;

/**
 *  显示提示框
 *
 *  @param view       响应显示View
 *  @param animated   是否动画
 *  @param completion 回调
 */
- (void)showFromView:(UIView*)view
            animated:(BOOL)animated
          completion:(dispatch_block_t)completion;
@end
