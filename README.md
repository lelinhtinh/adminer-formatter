# Adminer Formatter

Adminer Formatter is a Chrome Extension that adds SQL formatting functionality to the Adminer query editor.

## Features

- Formats SQL queries directly within the Adminer interface.
- Utilizes the `sql-formatter` package for robust and accurate formatting.
- Designed to maintain backward compatibility with older Adminer versions.

## Installation

1. Download or clone this repository.
2. Open Google Chrome and navigate to `chrome://extensions/`.
3. Enable "Developer mode" in the top right corner.
4. Click "Load unpacked" and select the directory containing this extension.

## Usage

Once installed and enabled, the extension will automatically add formatting capabilities to the SQL query textareas in Adminer.

## Development

The extension relies on a minified version of the `sql-formatter` package located at `libs/sql-formatter.min.js`.

## Credits

This project uses and is inspired by the following open-source projects:

- [Adminer](https://github.com/vrana/adminer) (v4.8.1)
- [SQL Formatter](https://github.com/sql-formatter-org/sql-formatter) (v15.3.0)

## License

MIT License
