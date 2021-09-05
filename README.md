cli_calc
========



[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/cli_calc.svg)](https://npmjs.org/package/cli_calc)
[![CircleCI](https://circleci.com/gh/StefanWiencko/cli_calc/tree/master.svg?style=shield)](https://circleci.com/gh/StefanWiencko/cli_calc/tree/master)
[![Downloads/week](https://img.shields.io/npm/dw/cli_calc.svg)](https://npmjs.org/package/cli_calc)
[![License](https://img.shields.io/npm/l/cli_calc.svg)](https://github.com/StefanWiencko/cli_calc/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g calc
$ cli_calc COMMAND
running command...
$ cli_calc (-v|--version|version)
calc/0.0.0 linux-x64 node-v15.4.0
$ cli_calc --help [COMMAND]
USAGE
  $ cli_calc COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`cli_calc add [FIRST] [SECOND]`](#cli_calc-add-first-second)
* [`cli_calc div [FIRST] [SECOND]`](#cli_calc-div-first-second)
* [`cli_calc help [COMMAND]`](#cli_calc-help-command)
* [`cli_calc memo`](#cli_calc-memo)
* [`cli_calc mul [FIRST] [SECOND]`](#cli_calc-mul-first-second)
* [`cli_calc reset [FILE]`](#cli_calc-reset-file)
* [`cli_calc sub [FIRST] [SECOND]`](#cli_calc-sub-first-second)

## `cli_calc add [FIRST] [SECOND]`

add two numbers

```
USAGE
  $ cli_calc add [FIRST] [SECOND]

OPTIONS
  -h, --help    show CLI help
  -m, --memory  add first number to value from db, additional arguments will be ignored
```

_See code: [src/commands/add.ts](https://github.com/StefanWiencko/cli_calc/blob/v0.0.0/src/commands/add.ts)_

## `cli_calc div [FIRST] [SECOND]`

add two numbers

```
USAGE
  $ cli_calc div [FIRST] [SECOND]

OPTIONS
  -h, --help    show CLI help
  -m, --memory  divide number from db by commadnd argument, additional arguments will be ignored
```

_See code: [src/commands/div.ts](https://github.com/StefanWiencko/cli_calc/blob/v0.0.0/src/commands/div.ts)_

## `cli_calc help [COMMAND]`

display help for cli_calc

```
USAGE
  $ cli_calc help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.3/src/commands/help.ts)_

## `cli_calc memo`

print value stored in database

```
USAGE
  $ cli_calc memo

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/memo.ts](https://github.com/StefanWiencko/cli_calc/blob/v0.0.0/src/commands/memo.ts)_

## `cli_calc mul [FIRST] [SECOND]`

add two numbers

```
USAGE
  $ cli_calc mul [FIRST] [SECOND]

OPTIONS
  -h, --help    show CLI help
  -m, --memory  multiply number from db by command argument, additional arguments will be ignored
```

_See code: [src/commands/mul.ts](https://github.com/StefanWiencko/cli_calc/blob/v0.0.0/src/commands/mul.ts)_

## `cli_calc reset [FILE]`

describe the command here

```
USAGE
  $ cli_calc reset [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/reset.ts](https://github.com/StefanWiencko/cli_calc/blob/v0.0.0/src/commands/reset.ts)_

## `cli_calc sub [FIRST] [SECOND]`

add two numbers

```
USAGE
  $ cli_calc sub [FIRST] [SECOND]

OPTIONS
  -h, --help    show CLI help
  -m, --memory  subtract command argument from number from db, additional arguments will be ignored
```

_See code: [src/commands/sub.ts](https://github.com/StefanWiencko/cli_calc/blob/v0.0.0/src/commands/sub.ts)_
<!-- commandsstop -->
