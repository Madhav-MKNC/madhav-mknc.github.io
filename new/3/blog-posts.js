// Array of blog post data
const blogPosts = [
    {
        title: "Blog Title One",
        date: "January 1, 2024",
        author: "Published by You",
        imageSrc: "blog1.jpg",
        desc: "This is the description for blog post one.",
        link: "blogs/blog1.html"
    },
    {
        title: "Blog Title Two",
        date: "February 10, 2024",
        author: "Published by Author",
        imageSrc: "blog2.jpg",
        desc: "This is the description for blog post two.",
        link: "blogs/blog2.html"
    },
    {
        title: "Blog Title Three",
        date: "March 15, 2024",
        author: "Published by Someone Else",
        imageSrc: "blog3.jpg",
        desc: "This is the description for blog post three.",
        link: "blogs/blog3.html"
    }
];

// Function to create a blog post element
function createBlogPost(post) {
    const article = document.createElement('article');
    article.className = 'blog-post';

    const title = document.createElement('p');
    title.className = 'blog-post-title';
    title.textContent = post.title;

    const meta = document.createElement('p');
    meta.className = 'meta';
    meta.textContent = `${post.date} | ${post.author}`;

    const img = document.createElement('img');
    img.src = post.imageSrc;
    img.alt = `Image for ${post.title}`;

    const desc = document.createElement('p');
    desc.className = 'desc';
    desc.textContent = post.desc;

    const readMore = document.createElement('a');
    readMore.href = post.link;
    readMore.className = 'read-more';
    readMore.textContent = 'Read More';

    // Append all elements to the article
    article.appendChild(title);
    article.appendChild(meta);
    article.appendChild(img);
    article.appendChild(desc);
    article.appendChild(readMore);

    return article;
}

// Function to render all blog posts
function renderBlogPosts(posts) {
    const container = document.getElementById('blog-container');
    posts.forEach(post => {
        const blogPostElement = createBlogPost(post);
        container.appendChild(blogPostElement);
    });
}

// Render the blog posts when the page loads
document.addEventListener('DOMContentLoaded', () => {
    renderBlogPosts(blogPosts);
});
