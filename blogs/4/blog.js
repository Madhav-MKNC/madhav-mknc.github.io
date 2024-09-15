const markdownContent = `
# THIS IS THE NEXT THING

> A <span style="color: blue;">blue blockquote</span>

> Blockquote example

[Link to Google](https://google.com)

### More Markdown Features

You can add more content here and it will be dynamically rendered.
`;

// Get the output div where the rendered HTML will be displayed
const markdownOutput = document.getElementById('main-content');

// Render the Markdown content to HTML using marked.parse()
markdownOutput.innerHTML = marked.parse(markdownContent);

