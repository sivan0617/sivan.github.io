const works = [
    {
        id: 1,
        title: '海悦汇城 - 客餐厅设计',
        category: '空间设计',
        date: '2024年8月',
        description: '这是一个现代简约风格的客餐厅空间设计项目。通过合理的空间规划和材质选择，创造出一个既实用又美观的居住环境。设计注重光线的利用和色彩的和谐搭配，营造出温馨舒适的氛围。',
        concept: '以"自然与现代的融合"为设计理念，采用大量的自然材质和中性色调，让空间成为生活的容器而非装饰的展示。',
        images: [
            '我的作品/3D效果图/海悦汇城(1)-客餐厅-20240806-200104.jpg',
            '我的作品/3D效果图/海悦汇城(1)-客餐厅-20240807-232842.jpg',
            '我的作品/3D效果图/海悦汇城(1)-客餐厅-20240808-210024.jpg'
        ]
    },
    {
        id: 2,
        title: '旺里火锅 - 品牌视觉设计',
        category: '品牌设计',
        date: '2024年6月',
        description: '为旺里火锅打造完整的品牌视觉识别系统，包括Logo设计、海报设计、店面视觉应用等。设计风格融合传统与现代，展现品牌的独特魅力。',
        concept: '将火锅的热情与中国传统文化元素相结合，通过大胆的色彩对比和有力的视觉语言，传达品牌的活力与品质。',
        images: [
            '我的作品/品牌设计/旺里火锅海报-01.png',
            '我的作品/品牌设计/旺里火锅海报2-03.png',
            '我的作品/品牌设计/NgMTAAJir7Z.png'
        ]
    },
    {
        id: 3,
        title: '暖阳陪护 - UI界面设计',
        category: 'UI设计',
        date: '2024年5月',
        description: '暖阳陪护是一款专注于老年人健康管理和陪护服务的移动应用。界面设计简洁直观，符合老年人的使用习惯，同时保持现代美感。',
        concept: '以"温暖、易用、关怀"为核心设计理念，通过圆润的视觉元素和温馨的色彩搭配，为用户提供贴心的使用体验。',
        images: [
            '我的作品/UI设计/暖阳陪护-设计稿.pdf',
            'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20mobile%20app%20UI%20design%20for%20elderly%20care%2C%20clean%20interface%2C%20warm%20colors&image_size=square_hd'
        ]
    },
    {
        id: 4,
        title: '书籍装帧设计',
        category: '书籍设计',
        date: '2024年4月',
        description: '一套完整的书籍装帧设计作品，包括封面、内页版式、插图等。设计风格简约而富有诗意，通过版式的节奏感和材质的质感传达书籍的内涵。',
        concept: '遵循"少即是多"的设计原则，通过留白和精致的排版，让内容成为视觉的主角，创造出优雅的阅读体验。',
        images: [
            '我的作品/书籍设计/未标题-3_画板 1.png',
            '我的作品/书籍设计/未标题-3-02.png',
            '我的作品/书籍设计/未标题-3-03.png'
        ]
    },
    {
        id: 5,
        title: '包装与展场设计',
        category: '包装设计',
        date: '2024年3月',
        description: '产品包装设计与线下展场空间设计的结合项目。从包装的视觉语言延伸到展场的空间体验，形成统一的品牌呈现。',
        concept: '将二维设计与三维空间相结合，通过几何形态的重复和变化，创造出具有强烈识别度的视觉系统。',
        images: [
            '我的作品/包装设计/展场效果图1.png',
            '我的作品/包装设计/展场效果图2.png',
            '我的作品/包装设计/平面展开图.jpeg'
        ]
    },
    {
        id: 6,
        title: '王者荣耀 - 三折页设计',
        category: '其他作品',
        date: '2024年2月',
        description: '以王者荣耀为主题的三折页宣传设计。通过动感的版式和炫酷的视觉效果，展现游戏的魅力和角色的个性。',
        concept: '融合游戏的视觉语言与现代平面设计，通过层次分明的排版和强烈的视觉对比，打造具有冲击力的宣传物料。',
        images: [
            '我的作品/其他作品/三折页设计王者荣耀.png',
            'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=game%20brochure%20design%2C%20dynamic%20layout%2C%20bold%20typography&image_size=square_hd'
        ]
    }
];

let currentPage = 'home';
let previousPage = 'home';

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initPortfolioGrid();
    initScrollAnimations();
    initRippleEffect();
});

function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const navLogo = document.querySelector('.nav-logo');
    const backBtn = document.getElementById('back-btn');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = link.dataset.page;
            navigateTo(page);
        });
    });

    navLogo.addEventListener('click', () => {
        navigateTo('home');
    });

    backBtn.addEventListener('click', () => {
        navigateTo(previousPage);
    });
}

