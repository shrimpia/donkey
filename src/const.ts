export const DI = {
  MISSKEY: 'misskey',
} as const;

/** 現在のDonkeyが実装しているMastodon APIのバージョン */
export const IMPLEMENTED_MASTODON_API_VERSION = '4.0.0';

/** 現行のMisskeyにおける、添付ファイルの最大数 */
export const MISSKEY_MAX_ATTACHMENTS = 16;

/** Misskeyには無いフィールドを表す null */
export const NULL_NOT_IN_MISSKEY = null;
/** Misskeyには無いフィールドを表す 0 */
export const ZERO_NOT_IN_MISSKEY = 0;
/** Misskeyには無いフィールドを表す false */
export const FALSE_NOT_IN_MISSKEY = false;
/** Misskeyには無いフィールドを表す '' */
export const EMPTY_STRING_NOT_IN_MISSKEY = '';
/** Misskeyには無いフィールドを表す [] */
export const EMPTY_ARRAY_NOT_IN_MISSKEY = [];
/** Misskeyには無いフィールドを表す {} */
export const EMPTY_OBJECT_NOT_IN_MISSKEY = {};
