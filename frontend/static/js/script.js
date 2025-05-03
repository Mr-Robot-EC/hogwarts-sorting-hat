// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    const now = new Date();
    document.querySelectorAll('footer p').forEach(footer => {
        footer.innerHTML = footer.innerHTML.replace('{{ now.year }}', now.getFullYear());
    });
});

// Parchment effect
function addParchmentEffect() {
    const parchment = document.querySelector('.parchment');
    
    if (!parchment) return;
    
    // Add random burnt edge effect
    const burntPatches = Math.floor(Math.random() * 3) + 2; // 2-4 burnt patches
    for (let i = 0; i < burntPatches; i++) {
        const burntPatch = document.createElement('div');
        burntPatch.className = 'burnt-patch';
        
        // Random position along the edge
        const position = Math.floor(Math.random() * 4); // 0: top, 1: right, 2: bottom, 3: left
        const offset = Math.floor(Math.random() * 80) + 10; // 10-90% along the edge
        
        // Random size
        const size = Math.floor(Math.random() * 30) + 20; // 20-50px
        
        // Style the burnt patch
        burntPatch.style.width = `${size}px`;
        burntPatch.style.height = `${size}px`;
        burntPatch.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
        burntPatch.style.borderRadius = '50%';
        burntPatch.style.position = 'absolute';
        burntPatch.style.filter = 'blur(10px)';
        
        // Position based on edge
        switch (position) {
            case 0: // Top
                burntPatch.style.top = '0';
                burntPatch.style.left = `${offset}%`;
                burntPatch.style.transform = 'translateY(-50%)';
                break;
            case 1: // Right
                burntPatch.style.right = '0';
                burntPatch.style.top = `${offset}%`;
                burntPatch.style.transform = 'translateX(50%)';
                break;
            case 2: // Bottom
                burntPatch.style.bottom = '0';
                burntPatch.style.left = `${offset}%`;
                burntPatch.style.transform = 'translateY(50%)';
                break;
            case 3: // Left
                burntPatch.style.left = '0';
                burntPatch.style.top = `${offset}%`;
                burntPatch.style.transform = 'translateX(-50%)';
                break;
        }
        
        parchment.appendChild(burntPatch);
    }
    
    // Add subtle water stain effects
    const waterStains = Math.floor(Math.random() * 3) + 2; // 2-4 water stains
    for (let i = 0; i < waterStains; i++) {
        const stain = document.createElement('div');
        stain.className = 'water-stain';
        
        // Random position
        const top = Math.floor(Math.random() * 80) + 10; // 10-90%
        const left = Math.floor(Math.random() * 80) + 10; // 10-90%
        
        // Random size
        const size = Math.floor(Math.random() * 100) + 50; // 50-150px
        
        // Style the water stain
        stain.style.width = `${size}px`;
        stain.style.height = `${size}px`;
        stain.style.backgroundColor = 'rgba(165, 140, 100, 0.15)';
        stain.style.borderRadius = '50%';
        stain.style.position = 'absolute';
        stain.style.top = `${top}%`;
        stain.style.left = `${left}%`;
        stain.style.filter = 'blur(20px)';
        stain.style.transform = `rotate(${Math.floor(Math.random() * 360)}deg)`;
        stain.style.pointerEvents = 'none';
        
        parchment.appendChild(stain);
    }
}

// Sorting Hat animations
function addSortingHatAnimations() {
    const sortingHat = document.querySelector('.sorting-hat-animation');
    
    if (!sortingHat) return;
    
    // Random hat movements
    setInterval(() => {
        const randomMovement = Math.floor(Math.random() * 5);
        
        switch (randomMovement) {
            case 0:
                // Subtle wiggle
                sortingHat.style.transform = 'rotate(2deg)';
                setTimeout(() => {
                    sortingHat.style.transform = 'rotate(-2deg)';
                    setTimeout(() => {
                        sortingHat.style.transform = 'rotate(0)';
                    }, 200);
                }, 200);
                break;
            case 1:
                // Small bounce
                sortingHat.style.transform = 'translateY(-10px)';
                setTimeout(() => {
                    sortingHat.style.transform = 'translateY(0)';
                }, 300);
                break;
            case 2:
                // Slight tilt
                sortingHat.style.transform = 'rotate(5deg)';
                setTimeout(() => {
                    sortingHat.style.transform = 'rotate(0)';
                }, 500);
                break;
            default:
                // Do nothing for a moment
                break;
        }
    }, 3000);
}

// Sound effects
const AUDIO = {
    backgroundMusic: null,
    hatThinking: null,
    houseReveal: {
        gryffindor: null,
        hufflepuff: null,
        ravenclaw: null,
        slytherin: null
    }
};

// Initialize sounds
function initSounds() {
    /*
    // Background music
    AUDIO.backgroundMusic = new Audio('/static/sounds/hogwarts-theme.mp3');
    AUDIO.backgroundMusic.loop = true;
    AUDIO.backgroundMusic.volume = 0.3;
    
    // Hat thinking sound
    AUDIO.hatThinking = new Audio('/static/sounds/hat-thinking.mp3');
    
    // House reveal sounds
    AUDIO.houseReveal.gryffindor = new Audio('/static/sounds/gryffindor-reveal.mp3');
    AUDIO.houseReveal.hufflepuff = new Audio('/static/sounds/hufflepuff-reveal.mp3');
    AUDIO.houseReveal.ravenclaw = new Audio('/static/sounds/ravenclaw-reveal.mp3');
    AUDIO.houseReveal.slytherin = new Audio('/static/sounds/slytherin-reveal.mp3');
    */
    }

