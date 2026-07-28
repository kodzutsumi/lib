// Copyright 2020 - present integereleven. All rights reserved. MIT license.

/**
 * Used to test and more easily develop examples.
 *
 * Each example has a readme that explain and imports examples.
 * Examples are loaded using `<!--[[code {fileName} [options]]]-->` in markdown files, and the fileName is relative to the examples directory.
 * Options are passed as query parameters to the example, and can be used to configure the example behavior.
 *
 * Front matter in the README define specifics about the entire example.
 * - `title`: The title of the example, used in the README and as a heading in the example.
 *
 * ## Options
 * Options are specified in JSON and define characteristics of the example.
 * - `showFileName`: Whether to show the file name in the example, default is false.
 * - `title`: A title for the example, shown above the example.
 * - `description`: A description of the example, shown above the example.
 * - `caption`: A caption for the example, shown below the example.
 * - `alerts`: An array of alerts to show in the example, each alert has a `type` (e.g. "info", "warning", "error") and a `message` to display.
 *   - `type`: The type of the alert, which can be "note", "tip", "important", "warning", "caution".
 *   - `message`: The message to display in the alert, which can include markdown formatting.
 *   - `file`: The file location of the message to display in the alert, which can include markdown formatting. This option is mutually exclusive with `message` and `type`.
 */

export default 'examples';
