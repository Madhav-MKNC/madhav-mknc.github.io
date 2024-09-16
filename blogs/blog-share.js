function loadShareButtons () {
    let blogFullDiv = document.getElementById('blog-share');
    if (blogFullDiv) {
        var shareSection = document.createElement('div');
        shareSection.setAttribute('id', 'social-share-section');
        shareSection.classList.add('social-share-section');

        var sectionTitle = document.createElement('h3');
        sectionTitle.classList.add('section-title');
        sectionTitle.textContent = 'Share this:';

        var buttonContainer = document.createElement('div');
        buttonContainer.classList.add('share-buttons-container');

        var twitterButton = document.createElement('button');
        twitterButton.setAttribute('id', 'twitter-share');
        twitterButton.classList.add('share-button', 'share-twitter');
        twitterButton.setAttribute('title', 'Share on Twitter');
        twitterButton.onclick = function () {
            window.open('https://twitter.com/share', '_blank');
            return false;
        };

        var twitterIcon = document.createElement('i');
        twitterIcon.classList.add('fa-brands', 'fa-x-twitter');
        twitterButton.appendChild(twitterIcon);
        twitterButton.appendChild(document.createTextNode(' Twitter'));

        var linkedinButton = document.createElement('button');
        linkedinButton.setAttribute('id', 'linkedin-share');
        linkedinButton.classList.add('share-button', 'share-linkedin');
        linkedinButton.setAttribute('title', 'Share on LinkedIn');
        linkedinButton.onclick = function () {
            window.open('https://www.linkedin.com/shareArticle', '_blank');
            return false;
        };

        var linkedinIcon = document.createElement('i');
        linkedinIcon.classList.add('fab', 'fa-linkedin');
        linkedinButton.appendChild(linkedinIcon);
        linkedinButton.appendChild(document.createTextNode(' LinkedIn'));

        buttonContainer.appendChild(twitterButton);
        buttonContainer.appendChild(linkedinButton);

        shareSection.appendChild(sectionTitle);
        shareSection.appendChild(buttonContainer);

        blogFullDiv.appendChild(shareSection);
    }
}
