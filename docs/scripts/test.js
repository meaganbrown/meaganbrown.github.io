document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.content-image');
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('img01');
    const captionText = document.getElementById('caption');
    const close = document.getElementsByClassName("close")[0];
    const timelineBlocks = document.querySelectorAll('.timeline-block');

    let currentImageIndex = 0;  // Initialize the current index for image cycling

    const imageData = [
        {
            src: "images/pathways.png",
            text: "Continuing Pathways' work estimating the shallow groundwater table in response to Sea Level Rise in Contra Costa County."
        },
        {
            src: "images/dashboard.png",
            text: "Developed multiple front-end applications..."
        },
        // More images and texts can be added here
    ];

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function checkTimelineBlocks() {
        timelineBlocks.forEach((block, index) => {
            if (isInViewport(block)) {
                setTimeout(function() {
                    block.classList.add('reveal');
                }, index * 200);
            }
        });
    }

    // Event listener to cycle through images
    images.forEach((image, index) => {
        image.addEventListener('click', function() {
            modal.style.display = "block";
            modalImg.src = imageData[index].src; // Set the source from imageData array based on clicked image
            captionText.textContent = imageData[index].text; // Set the text from imageData array
            currentImageIndex = index; // Update the current index to the clicked image's index
        });
    });

    modalImg.addEventListener('click', function() {
        currentImageIndex = (currentImageIndex + 1) % imageData.length; // Cycle to the next image
        modalImg.src = imageData[currentImageIndex].src;
        captionText.textContent = imageData[currentImageIndex].text;
    });

    close.addEventListener('click', function() {
        modal.style.display = "none";
    });

    window.addEventListener('scroll', checkTimelineBlocks);
});

document.addEventListener('scroll', function() {
    var winScroll = document.documentElement.scrollTop || document.body.scrollTop; // Get the current vertical position of the scroll bar
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight; // Calculate the total scrollable height
    var scrolled = (winScroll / height) * 100; // Determine the percentage scrolled
    document.getElementById("progressBar").style.height = scrolled + "%"; // Set the height of the progress bar
});

