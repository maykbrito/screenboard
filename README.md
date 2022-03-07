<p align="center">
<img src="./assets/screenboard.png" width="190px"/>
</p>
<h1 align="center">👨🏾‍🏫 Screenboard 👨🏾‍</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-3.0.3-blue.svg?cacheSeconds=2592000" />

  <a href="https://github.com/maykbrito/screenboard/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>

  <a href="https://twitter.com/maykbrito" target="_blank">
    <img alt="Twitter: maykbrito" src="https://img.shields.io/twitter/follow/maykbrito.svg?style=social" />
  </a>
</p>

> 👨🏾‍🏫 It's an overlay blackboard on your screen

📹 Small presentation about this project https://youtu.be/tq-pzpaqn5Q

### 🏠 [Homepage](https://github.com/maykbrito/screenboard#readme)

## 🎉 Install

```sh
npm install
```

## 🔥 Usage

```sh
npm start
```

## 🍸 Build

If you want to use it as an app for your platform run
```sh
npm run build
```

It will give to you an file ate ./packages directory

## ⌨️ Shortcuts

While it's running in your terminal, you can do a set of commands:

| Functionality         | Keyboard Shortcut        |
| -:                    | :-                       |
| **Toggle Window**     | Alt + Shift + w          |
| **Undo**              | Cmd or Ctrl + z          |
| **Redo**              | Cmd or Ctrl + y          |
| **Clear**             | Cmd or Ctrl + backspace  |
| **Toggle Options**    | Esc                      |
| **Select Pencil**     | w                        |
| **Select Eraser**     | e                        |
| **Increase pen size** | d                        |
| **Decrease pen size** | s                        |
| **Select colors**     | r (red), g (green), b (blue), c (cyan), m (magenta), y (yellow), k (black)                      |

You can customize `your own shortcuts` in `./src/shortcuts.js` file.

## 😢 Limitations

There are some limitations about the transparency on Electron. You can check out [here](https://www.electronjs.org/docs/latest/tutorial/window-customization#limitations).

On Windows OS:

* Transparent windows will not work when DWM is disabled.
* Transparent windows can not be maximized using the Windows system menu or by double clicking the title bar. The reasoning behind this can be seen on PR [#28207](https://github.com/electron/electron/pull/28207).

---

## 🕵🏾‍♂️ Inspiration ...

And lot of code from:

* https://github.com/Leimi/drawingboard.js

## 👨🏾‍💻 Techs

* Javascript
* HTML
* CSS
* Electron
* Node.js

## 👤 Author

**Mayk Brito**

* Website: https://maykbrito.dev
* Twitter: [@maykbrito](https://twitter.com/maykbrito)
* Github: [@maykbrito](https://github.com/maykbrito)
* LinkedIn: [@maykbrito](https://linkedin.com/in/maykbrito)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/maykbrito/screenboard/issues).

## 🧪 Tested in

- MacOS
- Linux \[Ubuntu 20.04.4 LTS\](by [@rrogovski](https://github.com/rrogovski))
- Windows 10/11 (by [@davidlpc1](https://github.com/davidlpc1) / [@rrogovski](https://github.com/rrogovski))

## ✨ Show your support

Give a ⭐️ if this project helped you!

---

## 📝 License

Copyright © 2021 [Mayk Brito](https://github.com/maykbrito).<br />
This project is [MIT](https://github.com/maykbrito/screenboard/blob/master/LICENSE) licensed.

***
_💜_
