# How to setup The Best Window Bash

### Install Windows Subsystem for Linux
```
Find in Google
```
### Install Window terminal
```
Install with microsoft store
```
### Install zsh
```sh
sudo apt install zsh
chsh -s $(which zsh)
```
### Install powerline10k theme [github](https://github.com/romkatv/powerlevel10k)

- install font from above link

```sh
# then install it
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ~/powerlevel10k

echo 'source ~/powerlevel10k/powerlevel10k.zsh-theme' >> ~/.zshrc
```
### Window terminal Theme [click](https://windowsterminalthemes.dev/)
Basic Setting
```json
 "defaults": {
    "fontFace": "MesloLGS NF",
    "colorScheme": "Solarized Dark - Patched",
    "startingDirectory": "E:/Development"
  }
```
`colorScheme: name_theme from schemes: [{... name: "name_theme" ...}]`

## Now open Window Terminal and enjoy :)