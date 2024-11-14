(function() {
  // Step 1: Find all elements with the specified class for songs
  const songElements = document.querySelectorAll('.react-aria-GridListItem');

  // Step 2: Initialize an empty list to store the new data
  const newDataList = [];

  // Step 3: Iterate over the found song elements
  songElements.forEach(element => {
    // Extract the songID from the data-key attribute
    const songID = element.getAttribute('data-key')?.trim();

    // Find the title element and extract the title attribute
    const titleElement = element.querySelector('.font-sans.text-base.font-extrabold.line-clamp-1.break-all.text-primary');
    const title = titleElement ? titleElement.getAttribute('title')?.trim() : null;

    // Find the duration element and extract the text content
    const durationElement = element.querySelector('.flex.absolute.bottom-\\[2px\\].items-center.right-\\[2px\\].text-\\[11px\\].font-mono.bg-vinylBlack-darker\\/70.text-primary.font-bold.px-\\[2px\\].rounded-sm');
    const duration = durationElement ? durationElement.textContent.trim() : null;

    // Find the image element and extract the src attribute
    const imageElement = element.querySelector('.chakra-image.css-umyjtf');
    const imageURL = imageElement ? imageElement.getAttribute('src')?.trim() : null;

    // Find the style prompt element and extract the title attribute
    const styleElement = element.querySelector('.font-sans.text-sm.text-secondary.mb-1');
    const stylePrompt = styleElement ? styleElement.getAttribute('title')?.trim() : null;

    // Add the data to the list if title and songID are present
    if (title && songID) {
      newDataList.push({ songID, title, duration, imageURL, stylePrompt });
    }
  });

  // Step 4: Prompt the user to upload the existing JSON file
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = 'application/json';
  input.onchange = function(event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
        let existingDataList = [];
        try {
          existingDataList = JSON.parse(e.target.result);
        } catch (error) {
          console.error('Error parsing existing JSON data:', error);
        }

        // Step 5: Merge new data with existing data
        const mergedDataList = [...existingDataList, ...newDataList];

        // Step 6: Remove duplicate entries based on songID
        const uniqueDataList = mergedDataList.filter((item, index, self) =>
          index === self.findIndex((t) => t.songID === item.songID)
        );

        // Step 7: Convert the list to JSON format
        const jsonData = JSON.stringify(uniqueDataList, null, 2);

        // Step 8: Create a Blob from the JSON data
        const blob = new Blob([jsonData], { type: 'application/json' });

        // Step 9: Create a link element and trigger a download
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'sunobase.json';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      };
      reader.readAsText(file);
    }
  };
  input.click();
})();