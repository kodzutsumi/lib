import type {
  AsCondition,
  CapSet,
  UseCondition,
  UseDefault,
  UseInversion,
  UseStream,
} from '@kz/util/capability';

export type LogicCapabilities =
  | UseCondition
  | UseInversion
  | UseStream
  | UseDefault;
export type LogicDefaultSettings = AsCondition;

export type PickLogicCapabilities<Settings extends CapSet> = Extract<Settings, LogicCapabilities> extends never
  ? LogicDefaultSettings
  : Extract<Settings, LogicCapabilities>;