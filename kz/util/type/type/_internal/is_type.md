| Name | `UseStream`   | `UseDefault`             | `UseDistributed`          | `UseInversion`        | `UseStrict`          | `Description`                                                                  |
| ---- | ------------- | ------------------------ | ------------------------- | --------------------- | -------------------- | ------------------------------------------------------------------------------ |
| 0    | `AsFilter`    | None                     | `AsUnified`               | `AsInitial` (default) | `AsStrict` (default) | Returns `unknown` if `Type` extends all of `TargetType`, otherwise `never`     |
| 1    | `AsFilter`    | None                     | `AsUnified`               | `AsInitial` (default) | `AsLoose` (default)  | Returns `unknown` if `TargetType` extends all of `Type`, otherwise `never`     |
| 2    | `AsFilter`    | None                     | `AsUnified`               | `AsInverted`          | `AsStrict` (default) | Returns `never` if `Type` extends all of `TargetType`, otherwise `unknown`     |
| 3    | `AsFilter`    | None                     | `AsUnified`               | `AsInverted`          | `AsLoose` (default)  | Returns `never` if `TargetType` extends all of `Type`, otherwise `unknown`     |
| 4    | `AsFilter`    | None                     | `AsDistributed` (default) | `AsInitial` (default) | `AsStrict` (default) | Returns `unknown` if `Type` extends any of `TargetType`, otherwise `never`     |
| 5    | `AsFilter`    | None                     | `AsDistributed` (default) | `AsInitial` (default) | `AsLoose` (default)  | Returns `unknown` if `TargetType` extends any of `Type`, otherwise `never`     |
| 6    | `AsFilter`    | None                     | `AsDistributed` (default) | `AsInverted`          | `AsStrict` (default) | Returns `never` if `Type` extends any of `TargetType`, otherwise `unknown`     |
| 7    | `AsFilter`    | None                     | `AsDistributed` (default) | `AsInverted`          | `AsLoose` (default)  | Returns `never` if `TargetType` extends any of `Type`, otherwise `unknown`     |
| 8    | `AsFilter`    | `DefaultOf<DefaultType>` | `AsUnified`               | `AsInitial` (default) | `AsStrict` (default) | Returns `DefaultType` if `Type` extends all of `TargetType`, otherwise `never` |
| 9    | `AsFilter`    | `DefaultOf<DefaultType>` | `AsUnified`               | `AsInitial` (default) | `AsLoose` (default)  | Returns `DefaultType` if `TargetType` extends all of `Type`, otherwise `never` |
| 10   | `AsFilter`    | `DefaultOf<DefaultType>` | `AsUnified`               | `AsInverted`          | `AsStrict` (default) | Returns `never` if `Type` extends all of `TargetType`, otherwise `DefaultType` |
| 11   | `AsFilter`    | `DefaultOf<DefaultType>` | `AsUnified`               | `AsInverted`          | `AsLoose` (default)  | Returns `never` if `TargetType` extends all of `Type`, otherwise `DefaultType` |
| 12   | `AsFilter`    | `DefaultOf<DefaultType>` | `AsDistributed` (default) | `AsInitial` (default) | `AsStrict` (default) | Returns `DefaultType` if `Type` extends any of `TargetType`, otherwise `never` |
| 13   | `AsFilter`    | `DefaultOf<DefaultType>` | `AsDistributed` (default) | `AsInitial` (default) | `AsLoose` (default)  | Returns `DefaultType` if `TargetType` extends any of `Type`, otherwise `never` |
| 14   | `AsFilter`    | `DefaultOf<DefaultType>` | `AsDistributed` (default) | `AsInverted`          | `AsStrict` (default) | Returns `never` if `Type` extends any of `TargetType`, otherwise `DefaultType` |
| 15   | `AsFilter`    | `DefaultOf<DefaultType>` | `AsDistributed` (default) | `AsInverted`          | `AsLoose` (default)  | Returns `never` if `TargetType` extends any of `Type`, otherwise `DefaultType` |
| 16   | `AsPredicate` | None                     | `AsUnified`               | `AsInitial` (default) | `AsStrict` (default) | Returns `true` if `Type` extends all of `TargetType`, otherwise `false`        |
| 17   | `AsPredicate` | None                     | `AsUnified`               | `AsInitial` (default) | `AsLoose` (default)  | Returns `true` if `TargetType` extends all of `Type`, otherwise `false`        |
| 18   | `AsPredicate` | None                     | `AsUnified`               | `AsInverted`          | `AsStrict` (default) | Returns `false` if `Type` extends all of `TargetType`, otherwise `true`        |
| 19   | `AsPredicate` | None                     | `AsUnified`               | `AsInverted`          | `AsLoose` (default)  | Returns `false` if `TargetType` extends all of `Type`, otherwise `true`        |
| 20   | `AsPredicate` | None                     | `AsDistributed` (default) | `AsInitial` (default) | `AsStrict` (default) | Returns `true` if `Type` extends any of `TargetType`, otherwise `false`        |
| 21   | `AsPredicate` | None                     | `AsDistributed` (default) | `AsInitial` (default) | `AsLoose` (default)  | Returns `true` if `TargetType` extends any of `Type`, otherwise `false`        |
| 22   | `AsPredicate` | None                     | `AsDistributed` (default) | `AsInverted`          | `AsStrict` (default) | Returns `false` if `Type` extends any of `TargetType`, otherwise `true`        |
| 23   | `AsPredicate` | None                     | `AsDistributed` (default) | `AsInverted`          | `AsLoose` (default)  | Returns `false` if `TargetType` extends any of `Type`, otherwise `true`        |

