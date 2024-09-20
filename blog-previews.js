function createBlogPost(post) {
    const article = document.createElement('article');
    article.className = 'blog-post';

    const titleLink = document.createElement('a');
    titleLink.href = post.link;

    const title = document.createElement('p');
    title.className = 'blog-post-title';
    title.textContent = post.title;

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

    article.appendChild(titleLink);
    article.appendChild(meta);
    article.appendChild(img);
    article.appendChild(desc);
    article.appendChild(readMore);

    return article;
}

async function fetchAndRenderBlogData() {
    const blogsDir = 'blogs';
    const container = document.getElementById('blog-container');

    for (let i = 1; i <= 20; i++) {
        try {
            let response = await fetch(`${blogsDir}/${i}/meta.json`);
            if (response.ok) {
                let metaData = await response.json();
                const blogPostElement = createBlogPost(metaData);
                container.appendChild(blogPostElement);
            }
        } catch (error) {
            console.log(`Blog ${i} not found or error fetching meta.json.`);
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    fetchAndRenderBlogData();  // Start fetching and rendering posts immediately
});

document.addEventListener('DOMContentLoaded', async () => {
    renderBlogPosts(await fetchBlogData());
});

