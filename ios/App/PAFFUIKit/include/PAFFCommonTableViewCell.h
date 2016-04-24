//
//  PAFFTableViewCell.h
//  Pods
//
//  Created by 柏朗 on 16/3/15.
//
//

#import <UIKit/UIKit.h>
#import <PAFFCommonTableViewCellModel.h>

@interface PAFFCommonTableViewCell : UITableViewCell

//根据cell Model展示cell内容
- (void)displayWithItem:(nonnull id)item;

+ (NSString * _Nonnull)returnTableViewCellIdentifierWtihCellType:(EPAFFTabelViewCellType)cellType;

@end
