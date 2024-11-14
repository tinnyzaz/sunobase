███████╗██╗   ██╗███╗   ██╗ ██████╗ ██████╗  █████╗ ███████╗███████╗██╗
██╔════╝██║   ██║████╗  ██║██╔═══██╗██╔══██╗██╔══██╗██╔════╝██╔════╝██║
███████╗██║   ██║██╔██╗ ██║██║   ██║██████╔╝███████║███████╗█████╗  ██║
╚════██║██║   ██║██║╚██╗██║██║   ██║██╔══██╗██╔══██║╚════██║██╔══╝  ╚═╝
███████║╚██████╔╝██║ ╚████║╚██████╔╝██████╔╝██║  ██║███████║███████╗██╗
╚══════╝ ╚═════╝ ╚═╝  ╚═══╝ ╚═════╝ ╚═════╝ ╚═╝  ╚═╝╚══════╝╚══════╝╚═╝
                                                                       
# Sunobase

Sunobase is a web application that allows you to scrape your Suno song library page by page to create an easily sortable and searchable local database.
The application provides features to search, filter, and sort the data, as well as dynamically adjust column widths and load images.

## Features

- **Load JSON File**: Load a JSON file containing Sunobase data.
- **Search and Filter**: Search and filter data across all fields or specific columns.
- **Sort Columns**: Sort data by clicking on column headers.
- **Adjust Column Widths**: Manually adjust column widths using input boxes.
- **Load Images**: Toggle to load or unload images.
- **Responsive Design**: The application is responsive and works on various screen sizes.

## Usage

1. **Open the Browser Console**: Open your web browser and navigate to the Developer Tools (usually accessible by pressing `F12` or `Ctrl+Shift+I`).
2. **Paste the Code**: Copy the code from the `sunobase_scraper.js` file and paste it into the Console tab of the Developer Tools.
3. **Load JSON File**: Click on the file input to upload a JSON file containing Sunobase data.
4. **Search and Filter**: Use the global search input to search across all fields. Use the individual column filter inputs to filter specific columns.
5. **Sort Columns**: Click on the column headers to sort the data. Click again to toggle between ascending and descending order.
6. **Adjust Column Widths**: Toggle the "Edit Columns" checkbox to show or hide the column width input boxes. Adjust the widths as needed.
7. **Load Images**: Toggle the "Load Images" checkbox to load or unload images. WARNING: If your song database is large, this will load a LOT of images from Suno's website. I plan to implement a local thumbnail database so this only needs to be done rarely (if you need to do it at all, which is debatable), but for now it will load them from Suno every time, so keep that in mind.

## Installation

To run the application, follow these steps:

1. **Open the Browser Console**: Open your web browser and navigate to the Developer Tools (usually accessible by pressing `F12` or `Ctrl+Shift+I`).
2. **Paste the Code**: Copy the code from the `index.html` file and paste it into the Console tab of the Developer Tools.

## Contributing

Contributions are welcome! If you have any suggestions or improvements, please create an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Sunobase](https://suno.com) for providing the data.
- [HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5) and [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS) for the web technologies used.
- [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API) for storing image thumbnails.
