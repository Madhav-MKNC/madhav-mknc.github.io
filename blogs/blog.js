document.addEventListener('DOMContentLoaded', function () {
    async function loadTitle() {
        try {
            const response = await fetch('meta.json');
            if (!response.ok) throw new Error('Error fetching blog metadata.');
            const blogData = await response.json();
            document.title = blogData.title;
        } catch (error) {
            console.error('Error loading title:', error);
        }
    }

    async function loadBlogContent() {
        try {
            const response = await fetch('blog.md');
            if (!response.ok) throw new Error('Error fetching blog.md');

            const markdownContent = await response.text();
            document.getElementById('blog-full').innerHTML = marked.parse(markdownContent);
            loadShareButtons();
        } catch (error) {
            document.getElementById('blog-full').innerHTML = '<p>Error loading the blog content.</p>';
            console.error('Error loading blog content:', error);
        }
    }

    loadTitle();
    loadBlogContent();
});