// Play house reveal sound
function playHouseRevealSound(house) {
    /* 
    if (!AUDIO.houseReveal[house]) return;
    
    // Stop background music
    if (AUDIO.backgroundMusic && !AUDIO.backgroundMusic.paused) {
        AUDIO.backgroundMusic.pause();
    }
    
    // Play reveal sound
    AUDIO.houseReveal[house].currentTime = 0;
    AUDIO.houseReveal[house].play();
    */
}

// Play hat thinking sound
function playHatThinkingSound() {
    /* 
    if (!AUDIO.hatThinking) return;
    
    AUDIO.hatThinking.currentTime = 0;
    AUDIO.hatThinking.play();
    */
}

// Start background music
function startBackgroundMusic() {
    if (!AUDIO.backgroundMusic) return;
    
    // Check if user interaction has occurred
    if (typeof userInteracted === 'undefined' || !userInteracted) {
        // Wait for user interaction
        document.body.addEventListener('click', function bodyClick() {
            AUDIO.backgroundMusic.play();
            userInteracted = true;
            document.body.removeEventListener('click', bodyClick);
        }, { once: true });
    } else {
        AUDIO.backgroundMusic.play();
    }
}

// Handle special cases
function handleSpecialCases() {
    const nameInput = document.getElementById('name');
    
    if (!nameInput) return;
    
    nameInput.addEventListener('input', function() {
        const name = this.value.trim();
        const specialCases = ['Harry', 'Hermione', 'Ron', 'Draco', 'Luna', 'Neville', 'Cedric', 'Cho'];
        
        if (specialCases.includes(name)) {
            // Add special visual effect
            this.classList.add('special-name');
            
            // Add slight glow animation
            this.style.animation = 'glow 1.5s infinite alternate';
        } else {
            this.classList.remove('special-name');
            this.style.animation = '';
        }
    });
}

// Flying elements animations
function addFlyingElements() {
    const container = document.querySelector('.container');
    
    if (!container) return;
    
    // Flying elements to add
    const elements = [
        { name: 'owl', count: 2, duration: [15, 25] },
        { name: 'snitch', count: 1, duration: [8, 12] },
        { name: 'wand-spark', count: 3, duration: [5, 10] }
    ];
    
    elements.forEach(element => {
        for (let i = 0; i < element.count; i++) {
            const el = document.createElement('div');
            el.className = `flying-element ${element.name}`;
            
            // Random position
            const startingTop = Math.floor(Math.random() * 80) + 10;
            
            // Random speed
            const duration = Math.floor(Math.random() * 
                (element.duration[1] - element.duration[0])) + element.duration[0];
            
            // Style
            el.style.top = `${startingTop}%`;
            el.style.animation = `fly-${Math.floor(Math.random() * 2) ? 'left' : 'right'} ${duration}s linear infinite`;
            el.style.animationDelay = `${Math.floor(Math.random() * 10)}s`;
            
            // Add to container
            container.appendChild(el);
        }
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Handle special effects based on page
    const pagePath = window.location.pathname;
    
    // Add common effects
    addParchmentEffect();
    
    // Start preloading sounds
    try {
        initSounds();
    } catch (e) {
        console.log('Sound initialization error:', e);
    }
    
    // Check for specific pages
    if (pagePath === '/' || pagePath.includes('/index')) {
        handleSpecialCases();
        addFlyingElements();
        startBackgroundMusic();
    } else if (pagePath.includes('/sorting')) {
        addSortingHatAnimations();
    } else if (pagePath.includes('/result')) {
        // House-specific effects will be handled by the inline script on that page
    } else if (pagePath.includes('/students')) {
        // Student page initializations
    }
    
    // Add magical cursor effect
    addMagicalCursor();
});

// Magical cursor effect
function addMagicalCursor() {
    const cursor = document.createElement('div');
    cursor.className = 'magical-cursor';
    document.body.appendChild(cursor);
    
    const sparkles = document.createElement('div');
    sparkles.className = 'cursor-sparkles';
    document.body.appendChild(sparkles);
    
    let sparklesArray = [];
    for (let i = 0; i < 5; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkles.appendChild(sparkle);
        sparklesArray.push(sparkle);
    }
    
    document.addEventListener('mousemove', function(e) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
        
        // Add sparkle trail with delay
        sparklesArray.forEach((sparkle, index) => {
            setTimeout(() => {
                sparkle.style.left = `${e.clientX + (Math.random() * 20 - 10)}px`;
                sparkle.style.top = `${e.clientY + (Math.random() * 20 - 10)}px`;
                sparkle.style.opacity = '1';
                
                // Fade out
                setTimeout(() => {
                    sparkle.style.opacity = '0';
                }, 300);
            }, index * 50);
        });
    });
    
    // Add click effect
    document.addEventListener('click', function(e) {
        const clickEffect = document.createElement('div');
        clickEffect.className = 'click-effect';
        clickEffect.style.left = `${e.clientX}px`;
        clickEffect.style.top = `${e.clientY}px`;
        document.body.appendChild(clickEffect);
        
        // Remove after animation
        setTimeout(() => {
            clickEffect.remove();
        }, 1000);
    });
}