<h1 align="center">
  POC ReactNative
</h1>
<h3 align="center"></h3>

## 📜 Rules

## 💼 Requirements

## 💾 Installation

```bash
$ git clone <your-repo-link>
$ cd <your-repo>
$ yarn

## ▶️ Running the Project
$ yarn ios && yarn android
```

## ✏️ Project Structure

```
├── __tests__                             # Tests folder
│   ├── App-test.js                       #
├── Android                               # Android folder
│   ├── ...                               # Config Android Env
├── ios                                   # IOS folder
│   ├── ...                               # Config IOS Env
├── src                                   # Application source code
│   ├── api                               # All api endpoints and api related logic goes here
│   ├── assets                            # Imgs, Fonts,...
│   ├── components                        # Global Reusable Components
│   ├── constants                         # Folder for constants/config files
│   ├── screens                           # Screen List
│   │   ├── <ScreenName>                  #
│   │   │   ├── index.js                  #
│   │   │   ├── apis.js                   # Contains Api functions
│   │   │   ├── slice.js                  # Contains reducers, sagas and actions of the container
│   │   │   └── ...                       #
│   │   └── ...                           #
│   ├── store                             # A folder containing all Redux stores
│   │   ├── index.js                      # The App's Redux Store
│   │   ├── rootReducer.js                # Root reducer for the application
│   │   └── rootSaga.js                   # A root Saga aggregates multiple Sagas to a single entry point for the sagaMiddleware to run
│   ├── App.js                            #
│   ├── index.js                          # The entry file for the application
├── .gitignore                            # Specifies intentionally untracked files that Git should ignore
├── .prettierrc                           # Prettier config
├── babel.config.js                       # Config Alias
├── jsconfig.json                         # Specifies the root files and the options for the features provided by the JavaScript language service.
├── package.json                          # All npm dependencies can be found here
├── README.md                             # Readme file for the whole app
└── ...
```
