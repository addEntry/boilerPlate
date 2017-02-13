# Fedora post-install instructions

## Uninstall software that we do not like

  ```bash
  sudo dnf remove gnome-shell-extension-background-logo cheese rhythmbox totem shotwell evolution gnome-maps gnome-weather
  ```

## System update and checking of any residues of previously unpacked packages

  ```bash
  sudo dnf update
  sudo dnf autoremove
  sudo dnf clean packages
  ```

## Enabling RPM Fusion repository

  ```bash
  sudo dnf install https://download1.rpmfusion.org/free/fedora/rpmfusion-free-release-$(rpm -E %fedora).noarch.rpm
  ```

## List of software that we want to integrate into our environment

  * - privoxy
  * - dnscrypt-proxy
  * - irssi
  * - irc-otr.x86_64
  * - pidgin
  * - pidgin-otr.x86_64
  * - gnome-shell-extension-pomodoro
  * - nano
  * - xclip
  * - electrum
  * - nmap.x86_64
  * - nmap-frontend.noarch
  * - youtube-dl.noarch
  * - bleachbit
  * - chkrootkit
  * - rkhunter
  * - lynis
  * - yum-utils
  * - gnome-tweak-tool
  * - keepass
  * - vlc
  * - feedreader
  * - chromium
  * - filezilla
  * - icedtea-web
  * - mongodb-server
  * - mongodb
  * - wipe

## Enabling privoxy & mongoDB services at boot

  ```bash
  sudo service privoxy start
  sudo systemctl enable privoxy
  sudo service mongodb start
  sudo service mongod start
  sudo systemctl enable mongod
  ```

## dnsCrypt setup

  ```bash
  sudo dnscrypt-proxy --ephemeral-keys --resolver-name=ns0.dnscrypt.is --daemonize
  ```
