<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="ja">
<context>
    <name>PasswordDialog</name>
    <message>
        <location filename="../passworddialog.ui" line="6"/>
        <source>LXQt sudo</source>
        <translation>LXQt sudo</translation>
    </message>
    <message>
        <location filename="../passworddialog.ui" line="42"/>
        <source>Copy command to clipboard</source>
        <translation>クリップボードにコピー</translation>
    </message>
    <message>
        <location filename="../passworddialog.ui" line="45"/>
        <source>&amp;Copy</source>
        <translation>コピー(&amp;C)</translation>
    </message>
    <message>
        <location filename="../passworddialog.ui" line="83"/>
        <source>The requested action needs administrative privileges.&lt;br&gt;Please enter your password.</source>
        <translation>この操作は管理者権限が必要です。&lt;br&gt;あなたのパスワードを入力してください。</translation>
    </message>
    <message>
        <location filename="../passworddialog.ui" line="106"/>
        <source>LXQt sudo backend</source>
        <translation>LXQt sudo バックエンド</translation>
    </message>
    <message>
        <location filename="../passworddialog.ui" line="109"/>
        <source>A program LXQt sudo calls in background to elevate priveledges.</source>
        <translation>プログラム LXQt sudo は、特権を高めるためにバックグラウンドで呼び出します。</translation>
    </message>
    <message>
        <location filename="../passworddialog.ui" line="119"/>
        <source>Command:</source>
        <translation>コマンド:</translation>
    </message>
    <message>
        <location filename="../passworddialog.ui" line="126"/>
        <source>Password:</source>
        <translation>パスワード:</translation>
    </message>
    <message>
        <location filename="../passworddialog.ui" line="133"/>
        <source>Enter password</source>
        <translation>パスワードを入力</translation>
    </message>
    <message>
        <location filename="../passworddialog.cpp" line="60"/>
        <source>Attempt #%1</source>
        <translation>確認 %1 回</translation>
    </message>
</context>
<context>
    <name>QObject</name>
    <message>
        <location filename="../sudo.cpp" line="67"/>
        <source>Usage: %1 option [command [arguments...]]

GUI frontend for %2/%3

Arguments:
  option:
    -h|--help      Print this help.
    -v|--version   Print version information.
    -s|--su        Use %3(1) as backend.
    -d|--sudo      Use %2(8) as backend.
  command          Command to run.
  arguments        Optional arguments for command.

</source>
        <translation>使用法: %1 option [command [arguments...]]

%2/%3 の GUI フロントエンド

引数:
  option:
    -h|--help      このヘルプを表示します。
    -v|--version   バージョン情報を表示します。
    -s|--su        バックエンドに %3(1) を使用します。
    -d|--sudo      バックエンドに %2(8) を使用します｡
  command          実行するコマンド。
  arguments        コマンドのオプション引数。

</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="84"/>
        <source>%1 version %2
</source>
        <translation>%1 バージョン %2
</translation>
    </message>
</context>
<context>
    <name>Sudo</name>
    <message>
        <location filename="../sudo.cpp" line="183"/>
        <source>%1: no command to run provided!</source>
        <translation>%1: 実行するコマンドが指定されてません!</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="190"/>
        <source>%1: no backend chosen!</source>
        <translation>%1: バックエンドが選択されていません!</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="207"/>
        <source>Syscall error, failed to fork: %1</source>
        <translation>Syscall エラー、分岐に失敗しました: %1</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="234"/>
        <source>unset</source>
        <extracomment>shouldn&apos;t be actually used but keep as short as possible in translations just in case.</extracomment>
        <translation>未定義</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="270"/>
        <source>%1: Detected attempt to inject privileged command via LC_ALL env(%2). Exiting!
</source>
        <translation>%1: LC_ALL env(%2)によって特権コマンドを実行しようとしました。終了します！
</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="314"/>
        <source>Syscall error, failed to bring pty to non-block mode: %1</source>
        <translation>Syscall エラー、pty を非ブロックモードに移行できませんでした: %1</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="322"/>
        <source>Syscall error, failed to fdopen pty: %1</source>
        <translation>Syscall エラー、pty の fdopen に失敗しました: %1</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="291"/>
        <source>%1: Failed to exec &apos;%2&apos;: %3
</source>
        <translation>%1: &apos;%2&apos; 実行に失敗しました: %3
</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="353"/>
        <source>Child &apos;%1&apos; process failed!
%2</source>
        <translation>子プロセス &apos;%1&apos; に失敗しました！
%2</translation>
    </message>
</context>
</TS>
