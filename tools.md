
## Mac items2

- zsh & oh my zsh
- powerline10k theme zsh
- Solarized Dark theme iterm

## Window terminal 
- Turn on Windows Subsystem for Linux
- Install wsl [click](https://learn.microsoft.com/en-us/windows/wsl/install)
- install zsh `sudo apt-get install zsh -y`
- install oh my zsh [click](https://ohmyz.sh/#install)
- install font for powerline10k [click](https://github.com/romkatv/powerlevel10k#meslo-nerd-font-patched-for-powerlevel10k)
- install powerline10k [click](https://github.com/romkatv/powerlevel10k#oh-my-zsh)
- click new tab and config powerline10k
- set start dir: `\\wsl$\Ubuntu-20.04\home\aecuto`

## zsh plugin
```sh
# nano ~/.zshrc
plugins=( [plugins...] zsh-autosuggestions zsh-syntax-highlighting)

```

## Iterm2 for multiple service and run on local

- add `DISABLE_AUTO_TITLE=true` to ~/.zshrc
- set profile general > name to Session Name
- write script for iterm2 using python3