> [!NOTE]
> `DefaultOf` is ignored with `AsPredicate`.

#### Condition (Default)

| Name | `UseCondition`                    | `UseUnified`              | `UseInversion`        | `UseStrict`         | `Description`                                                                  |
| ---- | --------------------------------- | ------------------------- | --------------------- | ------------------- | ------------------------------------------------------------------------------ |
| 0    | `AsCondition` (default)           | `AsUnified`               | `AsInitial` (default) | `AsStrict`          | Returns `true` if `Type` extends all of `TargetType`, otherwise `false`        |
| 1    | `AsCondition` (default)           | `AsUnified`               | `AsInitial` (default) | `AsLoose` (default) | Returns `true` if `TargetType` extends all of `Type`, otherwise `false`        |
| 2    | `AsCondition` (default)           | `AsUnified`               | `AsInverted`          | `AsStrict`          | Returns `false` if `Type` extends all of `TargetType`, otherwise `true`        |
| 3    | `AsCondition` (default)           | `AsUnified`               | `AsInverted`          | `AsLoose` (default) | Returns `false` if `TargetType` extends all of `Type`, otherwise `true`        |
| 4    | `AsCondition` (default)           | `AsDistributed` (default) | `AsInitial` (default) | `AsStrict`          | Returns `true` if `Type` extends any of `TargetType`, otherwise `false`        |
| 5    | `AsCondition` (default)           | `AsDistributed` (default) | `AsInitial` (default) | `AsLoose` (default) | Returns `true` if `TargetType` extends any of `Type`, otherwise `false`        |
| 6    | `AsCondition` (default)           | `AsDistributed` (default) | `AsInverted`          | `AsStrict`          | Returns `false` if `Type` extends any of `TargetType`, otherwise `true`        |
| 7    | `AsCondition` (default)           | `AsDistributed` (default) | `AsInverted`          | `AsLoose` (default) | Returns `false` if `TargetType` extends any of `Type`, otherwise `true`        |
| 8    | `Then<ThenType>`                  | `AsUnified`               | `AsInitial` (default) | `AsStrict`          | Returns `ThenType` if `Type` extends all of `TargetType`, otherwise `false`    |
| 9    | `Then<ThenType>`                  | `AsUnified`               | `AsInitial` (default) | `AsLoose` (default) | Returns `ThenType` if `TargetType` extends all of `Type`, otherwise `false`    |
| 10   | `Then<ThenType>`                  | `AsUnified`               | `AsInverted`          | `AsStrict`          | Returns `false` if `Type` extends all of `TargetType`, otherwise `ThenType`    |
| 11   | `Then<ThenType>`                  | `AsUnified`               | `AsInverted`          | `AsLoose` (default) | Returns `false` if `TargetType` extends all of `Type`, otherwise `ThenType`    |
| 12   | `Then<ThenType>`                  | `AsDistributed` (default) | `AsInitial` (default) | `AsStrict`          | Returns `true` if `Type` extends any of `TargetType`, otherwise `false`        |
| 13   | `Then<ThenType>`                  | `AsDistributed` (default) | `AsInitial` (default) | `AsLoose` (default) | Returns `true` if `TargetType` extends any of `Type`, otherwise `false`        |
| 14   | `Then<ThenType>`                  | `AsDistributed` (default) | `AsInverted`          | `AsStrict`          | Returns `false` if `Type` extends any of `TargetType`, otherwise `ThenType`    |
| 15   | `Then<ThenType>`                  | `AsDistributed` (default) | `AsInverted`          | `AsLoose` (default) | Returns `false` if `TargetType` extends any of `Type`, otherwise `ThenType`    |
| 16   | `Else<ElseType>`                  | `AsUnified`               | `AsInitial` (default) | `AsStrict`          | Return `true` if `Type` extends all of `TargetType`, otherwise `ElseType`      |
| 17   | `Else<ElseType>`                  | `AsUnified`               | `AsInitial` (default) | `AsLoose` (default) | Return `true` if `TargetType` extends all of `Type`, otherwise `ElseType`      |
| 18   | `Else<ElseType>`                  | `AsUnified`               | `AsInverted`          | `AsStrict`          | Return `false` if `Type` extends all of `TargetType`, otherwise `ElseType`     |
| 19   | `Else<ElseType>`                  | `AsUnified`               | `AsInverted`          | `AsLoose` (default) | Return `false` if `TargetType` extends all of `Type`, otherwise `ElseType`     |
| 20   | `Else<ElseType>`                  | `AsDistributed` (default) | `AsInitial` (default) | `AsStrict`          | Return `true` if `Type` extends any of `TargetType`, otherwise `ElseType`      |
| 21   | `Else<ElseType>`                  | `AsDistributed` (default) | `AsInitial` (default) | `AsLoose` (default) | Return `true` if `TargetType` extends any of `Type`, otherwise `ElseType`      |
| 22   | `Else<ElseType>`                  | `AsDistributed` (default) | `AsInverted`          | `AsStrict`          | Return `false` if `Type` extends any of `TargetType`, otherwise `ElseType`     |
| 23   | `Else<ElseType>`                  | `AsDistributed` (default) | `AsInverted`          | `AsLoose` (default) | Return `false` if `TargetType` extends any of `Type`, otherwise `ElseType`     |
| 24   | `ConditionOf<ThenType, ElseType>` | `AsUnified`               | `AsInitial` (default) | `AsStrict`          | Returns `ThenType` if `Type` extends all of `TargetType`, otherwise `ElseType` |
| 25   | `ConditionOf<ThenType, ElseType>` | `AsUnified`               | `AsInitial` (default) | `AsLoose` (default) | Returns `ThenType` if `TargetType` extends all of `Type`, otherwise `ElseType` |
| 26   | `ConditionOf<ThenType, ElseType>` | `AsUnified`               | `AsInverted`          | `AsStrict`          | Returns `ElseType` if `Type` extends all of `TargetType`, otherwise `ThenType` |
| 27   | `ConditionOf<ThenType, ElseType>` | `AsUnified`               | `AsInverted`          | `AsLoose` (default) | Returns `ElseType` if `TargetType` extends all of `Type`, otherwise `ThenType` |
| 28   | `ConditionOf<ThenType, ElseType>` | `AsDistributed` (default) | `AsInitial` (default) | `AsStrict`          | Returns `ThenType` if `Type` extends any of `TargetType`, otherwise `ElseType` |
| 29   | `ConditionOf<ThenType, ElseType>` | `AsDistributed` (default) | `AsInitial` (default) | `AsLoose` (default) | Returns `ThenType` if `TargetType` extends any of `Type`, otherwise `ElseType` |
| 30   | `ConditionOf<ThenType, ElseType>` | `AsDistributed` (default) | `AsInverted`          | `AsStrict`          | Returns `ElseType` if `Type` extends any of `TargetType`, otherwise `ThenType` |
| 31   | `ConditionOf<ThenType, ElseType>` | `AsDistributed` (default) | `AsInverted`          | `AsLoose` (default) | Returns `ElseType` if `TargetType` extends any of `Type`, otherwise `ThenType` |
