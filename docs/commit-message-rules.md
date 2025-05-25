# Commit Message Rules

- 形式: `<type>(<scope>): <title>`
- 例: `feat(ui): Add login page`
- typeとtitleは必須、scopeは必要そう・追加したほうが分かりやすそうなら追加する

## type

- どういった種類のコミットなのかが一目で分かるように、コミットの種別を書く

| type | 説明 | scopeの例 |
| --- | --- | --- |
| build  | ビルドシステムや外部依存関係に関する変更 | library, package, plugin |
| chore | その他の変更 | log, ci, cd, devcontainer |
| docs | ドキュメントに関する変更 | diagram, setup |
| feat | 機能に関する追加・更新 | web, api, db |
| fix | バグ修正 | web, api, db |
| perf  | パフォーマンスチューニング | web, db, infrastructure |
| refactor | リファクタリング | web, api, db, test |
| style | コーディングスタイルに関する変更 | linting, formatting |
| test | テストに関する変更 | unit, e2e, ui, api, db |
| revert  | 元に戻す |  |
| WIP  | Work In Progress |  |

## scope

- typeを補足する役割
- 名詞・動名詞であれば、基本的には何でも良い

## title

- 変更内容を簡潔に書く
- 英語で書く
- 命令形で書く
- 冠詞(a, the)は付けない
- 末尾に句読点やピリオドは付けない
- 50文字以内で書く