function navigateTo(page) {
    if (page === currentPage) return;

    previousPage = currentPage;
    currentPage = page;

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.dataset.page === page) {
            link.classList.add('active');
        }
    });

    document.querySelectorAll('.page').forEach(p => {
        p.classList.remove('active');
    });

    const targetPage = document.getElementById(`page-${page}`);
    if (targetPage) {
        targetPage.classList.add('active');
        setTimeout(() => {
            initScrollAnimations();
        }, 100);
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function initPortfolioGrid() {
    const homeGrid = document.getElementById('portfolio-grid');
    const worksGrid = document.getElementById('works-grid');

    const featuredWorks = works.slice(0, 3);

    if (homeGrid) {
        homeGrid.innerHTML = featuredWorks.map(work => createWorkCard(work)).join('');
    }

    if (worksGrid) {
        worksGrid.innerHTML = works.map(work => createWorkCard(work)).join('');
    }

    document.querySelectorAll('.work-card').forEach(card => {
        card.addEventListener('click', () => {
            const workId = parseInt(card.dataset.id);
            showWorkDetail(workId);
        });
    });
}

function createWorkCard(work) {
    const coverImage = work.images[0] || `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=${encodeURIComponent(work.title + ' ' + work.category)}&image_size=square_hd`;
    
    return `
        <div class="work-card ripple fade-in" data-id="${work.id}">
            <img src="${coverImage}" alt="${work.title}" class="work-card-image" onerror="this.src='https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=abstract%20geometric%20design%20bauhaus%20style&image_size=square_hd'">
            <div class="work-card-info">
                <h3 class="work-card-title">${work.title}</h3>
                <p class="work-card-category">${work.category}</p>
            </div>
        </div>
    `;
}

function showWorkDetail(workId) {
    const work = works.find(w => w.id === workId);
    if (!work) return;

    previousPage = currentPage;
    currentPage = 'detail';

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });

    document.querySelectorAll('.page').forEach(p => {
        p.classList.remove('active');
    });

    const detailPage = document.getElementById('page-detail');
    const detailContent = document.getElementById('detail-content');

    const heroImage = work.images[0] || `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=${encodeURIComponent(work.title)}&image_size=landscape_16_9`;
    const galleryImages = work.images.slice(1);

    detailContent.innerHTML = `
        <div class="detail-hero fade-in">
            <img src="${heroImage}" alt="${work.title}" class="detail-hero-image" onerror="this.src='https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=abstract%20geometric%20design%20bauhaus%20style&image_size=landscape_16_9'">
        </div>
        <div class="detail-info">
            <div class="detail-main">
                <h1 class="fade-in">${work.title}</h1>
                <div class="detail-meta fade-in">
                    <div class="detail-meta-item">
                        <div class="detail-meta-label">分类</div>
                        <div class="detail-meta-value">${work.category}</div>
                    </div>
                    <div class="detail-meta-item">
                        <div class="detail-meta-label">完成时间</div>
                        <div class="detail-meta-value">${work.date}</div>
                    </div>
                </div>
                <div class="detail-description fade-in">
                    <p>${work.description}</p>
                </div>
                <div class="detail-concept fade-in">
                    <h3 style="font-size: 1rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: var(--color-gray); margin-bottom: 1rem;">设计理念</h3>
                    <p style="font-size: 1.125rem; line-height: 1.8; color: var(--color-gray);">${work.concept}</p>
                </div>
            </div>
        </div>
        ${galleryImages.length > 0 ? `
            <div class="detail-gallery">
                ${galleryImages.map((img, index) => `
                    <img src="${img}" alt="${work.title} ${index + 1}" class="detail-gallery-image fade-in" onerror="this.style.display='none'">
                `).join('')}
            </div>
        ` : ''}
    `;

    detailPage.classList.add('active');
    
    setTimeout(() => {
        initScrollAnimations();
    }, 100);

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function initScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in:not(.visible)').forEach(el => {
        observer.observe(el);
    });
}

function initRippleEffect() {
    const rippleElements = document.querySelectorAll('.ripple');
    
    rippleElements.forEach(el => {
        el.addEventListener('click', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const ripple = document.createElement('span');
            ripple.style.cssText = `
                position: absolute;
                background: rgba(0, 102, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple-animation 0.6s ease-out;
                pointer-events: none;
                left: ${x}px;
                top: ${y}px;
                width: 20px;
                height: 20px;
                margin-left: -10px;
                margin-top: -10px;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });
}

const style = document.createElement('style');
style.textContent = `
    @keyframes ripple-animation {
        to {
            transform: scale(20);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

let lastScroll = 0;
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > lastScroll && currentScroll > 100) {
        navbar.style.transform = 'translateY(-100%)';
    } else {
        navbar.style.transform = 'translateY(0)';
    }
    
    lastScroll = currentScroll;
});
