document.addEventListener('DOMContentLoaded', function () {
    function loadBlogFromHash() {
        const hash = window.location.hash;
        if (hash.startsWith('#blog-')) {
            const blogId = hash.replace('#blog-', ''); // Extract blog number (e.g., "3" from "#blog-3")
            if (!isNaN(blogId) && Number.isInteger(Number(blogId))) {
                displayBlogContent(blogId); // Load the content if it's a valid integer
            }
        }
    }

    async function displayBlogContent(blogId) {
        try {
            const blogModule = await import(`./blogs/${blogId}/blog.js`)
            const blogContent = blogModule.blogContent;
            if (blogContent) { contentElement.innerHTML = marked.parse(blogContent); }
            else { contentElement.innerHTML = '<p>No content available for this blog.</p>'; }
        } catch (error) {
            contentElement.innerHTML = '<p>Error loading the blog content.</p>';
            console.error('Error loading blog content:', error);
        }
    }


    // function loadBlogContent(blogId) {
    //     const script = document.createElement('script');
    //     script.src = `blogs/${blogId}/blog.js`; // e.g., loads blogs/3/blog.js for #blog-3
    //     document.body.appendChild(script);


    //     // Get the output div where the rendered HTML will be displayed
    //     const markdownOutput = document.getElementById('main-content');

    //     // Render the Markdown content to HTML using marked.parse()
    //     markdownOutput.innerHTML = marked.parse(markdownContent);
    // }

    loadBlogFromHash();
    window.addEventListener('hashchange', loadBlogFromHash);
});
