// 모바일 메뉴 토글
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// 네비게이션 링크 클릭 시 메뉴 닫기
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// 부드러운 스크롤
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70; // 네비게이션 높이 고려
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// 스크롤 시 네비게이션 스타일 변경
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
    }
    
    lastScroll = currentScroll;
});

// 스크롤 애니메이션 (Intersection Observer)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// 애니메이션 대상 요소들
const animateElements = document.querySelectorAll('.portfolio-item, .about-content, .contact-content, .stat-item');

animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// 이미지 오류 처리
window.addEventListener('load', () => {
    // 프로필 이미지 오류 처리
    const profileImage = document.getElementById('profileImage');
    if (profileImage) {
        profileImage.onerror = function() {
            this.style.display = 'none';
            const container = this.parentElement;
            if (container) {
                container.innerHTML = `
                    <div style="width: 240px; height: 240px; border-radius: 50%; background: rgba(255, 255, 255, 0.2); display: flex; align-items: center; justify-content: center; color: white; font-size: 1rem;">
                        프로필 이미지를 추가해주세요
                    </div>
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" class="profile-ring" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 300px; height: 300px; z-index: 2; pointer-events: none;">
                        <circle cx="100" cy="100" r="80" fill="none" stroke="rgba(255, 255, 255, 0.8)" stroke-width="4"/>
                    </svg>
                `;
            }
        };
    }

    // 포트폴리오 이미지 오류 처리
    const portfolioImages = document.querySelectorAll('.portfolio-img');
    portfolioImages.forEach(img => {
        img.onerror = function() {
            this.style.display = 'none';
        };
    });
});

// 스킬 태그 호버 효과 강화
const skillTags = document.querySelectorAll('.skill-tag');

skillTags.forEach(tag => {
    tag.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px) scale(1.05)';
    });
    
    tag.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// 포트폴리오 링크는 새 페이지로 열리도록 (HTML에서 이미 설정됨)
// 포트폴리오 아이템 클릭 시 링크로 이동
const portfolioItems = document.querySelectorAll('.portfolio-item');

portfolioItems.forEach(item => {
    item.addEventListener('click', (e) => {
        // 포트폴리오 링크가 아닌 경우에만
        if (!e.target.classList.contains('portfolio-link') && !e.target.closest('.portfolio-link')) {
            const link = item.querySelector('.portfolio-link');
            if (link && link.getAttribute('href') && link.getAttribute('href') !== '#') {
                window.location.href = link.getAttribute('href');
            }
        }
    });
});

// 현재 섹션 하이라이트 (스크롤 위치에 따라)
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function highlightNav() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', highlightNav);

// 페이지 로드 시 초기화
window.addEventListener('load', () => {
    // 히어로 섹션 애니메이션
    const heroContent = document.querySelector('.hero-content');
    const heroImage = document.querySelector('.hero-image');
    
    if (heroContent) {
        heroContent.style.animation = 'fadeInUp 0.8s ease';
    }
    if (heroImage) {
        heroImage.style.animation = 'fadeInRight 0.8s ease';
    }

    // 기술서 PDF 링크 처리
    const techDocumentLink = document.getElementById('techDocumentLink');
    if (techDocumentLink) {
        techDocumentLink.addEventListener('click', function(e) {
            // PDF 파일이 새 창에서 열리도록 (target="_blank"로 이미 설정됨)
            // 추가로 PDF 뷰어에서 열리도록 처리
            const pdfUrl = this.getAttribute('href');
            if (pdfUrl) {
                // 브라우저가 자동으로 PDF를 열도록 함
                window.open(pdfUrl, '_blank');
            }
        });
    }
});

