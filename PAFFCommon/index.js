/**
 * @providesModule PAFFCommon
 * Created by easy on 16/3/18.
 */

module.exports = {
  // 基础控件
  get Button() { return require('PAFFButton'); },
  get TextInput() { return require('PAFFTextInput'); },
  get Card() { return require('PAFFCard'); },
  get Cell() { return require('PAFFCell'); },
  get Modal() { return require('PAFFModal'); },
  get NavBar() { return require('PAFFNavBar'); },
  // 栅格化
  get LatticeView() { return require('PAFFLatticeView'); },
  // 非基础控件
  get Toast() { return require('PAToast'); },
  get Loading() { return require('PALoading'); },
  get Network() { return require('PAFFNetwork'); },
  get Var() { return require('PAFFCommonVar'); },
  get DataFetch() { return require('PAFFDataFetch'); },
  get DataObserver() { return require('PAFFDataObserver'); },
  get Statistic() { return require('PAFFStatistic'); },
}
