type Empty = Record<string, never>;

/**
 * Returns `true` if the provided `Settings` is an empty object, otherwise returns `false`.
 *
 * @template Settings - The settings to check for emptiness.
 * @returns `true` if `Settings` is an empty object, otherwise `false`.
 */
export type $IsNullSetting<Settings> = Settings extends Empty
  ? Empty extends Settings ? true : false
  : false;
