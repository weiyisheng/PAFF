//
//  PAFFTableViewCellModel.h
//  Pods
//
//  Created by 柏朗 on 16/3/15.
//
//

#import <Foundation/Foundation.h>

typedef NS_ENUM(NSInteger,EPAFFTabelViewCellType) {
    /**
     *  cell内包含：主标题、跳转图标
     */
    EPAFFTitleJumpCell,
    
    /**
     *  cell内包含：主标题、小图片、跳转图标
     */
    EPAFTitleImageJumpCell,
    
    /**
     *  cell内包含：主标题、副标题
     */
    EPAFFTtielSubtitleCell,
    
    /**
     *  cell内包含：主标题、副标题、跳转图标
     */
    EPAFFTtileSubtitleJumpCell,
    
    /**
     *  cell内包含：主标题、副标题、跳转图标、跳转图标
     */
    EPAFFSubtitleJumpImageCell,
    
    /**
     *  cell内包含：主标题、副标题、小图标、账户余额标题
     */
    EPAFFDetailCellAccount
};


@interface PAFFCommonTableViewCellModel : NSObject

/**
 *  标题label（大标题）
 */
@property (nonatomic, strong) NSString *titleLabel;

/**
 *  cell被点击时默认执行的方法, 需在相应的ViewController里实现
 */
@property (nonatomic, assign) SEL selector;

/**
 *  小箭头之类的资源图名称
 */
@property (nonatomic, assign) NSString *accessoryImageName;

//说明文字
/**
 *  描述label（小标题）除了account类型之外，都可不填
 */
@property (nonatomic, strong) NSString *detailLabel;

/**
 *  资产总额
 */
@property (nonatomic, strong) NSString *accountNumber;

/**
 *  小图标图片名
 */
@property (nonatomic, strong) NSString *titleImageName;

/**
 *  cell的样式。一共六种。必填
 */
@property (nonatomic ) EPAFFTabelViewCellType cellType;

@end

