//
//  PAFFPicker.h
//  PaffLib
//
//  Created by ak on 3/20/16.
//  Copyright © 2016 ak. All rights reserved.
//

#import <UIKit/UIKit.h>

#define PAFFPickerMaskViewColor [UIColor colorWithRed:0 green:0 blue:0 alpha:0.5];

#define PAFFPickerTopBarHeight 60.0
#define PAFFPickerTopBarColor [UIColor whiteColor]

#define PAFFPickerTopBarTitleColor PAFFUIKit_Color_Hex(0x333333)
#define PAFFPickerTopBarTitleFont [UIFont systemFontOfSize:22]
#define PAFFPickerTopBarButtonSpacing 18.0
#define PAFFPickerTopBarButtonTitleFont [UIFont systemFontOfSize:18]
#define PAFFPickerTopBarLeftButtonTitle @"取消"
#define PAFFPickerTopBarLeftButtonTitleColor PAFFUIKit_Color_Hex(0x666666)
#define PAFFPickerTopBarRightButtonTitle @"保存"
#define PAFFPickerTopBarRightButtonTitleColor PAFFUIKit_Color_Hex(0x333333)

#define PAFFPickerBackgroundColor PAFFUIKit_Color_Hex(0xf8f8f8)
#define PAFFPickerRowHeight 54.0
#define PAFFPickerRowTextFont [UIFont systemFontOfSize:20]
#define PAFFPickerRowTextSmallFont [UIFont systemFontOfSize:11];
#define PAFFPickerRowNormalBackgroundColor [UIColor clearColor]
#define PAFFPickerRowNormalTextColor PAFFUIKit_Color_Hex(0xbbbbbb)
#define PAFFPickerRowSelectedBackgroundColor [UIColor whiteColor]
#define PAFFPickerRowSelectedTextColor PAFFUIKit_Color_Hex(0x3399ff)

#define PAFFPickerSelectionLineColor PAFFUIKit_Color_Hex(0xd9d9d9)


@class PAFFPicker;
@protocol PAFFPickerDataSource <NSObject>

// returns the number of 'columns' to display.
- (NSInteger)numberOfComponentsInPicker:(PAFFPicker *)picker;
// returns the # of rows in each component..
- (NSInteger)picker:(PAFFPicker *)picker numberOfRowsInComponent:(NSInteger)component;
// returns title of each row/component
- (NSString *)picker:(PAFFPicker *)picker titleForRow:(NSInteger)row forComponent:(NSInteger)component;

@end

@interface PAFFPicker : UIView

/*!
 *  @brief 初始化方法
 *
 *  @param frame          picker frame (show方法忽略orgion)
 *  @param title          标题
 *  @param dataSource     datasource
 *  @param cancelCallBack 取消回调
 *  @param doneCallBack   完成回调
 *
 *  @return
 */
- (id)initWithFrame:(CGRect)frame title:(NSString *)title dataSource:(id<PAFFPickerDataSource>)dataSource cancelCallBack:(void(^)(void))cancelCallBack doneCallBack:(void(^)(NSArray *selectedRowIndexItems,NSArray *selectedRowTitleItems))doneCallBack;

/*!
 *  @brief keyWindow 弹出picker
 */
- (void)show;

- (NSInteger)selectedRowInComponent:(NSInteger)component;

@end



@class PAFFPickerView;
@protocol PAFFPickerViewDataSource  <NSObject>

- (NSInteger)numberOfComponentsInPickerView:(PAFFPickerView *)pickerView;
- (NSInteger)pickerView:(PAFFPickerView *)pickerView numberOfRowsInComponent:(NSInteger)component;

@end

@protocol PAFFPickerViewDelegate <NSObject>

- (CGFloat)pickerView:(PAFFPickerView *)pickerView rowHeightForComponent:(NSInteger)component;
- (UIView *)pickerView:(PAFFPickerView *)pickerView viewForRow:(NSInteger)row forComponent:(NSInteger)component reusingView:(UIView *)view;
- (NSString *)pickerView:(PAFFPickerView *)pickerView titleForRow:(NSInteger)row forComponent:(NSInteger)component;
- (void)pickerView:(PAFFPickerView *)pickerView didSelectRow:(NSInteger)row inComponent:(NSInteger)component;

- (void)pickerView:(PAFFPickerView *)pickerView viewForRow:(NSInteger)row forComponent:(NSInteger)component reusingView:(UIView *)view highlighted:(BOOL)highlighted;
@end

@interface PAFFPickerView : UIView

@property (nonatomic, weak) id<PAFFPickerViewDataSource> dataSource;
@property (nonatomic, weak) id<PAFFPickerViewDelegate> delegate;

@property(nonatomic,readonly) NSInteger numberOfComponents;

@property (nonatomic, assign) NSInteger scrollingRow;

- (void)reloadAllComponents;
- (void)reloadComponent:(NSInteger)component;
- (NSInteger)selectedRowInComponent:(NSInteger)component;
- (void)selectRow:(NSInteger)row inComponent:(NSInteger)component animated:(BOOL)animated;


@end

