// Dynamically load Markdown content
const markdownContent = `
# Welcome to My Blog
## h2
### h3
#### h4
#### *h4*

This is a **Markdown** example with some colored text.

- This is a <span style="color: red;">red bullet point</span>.
- This is a <span style="color: green;">green bullet point</span>.

> A <span style="color: blue;">blue blockquote</span>

[Visit Google](https://google.com)

This is an example of a blog written in **Markdown**.

## Heading 2

- Bullet point 1
- Bullet point 2

> Blockquote example

[Link to Google](https://google.com)

### More Markdown Features

You can add more content here and it will be dynamically rendered.
`;

// Get the output div where the rendered HTML will be displayed
const markdownOutput = document.getElementById('markdown-output');

// Render the Markdown content to HTML using marked.parse()
markdownOutput.innerHTML = marked.parse(markdownContent);

