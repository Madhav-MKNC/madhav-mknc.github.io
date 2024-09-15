document.addEventListener('DOMContentLoaded', function () {
    const contentElement = document.getElementById('blog-full');

    function loadBlogFromHash() {
        const hash = window.location.hash;

        if (hash.startsWith('#blog-')) {
            const blogId = hash.replace('#blog-', '');
            if (!isNaN(blogId) && Number.isInteger(Number(blogId))) {
                loadMarkdownFile(blogId);
            }
        }
    }

    async function loadMarkdownFile(blogId) {
        try {
            const response = await fetch(`./blogs/${blogId}/blog.md`);
            if (!response.ok) {
                throw new Error(`Error fetching blog${blogId}.md`);
            }

            const markdownContent = await response.text();
            contentElement.innerHTML = marked.parse(markdownContent);
        } catch (error) {
            contentElement.innerHTML = '<p>Error loading the blog content.</p>';
            console.error('Error loading blog content:', error);
        }
    }

    loadBlogFromHash();
    window.addEventListener('hashchange', loadBlogFromHash);
});
