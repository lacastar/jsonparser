# json-format

A Skynet Homescreen app to prettify your JSON input.

[![Add to Homescreen](https://img.shields.io/badge/Skynet-Add%20To%20Homescreen-00c65e?logo=skynet&labelColor=0d0d0d)](https://homescreen.hns.siasky.net/#/skylink/AQDSk2A2WU90V_9Kz4bJNf66z4a9PJZ5qPTzgrBMcNwP_w)


To create a resolver skylink run build, upload the generated dist directory to a Skynet portal using upload directory. Paste set the generated skylink in setlink.js and create a file named .secret with a seed phrase (should only contain a line of reasonably long text). Run node setlink.js and your resolver skylink is generated. (Do not forget to update it in the manifest file.)

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
