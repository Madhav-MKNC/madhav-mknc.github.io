// Array of blog post data
const blogPosts = [
    {
        title: "Are We Heading Towards a Dystopian or Utopian Future?",
        date: "Feb 17, 2024",
        author: "Published by Madhav Kumar",
        imageSrc: "blogs/1/thumbnail.png",
        desc: "This is the description for blog post one.",
        link: "blogs/1/index.html"
    },
    {
        title: "The Future Redefined: Imagine a World Beyond Jobs",
        date: "May 26, 2024",
        author: "Published by Madhav Kumar",
        imageSrc: "blogs/2/thumbnail.png",
        desc: "This is the description for blog post two.",
        link: "blogs/2/index.html"
    },
    {
        title: "Blog Title Three",
        date: "March 15, 2024",
        author: "Published by Someone Else",
        imageSrc: "blogs/3/thumbnail.png",
        desc: "This is the description for blog post three.",
        link: "blogs/3/index.html"
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
