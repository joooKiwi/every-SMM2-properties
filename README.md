# Super Mario Maker Encyclopedia

[![SMM Encyclopedia CI](https://github.com/joooKiwi/smm-encyclopedia/actions/workflows/workflow.yml/badge.svg)](https://github.com/joooKiwi/smm-encyclopedia/actions/workflows/workflow.yml)

https://joookiwi.github.io/smm-encyclopedia

## Table of content
* [List of elements to do](#list-of-elements-to-do)
* [Development for the web application](#development-for-the-web-application)
  * [Standard used in the project](#standard-used-in-the-project)
    * [Imports](#imports)
    * [Visibility](#visibility)
    * [Folder structure](#folder-structure)
    * [File naming](#file-naming)
    * [Variable / methods / class naming](#variable--methods--class-naming)
    * [Files using a CSV source](#files-using-a-csv-source)
    * [Dependencies](#dependencies)
    * [Routes](#routes)
  * [NPM commands](#npm-commands)
    * [Prerequisites](#prerequisites)
    * [Run the project locally (desktop and mobile)](#run-the-project-locally--desktop-and-mobile-)
    * [Running tests](#running-tests) 
    * [Running testing tools](#running-testing-tool)
    * [Deploying the changes to the server](#deploying-the-changes-to-the-server)
---

A simple project made to retrieve most (if not every)
information in all 3 Super Mario Maker games. It contains:
 - Super Mario Maker (WiiU) ![~ SMM1](.github/styles/smm1-alias.svg)
 - Super Mario Maker for Nintendo 3DS (3DS) ![~ SMM3DS](.github/styles/smm3ds-alias.svg)
 - Super Mario Maker 2 (Switch) ![~ SMM2](.github/styles/smm2-alias.svg)

The information is mostly based on the SMM2 game.

This project is intended to be a simple project to help on research.<br/>
It is also there give the details as simple as they can get.<br/>
More is to add once this huge project is finished.

The languages supported by the project are the ones available in the games:
 - ![Partially done](.github/styles/partially-done.svg) English ([american](https://joookiwi.github.io/smm-encyclopedia/en_AM)
& [european](https://joookiwi.github.io/smm-encyclopedia/en-EU))
 - ![Partially done](.github/styles/partially-done.svg) French ([canadian](https://joookiwi.github.io/smm-encyclopedia/fr-CA)
& [european](https://joookiwi.github.io/smm-encyclopedia/fr-EU))
 - ![Not completed](.github/styles/not-completed.svg)  [German](https://joookiwi.github.io/smm-encyclopedia/de)
 - ![Not completed](.github/styles/not-completed.svg)  Spanish ([american](https://joookiwi.github.io/smm-encyclopedia/es-AM)
& [european](https://joookiwi.github.io/smm-encyclopedia/es-EU))
 - ![Not completed](.github/styles/not-completed.svg)  [Italian](https://joookiwi.github.io/smm-encyclopedia/it)
 - ![Not completed](.github/styles/not-completed.svg)  [Dutch](https://joookiwi.github.io/smm-encyclopedia/nl)
 - ![Not completed](.github/styles/not-completed.svg)  Portuguese ([american](https://joookiwi.github.io/smm-encyclopedia/pt-AM)
& [european](https://joookiwi.github.io/smm-encyclopedia/pt-EU))
 - ![Not completed](.github/styles/not-completed.svg)  [Russian](https://joookiwi.github.io/smm-encyclopedia/ru)
 - ![Not completed](.github/styles/not-completed.svg)  [Japanese](https://joookiwi.github.io/smm-encyclopedia/jp)
 - ![Not completed](.github/styles/not-completed.svg)  Chinese ([traditional](https://joookiwi.github.io/smm-encyclopedia/zh-T)
& [simplified](https://joookiwi.github.io/smm-encyclopedia/zh-S))
 - ![Not completed](.github/styles/not-completed.svg)  [Korean](https://joookiwi.github.io/smm-encyclopedia/ko)

The other languages seen in the project can include Hebrew, Polish, Ukrainian & Greek.
Although, they are only there for some names.

## List of elements to do

- [ ] When giving an url <u>example.com/path</u>, it would be based on the browser language.<br/>
  And for <u>example.com/en-US/path</u>, then the language would be set to American English.
- [ ] Font family
  - [ ] from the Super Mario Maker games
  - [ ] from SMB, SMB3, SMW, NSMBU & SM3DW specifically
- [ ] Colour mode implementation (independent of each and another)
  - [ ] Dark mode
  - [ ] Colour-blind mode
- [ ] Search engine.
- [ ] Options that would change the URL based on the application loaded.
- [ ] Sub-pages with reactive URL.
- [ ] Secret pages
  - [ ] by URL
  - [ ] by key combination
  - [ ] maybe other ways to create them

## Development for the web application

### Standard used in the project

In order to have a clean way to navigate to the project,
multiple standards have been made.

#### Imports

They are separated in different sections 
 - Import ordering
   1. SCSS files _(for React components)_
   2. Dependencies import
   3. Type import (not useful to debug)
   4. Real import (if used at compile time → `import type`)
 - Spacing for the import is aligned for better readability
 - Ordered alphabetically by group

#### Visibility

Since some visibilities are present in other languages (like Kotlin, Java, PHP or C#),
the project utilizes some standard on the visibilities.

It utilizes the Typescript system for the pre-established visibilities.
Then, for those that are not in the system, it uses somme pattern for it.

| Syntax               | in project |  in Typescript  |         in Javascript         |                                                                            Example |
|----------------------|:----------:|:---------------:|:-----------------------------:|-----------------------------------------------------------------------------------:|
| public [name]        |   public   |     public      |            public             |                                      <pre> public anExample<br/>public anExample() |
| [name]               |  package   |     public      |            public             |                                                     <pre>anExample<br/>anExample() |
| _[name]              | protected  |    protected    |            public             |                               <pre>protected _anExample<br/>protected _anExample() |
| __[name]<br/>#[name] |  private   |     private     | __ -> public<br/># -> private | <pre>#anExample<br/>#anExample()<br/>private __anExample<br/>private __anExample() |

#### Folder structure

Folder structures the files.
Most of them are self-explanatory.

| Path                   | Meaning                                                                  |                                    Things to do | 
|:-----------------------|:-------------------------------------------------------------------------|------------------------------------------------:|
| src/app                | Application                                                              |                                                 |
| src/core               | The core elements of the project                                         |                                                 |
| src/lang               | The languages                                                            |                                                 |
| src/routes             | The routes of the project                                                |                                                 |
| src/util               | The utilities                                                            |     They should me moved into separate projects |
| src/bootstrap          | External dependencies to [Bootstrap](https://getbootstrap.com/)          |                                                 |
| src/navigation         | The application navigation (& footer)                                    |                                                 |
| src/resources          | The application resources (mostly CSV files)                             | Move this directory outside of the `src` folder |
| src/resources/compiled | The compiled (json files) from the CSV **(this should always be empty)** |                                                 |
| public/[any-folder]    | The images (& sounds) of the project                                     |                                                 |

#### File naming

The names of the files are important since some of them are for Typescript
and others give meaning to them.

| Syntax                                                                                                              | Type of file                                                                        |         Javascript         |         Typescript          |
|:--------------------------------------------------------------------------------------------------------------------|:------------------------------------------------------------------------------------|:--------------------------:|:---------------------------:|
| [singular-name].ts<br/>[singular-name].container.ts<br/>[singular-name].builder.ts<br/>[singular-name].component.ts | A file declaration<br/>A file description<br/>A Builder class<br/>A React component | No<br/>Yes<br/>Yes<br/>Yes | Yes<br/>Yes<br/>Yes<br/>Yes |
| [plural-name].types.ts<br/>[plural-name].ts                                                                         | An enumeration declaration file<br/>An enumeration file                             |         No<br/>Yes         |         Yes<br/>Yes         |
| [lower-case-name].ts                                                                                                | Not a class, but some files or functions                                            | Yes or No<br/>_(not both)_ |             Yes             |

#### Variable / methods / class naming

The variables, methods & classes use a different format, but they all share at some point the standard.<br/>
They don't follow directly the standard, but have a general format followed.

| Syntax                    |                                                        Description                                                        |                                Applicable for                                | Example                                                                                                                                                                                                                     |
|:--------------------------|:-------------------------------------------------------------------------------------------------------------------------:|:----------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [upper-case-name]         |                                    An upper case name (using `_` as a word separator)                                     |                         Constant,<br/>Enum instance                          | <pre>AN_EXAMPLE                                                                                                                                                                                                             |
| [lower-case-name]         |                                           A lower case name (using camel case)                                            |                                   Variable                                   | <pre>anExample                                                                                                                                                                                                              |
| [capital-case]            |                                          A capital case name (using Pascal case)                                          |     Class,<br/>Interface,<br/>Type,<br/>Dynamic import method for class      | <pre>AnExample                                                                                                                                                                                                              |
| [name][_[nameX]*]         |                                      Multiple different names following each others                                       |                             Variable,<br/>Method                             | <pre>anExample_withSomething_secret                                                                                                                                                                                         |
| #[name]                   |                                                  **(always)** `private`                                                   |                             Variable,<br/>Method                             | <pre>#anExample<br/>#anExample()                                                                                                                                                                                            |
| $[name]                   |                              something that starts with a number<br/>*(Not a PHP variable)*                               |                             Variable,<br/>Method                             | <pre>$1Example<br/>$1Example()                                                                                                                                                                                              |
| _[name]                   |                                                 **(always)** `protected`                                                  |                                    Method                                    | <pre>_anExample()                                                                                                                                                                                                           |
| __[name]                  |                                              `private` (with private field)                                               |                           Getter & setter methods                            | <pre>get __anExample() {<br/>  this.#anExample<br/>}<br/>set __anExample(value) {<br/>  this.#anExample = value<br/>}                                                                                                       |
| _[name]\(…)               |                       `protected` with possibility of arguments<br/>_(only called once by getter)_                        |                                Create methods                                | <pre>protected _anExample() {<br/>    return somethingToBeCalledOnce<br/>}<br/>protected _anotherExample(a, b, …,) {<br/>    return somethingToBeCalledOnceWith(a, b, …,)<br/>}                                             |
| `,`                       |                                                 Ending with a leading `,`                                                 | Creation (Array / Object),<br/>Call (method / constructor),<br/>Generic type | <pre>[a, b, c,]<br/>{a: 1, b: 2, c: 3,}<br/>anExample(a, b, c,)<br/>new AnExample(a, b, c,)<br/><br/>class AnExample<T,>{ ... }<br/>anExample<T,>(t: T,)                                                                    |
| <code>&#124;              |                                                **(always)** Before a join                                                 |                                     Type                                     | <pre>type AnExample = &#124; TypeA &#124; TypeB                                                                                                                                                                             |                                                                            |
| `'`<br/>not `"`           | For a string variable, `'` is used instead of `"`<br/><br/>_(This will be changed to be recognizable by other languages)_ |                      String → `"`,<br/>Character → `'`                       | <pre>type AnExampleString = 'something'<br/>type AnExampleCharacter = 'A'                                                                                                                                                   |
| no `;`                    |                                               **(never)** Ending with a `;`                                               |                Variable,<br/>Class,<br/>, Interface<br/>Type                 | <pre>const anExample = 420 / 69<br/><br/>class AnExample {<br/>  fieldA<br/>  fieldB<br/>}<br/><br/>interface AnExample {<br/>  fieldA<br/>  fieldB<br/>}<br/><br/>type AnExample = \`Jank ${&#124; 'city' &#124; 'game'}\` |
| `000_000` no `000000`     |                                To be less ambiguous in the reading of really long numbers                                 |                                    Number                                    | <pre>const anExampleNumber = 123_456<br/>const anotherExampleNumber = 1_042_069                                                                                                                                             |
| `null`<br/>no `undefined` |          To be like Kotlin, Java, C#, PHP & others, the use of `null` is the only one for the nullable variables          |                                     Type                                     | <pre>type AnExample = &#124; AType &#124; null                                                                                                                                                                              |

#### Files using a CSV source

In the core (`src/core/...`), the files have some formatting that each have their responsibility.
The only ones that are used outside are:
 - Interface
 - Enum (sometimes even in the `src/util/DynamicImporter.ts`)
 - The loader types (`Loader.types`)

The rest should not be used outside the same package (folder).

| Format              | Type      |                                                 Description                                                 |                                Dependencies |
|:--------------------|:----------|:-----------------------------------------------------------------------------------------------------------:|--------------------------------------------:|
| [name].template.ts  | Template  |                                   The template associated to the CSV file                                   |                                        Type |
| [name].loader.ts    | Loader    |                                         The file loader (main core)                                         |               Builder<br/>Template<br/>Type |
| loader.types.ts     | Type      |                                  Types only applicable to the file loaders                                  |                                             |
| [name].builder.ts   | Builder   |                        The class that create the class with builder pattern methods                         | Template <br/>Class<br/>Enum _(some times)_ |
| [name].creator.ts   | Creator   | A class that create the class with a singular `create` method,<br/>or a stateless method `createContent()`  | Template <br/>Class<br/>Enum _(some times)_ |
| [name].provider.ts  | Provider  | The provider class that will get or create the specific instance<br/>(will never create duplicate instance) |                        Interface <br/>Class |
| [name].ts           | Interface |                                The class description that is used elsewhere                                 |                                        Type |
| Empty[name].ts      | Singleton |                                          The empty class instance                                           |                                   Interface |
| [name].container.ts | Class     |                                             The class instance                                              |                                   Interface |
| [plural-name].ts    | Enum      |                                     Every elements as an enum instance                                      |                          Loader _(dynamic)_ |

<br/>
The types used in the interface:

| Type        |                                                Use case |
|:------------|--------------------------------------------------------:|
| boolean     |                                        Most of the time |
| number      |                                        Most of the time |
| string      | translation key<br/>acronym<br/>name fields<br/>comment |
| object      |                                              Properties |
| enumeration |                Properties use other `scr/core` elements |

#### Dependencies

Every dependency are described bellow with the direct dependency
and the indirect (via the `DynamicImporter` utility class)

| Name                                        |                                                                                     Direct dependency                                                                                     |        Indirect dependency         |
|:--------------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:----------------------------------:|
| Entity                                      | Clear condition,<br/>Limit,<br/>Entity category,<br/>Theme,<br/>Time,<br/>Game,<br/>Game style,<br/>Mystery Mushroom,<br/>Entity behaviour,<br/>Editor voice,<br/>Instrument,<br/>Version |   Entity group,<br/>Night effect   |
| Character name                              |                                                                                       Editor voice                                                                                        |                                    |
| Clear condition <sup>(SMM2)                 |                                                                                 Clear condition category                                                                                  |               Entity               |
| Clear condition category <sup>(SMM2)        |                                                                                                                                                                                           |          Clear condition           |
| Limit                                       |                                                                                                                                                                                           |               Entity               |
| Entity projectile                           |                                                                                                                                                                                           |               Entity               |
| Entity object                               |                                                                                                                                                                                           |               Entity               |
| Entity category                             |                                                                                                                                                                                           |               Entity               |
| Entity group                                |                                                                                          Entity                                                                                           |                                    |
| Theme                                       |                                                                                                                                                                                           |           Time,<br/>Game           |
| Time                                        |                                                                                                                                                                                           |                                    |
| Game reference                              |                                                                                                                                                                                           |        Game,<br/>Game style        |
| Game                                        |                                                                                      Game reference                                                                                       |                                    |
| Game style                                  |                                                                             Game reference,<br/>Night effect                                                                              |                                    |
| Entity behaviour                            |                                                                                                                                                                                           |               Entity               |
| Sound effect                                |                                                                                   Sound effect category                                                                                   | Entity,<br/>Entity group,<br/>Game |
| Sound effect category                       |                                                                                                                                                                                           |            Sound effect            |
| Course tag <sup>(SMM2)                      |                                                                                                                                                                                           |                                    |
| Predefined message <sup>(SMM2)              |                                                                                                                                                                                           |                                    |
| Sample courses <sup>(SMM1)                  |                                                                                  Themes,<br/>Game style                                                                                   |                                    |
| Medals <sup>(SMM1)                          |                                                                                                                                                                                           |     Entity,<br/>Character name     |
| Super Mario Challenges levels <sup>(SMM3DW) |                                                                                                                                                                                           |                                    |
| Job <sup>(SMM2)                             |                                                                                                                                                                                           |               Entity               |
| Official notification <sup>(SMM2)           |                                                                                                                                                                                           |      Entity,<br/>Mii costume       |
| Ninji speedrun <sup>(SMM2)                  |                                                                                                                                                                                           |                                    |
| Mystery Mushroom <sup>(SMM1)                |                                                                                                                                                                                           |                                    |
| Mii costume <sup>(SMM2)                     |                                                                                   Mii costume category                                                                                    |               Entity               |
| Mii costume category <sup>(SMM2)            |                                                                                                                                                                                           |            Mii costume             |
| Editor voice                                |                                                                                                                                                                                           |     Entity,<br/>Character name     |
| Instrument                                  |                                                                                                                                                                                           |               Entity               |
| Version                                     |                                                                                        Game style                                                                                         |                                    |

[//]: # (```mermaid)
[//]: # (flowchart LR)
[//]: # (  CN&#40;&#40;"Character<br/>name"&#41;&#41;)
[//]: # (  CC[\Clear condition\])
[//]: # (  CCC[\Clear condition category\])
[//]: # (  CT[\Course tag\])
[//]: # (  EV&#40;&#40;Editor voice&#41;&#41;)
[//]: # (  E{"Entity<br/>&#40;the main content&#41;"})
[//]: # (  EB&#40;&#40;"Entity<br/>behaviour"&#41;&#41;)
[//]: # (  EC&#40;&#40;"Entity<br/>category"&#41;&#41;)
[//]: # (  EG&#40;&#40;Entity group&#41;&#41;)
[//]: # (  EL&#40;&#40;Entity limit&#41;&#41;)
[//]: # (  EP&#40;&#40;Entity<br/>projectile&#41;&#41;)
[//]: # (  EO&#40;&#40;Entity<br/>object&#41;&#41;)
[//]: # (  G&#40;&#40;Game&#41;&#41;)
[//]: # (  GR&#40;&#40;"Game<br/>reference"&#41;&#41;)
[//]: # (  GS&#40;&#40;Game style&#41;&#41;)
[//]: # (  I&#40;&#40;Instrument&#41;&#41;)
[//]: # (  J[\Job\])
[//]: # (  M{{Medal}})
[//]: # (  MC[\Mii costume\])
[//]: # (  MCC[\Mii costume category\])
[//]: # (  MM{{Mystery Mushroom}})
[//]: # (  NE&#40;&#40;Night effect&#41;&#41;)
[//]: # (  NS[\Ninji speedrun\])
[//]: # (  ON&#40;&#40;"Official<br/>notification"&#41;&#41;)
[//]: # (  PM[\Predefined message\])
[//]: # (  SC[\Sample course\])
[//]: # (  SE&#40;&#40;Sound effect&#41;&#41;)
[//]: # (  SEC&#40;&#40;"Sound effect<br/>category"&#41;&#41;)
[//]: # (  SMCL>Super Mario Challenges level])
[//]: # (  Th&#40;&#40;Theme&#41;&#41;)
[//]: # (  Ti&#40;&#40;Time&#41;&#41;)
[//]: # (  V&#40;&#40;Version&#41;&#41;)
[//]: # ()
[//]: # ()
[//]: # (  subgraph Independent)
[//]: # (    CT & J & M & NS & ON & PM & SC & SMCL)
[//]: # (  end)
[//]: # (  subgraph Entity)
[//]: # (   E & EB & EC & EG & EL & EO & EP & I & MM)
[//]: # (  end)
[//]: # ()
[//]: # (  subgraph Sound effect)
[//]: # (    SE     --> SEC)
[//]: # (    SEC    -.-> SE)
[//]: # (  end)
[//]: # (  subgraph "Clear condition &#40;SMM2&#41;")
[//]: # (    CC     -->  CCC)
[//]: # (    CCC    -.-> CC)
[//]: # (  end)
[//]: # (  CN       -->  EV)
[//]: # (  CC       -.-> E)
[//]: # (  EV       -.-> CN & E)
[//]: # (  EB       -.-> E)
[//]: # (  EC       -.-> E)
[//]: # (  EG       -->  E)
[//]: # (  EL       -.-> E)
[//]: # (  EO       -.-> E)
[//]: # (  EP       -.-> E)
[//]: # (  SE       -.-> E & EG & G)
[//]: # (  Th       -.-> Ti & G)
[//]: # (  V        -->  GS)
[//]: # (  subgraph Game)
[//]: # (    G & GS -->  GR)
[//]: # (    GR     -.-> G & GS)
[//]: # (    subgraph "Game style")
[//]: # (      GS   -->  NE)
[//]: # (    end)
[//]: # (  end)
[//]: # (  I        -.-> E)
[//]: # (  J        -.-> E)
[//]: # (  M        -.-> CN & E)
[//]: # (  MC       -.-> E)
[//]: # (  subgraph "Mii costume &#40;SMM2&#41;")
[//]: # (    MC     -->  MCC)
[//]: # (    MCC    -.-> MC)
[//]: # (  end)
[//]: # (  NE       -.-> CN & GS & E)
[//]: # (  ON       -.-> E & MC)
[//]: # (  SC       -.-> Th & GS)
[//]: # ()
[//]: # (```)

#### Routes

Every route in the project has a reason to exist.
It can either be to have a default value or to be accessible by the URL directly.

So far, the paths are separated by multiple parts:
 1. The optional language (`en-AM`, `en-EU`, `fr-CA`, `fr-EU`, `de`, `es-AM`, `es-EU`, `it`, `nl`, `pt-AM`, `pt-EU`, `ru`, `ja`, `zh-tw`, `zh-cn` or `ko`)
 2. The game (`game-` + `1`, `3ds` and/or `2`) with its default `game-2`
 3. The display option (`list`, `card` or `table`)
 4. The ending paths:

| Path (in the URL)                                                                                                | Small description                                                                  |
|:-----------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------|
| `home`                                                                                                           |                                                                                    |
| `about`                                                                                                          | A small description about this application and its purpose                         |
| `source`                                                                                                         | Those who helped and the tools used to make this application                       |
| `every/`<br/>\[`power-up`&#124;`ride`&#124;`hat`](`+`\[`power-up`&#124;`ride`&#124;`hat`]{0,2}?)<br/>`/priority` | A visualisation of the priority about the power-ups, rides and hats                |
| `every/character-name`                                                                                           | The character name told in the editor                                              |
| `every/game-reference`                                                                                           | Every game referenced in any games                                                 |
| `every/game-style`                                                                                               | The game style used in the games                                                   |
| `every/entity`                                                                                                   | The entities only used in the games                                                |
| `every/entity-category`                                                                                          | The category made to group the entity (from the `Super Mario Maker 2` game)        |
| `every/entity-group`                                                                                             | A group of entity associated by relation, color or other kind of attributes        |
| \[`every`&#124;`play`&#124;`editor`]<br/>`/limit`                                                                | The limit applicable and usable in the games                                       |
| \[`every`&#124;`course`&#124;`world`]<br/>`/theme`                                                               | The theme (in a level or a world)                                                  |
| `every/sound-effect`                                                                                             | The sound effect placeable on any surface or entity                                |
| `every/sound-effect-category`                                                                                    | The category (from the `Super Mario Maker 2` game) of the sound effect             |
| `every/mii-costume`                                                                                              | The costume applicable to a Mii online only in `Super Mario Maker 2`               |
| `every/mii-costume-category`                                                                                     | The type of Mii costume that can be used only in `Super Mario Maker 2`             |
| `every-mystery-mushroom`                                                                                         | The Mystery Mushrooms usable only in `Super Mario Maker`                           |
| `every/predefined-message`                                                                                       | The predefined message used online                                                 |
| `every/sample-course`                                                                                            | The sample courses (in `Super Mario Maker` only)                                   |
| \[`every`&#124;`official`&#124;`unofficial`&#124;`maker-central`]<br/>`course-tag`                               | The course tags used online or by the community                                    |
| `every/instrument`                                                                                               | The instrument applicable to anything that can make a sound out of a `Music Block` |
| `every-editor-voice`                                                                                             | The voices applicable to anything placed in the editor                             |

### NPM commands

#### Prerequisites

Before running the application, make sure that `npm` is installed.

Then, from there,
 - run `npm install` to install the `node_modules` package

#### Run the project locally (desktop and mobile)

To run the project, the command `npm run start` is the only thing to do.
 - Start the execution of the tools;
 - Start the development mode;
 - Reload on edits (and save);
 - In the console (and command prompt), display any lint errors.

The project could also be run with `npm run fast-start` to omit:
 - CSV → Json (`resources/csv` → `src/resources/compiled`)
 - Copy images for CSS (`public/*` → `src/resources/images`)
 - Copy the locales from `resources/locale` to the `src/lang/locale`
 - (Other things in the future)

By default, it will open it in the default browser automatically.
If it has not worked, then open [localhost:3000/smm-encyclopedia](http://localhost:3000/smm-encyclopedia) to display the application.

If it needs to be tested on other devices than the local machine, there will be another address.
An example could be [192.168.4.20:3000/smm-encyclopedia](http://192.168.4.20:3000/smm-encyclopedia).

#### Running tests

The tests are not part of the validations on the server.
They are only done locally.

It has:
 - Testing the CSV files `npm run test-file`
 - Testing the entity types (upcoming tests)

#### Running testing tool

The command to execute the test command tool is `npm run test`.

Then, from that, it will start an interactive watch mode.
For more details, see [how to run the tests](https://facebook.github.io/create-react-app/docs/running-tests).

#### Deploying the changes to the server

Since the project uses the workflow (in [.github/workflows/workflow.yml](https://github.com/joooKiwi/smm-encyclopedia/blob/main/.github/workflows/workflow.yml)),
it will automatically push the changes once there is a commit in the main branch.

It automatically calls the command `npm run deploy` (implicitly calling `npm run predeploy`).

With the deployment, it will automatically call `npm run build` and will:
 - Minify of the files;
 - Contain files formatted in _static/js/\[420.jank69].chunk.js_ and _static/css/\[420.jank69].chunk.css_.

See [the application's deployment](https://facebook.github.io/create-react-app/docs/deployment) to know in details how the **React build** is done.

The code will be pushed in the branch [github-pages branch](https://github.com/joooKiwi/smm-encyclopedia/tree/gh-pages) by the workflow.
