document.addEventListener('DOMContentLoaded', function () {
    function loadBlogFromHash() {
        const hash = window.location.hash;
        if (hash.startsWith('#blog-')) {
            const blogId = hash.replace('#blog-', ''); // Extract blog number (e.g., "3" from "#blog-3")
            if (!isNaN(blogId) && Number.isInteger(Number(blogId))) {
                loadBlogContent(blogId); // Load the content if it's a valid integer
            }
        }
    }

    function loadBlogContent(blogId) {
        const script = document.createElement('script');
        script.src = `blogs/${blogId}/blog.js`; // e.g., loads blogs/3/blog.js for #blog-3
        document.body.appendChild(script);
    }

    loadBlogFromHash();

    window.addEventListener('hashchange', loadBlogFromHash);
});
