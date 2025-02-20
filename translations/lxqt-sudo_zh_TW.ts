<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="zh_TW">
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
        <translation>複製指令到剪貼簿</translation>
    </message>
    <message>
        <location filename="../passworddialog.ui" line="45"/>
        <source>&amp;Copy</source>
        <translation>複製 (&amp;C)</translation>
    </message>
    <message>
        <location filename="../passworddialog.ui" line="83"/>
        <source>The requested action needs administrative privileges.&lt;br&gt;Please enter your password.</source>
        <translation>此動作需要管理員權限。&lt;br&gt;請輸入您的密碼。</translation>
    </message>
    <message>
        <location filename="../passworddialog.ui" line="106"/>
        <source>LXQt sudo backend</source>
        <translation>LXQt sudo後端</translation>
    </message>
    <message>
        <location filename="../passworddialog.ui" line="109"/>
        <source>A program LXQt sudo calls in background to elevate priveledges.</source>
        <translation>在背景中由LXQT sudo 調用以提升權限的程式。</translation>
    </message>
    <message>
        <location filename="../passworddialog.ui" line="119"/>
        <source>Command:</source>
        <translation>指令：</translation>
    </message>
    <message>
        <location filename="../passworddialog.ui" line="126"/>
        <source>Password:</source>
        <translation>密碼：</translation>
    </message>
    <message>
        <location filename="../passworddialog.ui" line="133"/>
        <source>Enter password</source>
        <translation>輸入密碼</translation>
    </message>
    <message>
        <location filename="../passworddialog.cpp" line="60"/>
        <source>Attempt #%1</source>
        <translation>嘗試 %1</translation>
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
        <translation>使用方式：%1 選項 [指令 [參數...]]

GUI 前端 %2/%3

參數：
  選項：
    -h|--help     顯示此幫助訊息。
    -v|--version  顯示版本訊息。
    -s|--su       使用 %3(1) 當後端。
    -d|--sudo     使用 %2(8) 當後端。
  指令            要執行的指令。
  參數            可選的指令參數。

</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="84"/>
        <source>%1 version %2
</source>
        <translation>%1 版本 %2
</translation>
    </message>
</context>
<context>
    <name>Sudo</name>
    <message>
        <location filename="../sudo.cpp" line="183"/>
        <source>%1: no command to run provided!</source>
        <translation>%1：沒有可執行的指令！</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="190"/>
        <source>%1: no backend chosen!</source>
        <translation>%1：沒有選擇後端！</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="207"/>
        <source>Syscall error, failed to fork: %1</source>
        <translation>系統調用錯誤，復刻%1失敗</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="234"/>
        <source>unset</source>
        <extracomment>shouldn&apos;t be actually used but keep as short as possible in translations just in case.</extracomment>
        <translation>復原</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="270"/>
        <source>%1: Detected attempt to inject privileged command via LC_ALL env(%2). Exiting!
</source>
        <translation>%1：檢測到嘗試通過LC_ALL env（％2）注入特權命令。退出！
</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="314"/>
        <source>Syscall error, failed to bring pty to non-block mode: %1</source>
        <translation type="unfinished">系統調用錯誤，無法將pty調整為非阻止模式：%1</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="322"/>
        <source>Syscall error, failed to fdopen pty: %1</source>
        <translation type="unfinished">系統調用錯誤，開啓pty失敗：%1</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="291"/>
        <source>%1: Failed to exec &apos;%2&apos;: %3
</source>
        <translation>%1：執行 &apos;%2&apos; 失敗：%3
</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="353"/>
        <source>Child &apos;%1&apos; process failed!
%2</source>
        <translation>子執行序&apos;%1&apos;執行失敗！
%2</translation>
    </message>
</context>
</TS>
