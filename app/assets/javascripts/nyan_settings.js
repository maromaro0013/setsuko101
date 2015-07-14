var FIELD_WIDTH = 720;
var FIELD_HEIGHT = 1120;
//  画面に出す猫の最大数
var MAX_NYAN_OBJ = 16;
//  猫の生成間隔
var GEN_NYAN_TIMER_DEFAULT = Phaser.Timer.QUARTER;
//  猫の待機期間
var NYAN_STAY_FRAME_DEFAULT = 40;
//  猫の移動速度
var NYAN_MOVE_X = 4;
//  猫の出現位置オフセット
var NYAN_OFS_X = 64;
var NYAN_OFS_BOTTOM = 100;

//  情報バーの位置
var INFO_BAR_W = 600;
var INFO_BAR_X = (FIELD_WIDTH - INFO_BAR_W) / 2;
var INFO_BAR_Y = 1040;

// ミニnyan表示位置
var MINI_X = INFO_BAR_X + 10
var MINI_Y = INFO_BAR_Y + 4

// 残りnyan表示位置
var NYAN_COUNT_X = INFO_BAR_X + 80
var NYAN_COUNT_Y = INFO_BAR_Y + 6

// 出現nyanデフォルト
var NYAN_COUNT_DEFAULT_MAX = 101

// 経過時間表示位置
var RESULT_TIME_COUNT_X = INFO_BAR_X + 340
var RESULT_TIME_COUNT_Y = NYAN_COUNT_Y
