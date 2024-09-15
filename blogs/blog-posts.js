// Array of blog post data
const blogPosts = [
    {
        title: "Are We Heading Towards a Dystopian or Utopian Future?",
        date: "Feb 17, 2024",
        author: "Published by Madhav Kumar",
        imageSrc: "blogs/1/thumbnail.png",
        desc: "As technology races ahead, this blog explores both sides of the future — from job automation and privacy concerns to a world where AI solves our biggest challenges. Dive into the possibilities and the uncertainties of what's to come, and discover why the journey itself might be the most captivating part.",
        link: "https://madhav-mknc.medium.com/are-we-heading-towards-a-dystopian-or-utopian-future-1742faa8af19"
    },
    {
        title: "The Future Redefined: Imagine a World Beyond Jobs",
        date: "May 26, 2024",
        author: "Published by Madhav Kumar",
        imageSrc: "blogs/2/thumbnail.png",
        desc: "Is a future without jobs possible? As AI advances, our idea of work is changing fast. Instead of fearing job loss, what if we see it as a chance for a new beginning? Explore how technology might reshape our world, challenging the very idea of work as we know it.",
        link: "https://madhav-mknc.medium.com/the-future-redefined-imagine-a-world-beyond-jobs-330a42b41c54"
    },
    // {
    //     title: "Blog Title Three",
    //     date: "March 15, 2024",
    //     author: "Published by Someone Else",
    //     imageSrc: "blogs/3/thumbnail.png",
    //     desc: "This is the description for blog post three.",
    //     link: "blogs/3/index.html"
    // }
];

// Function to create a blog post element
function createBlogPost(post) {
    const article = document.createElement('article');
    article.className = 'blog-post';

    // Create the anchor for the title
    const titleLink = document.createElement('a');
    titleLink.href = post.link;

    const title = document.createElement('p');
    title.className = 'blog-post-title';
    title.textContent = post.title;

    // Append the title to the anchor
    titleLink.appendChild(title);

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
    readMore.textContent = 'Continue Reading...';

    // Append all elements to the article
    article.appendChild(titleLink);
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
