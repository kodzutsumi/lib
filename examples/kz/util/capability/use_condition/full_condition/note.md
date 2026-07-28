---
type: note
title: Test
cta:
  - text: Hello
    url: url
    target: _blank
    primary: false
---

The type `MissingConditions` no longer produces an error due to the default settings provided.

The type `MissingElse` will produce the following error:

```bash
TS2344 [ERROR]: Type 'Then<number>' does not satisfy
the constraint 'UseThen & UseElse'.
  Property '[ElseKeyString]' is missing in type
  'Then<number>' but required in type 'UseElse'
```
