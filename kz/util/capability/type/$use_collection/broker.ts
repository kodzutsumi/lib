import type { $UseCollection } from './consumer.ts';

/**
 * The collection keys behavior broker of the {@linkcode $UseCollection} capability.
 *
 * Use this setting to specify the collection keys (`"keys"`) target for a type that supports the {@linkcode $UseCollection} capability consumer.
 *
 * @see {@linkcode $AsEntries} for the collection (default/implied) behavior broker of this capability.
 * @see {@linkcode $AsValues} for the collection values behavior broker of this capability.
 */
export type $AsKeys = $UseCollection<'keys'>;

/**
 * The collection values behavior broker of the {@linkcode $UseCollection} capability.
 *
 * Use this setting to specify the collection values (`"values"`) target for a type that supports the {@linkcode $UseCollection} capability consumer.
 *
 * @see {@linkcode $AsEntries} for the collection (default/implied) behavior broker of this capability.
 * @see {@linkcode $AsKeys} for the collection keys behavior broker of this capability.
 */
export type $AsValues = $UseCollection<'values'>;

/**
 * The collection behavior broker of the {@linkcode $UseCollection} capability.
 *
 * Use this setting to specify the collection (`"collection"`) target for a type that supports the {@linkcode $UseCollection} capability consumer.
 *
 * > [!NOTE]
 * > This is the recommended default implied behavior of the
 * > {@linkcode $UseCollection} capability when the setting is not explicitly set to
 * > `"collection"`, `"keys"`, or `"values"`.
 *
 * @see {@linkcode $AsKeys} for the collection keys behavior broker of this capability.
 * @see {@linkcode $AsValues} for the collection values behavior broker of this capability.
 */
export type $AsEntries = $UseCollection<'entries'>;
