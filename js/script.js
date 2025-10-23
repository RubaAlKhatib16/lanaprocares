const productsData = {
      'product1': {
        title: 'زبدة الجسم بالمانجا  ',
        description: 'زبدةالجسم بالمانجا تساعد على ترطيب البشرة بعمق، مما يمنحها نعومة فورية و رائحة منعشة و تعزز راحة البشرة وتضيف لمسة من الانتعاش طوال اليوم',
        image: 'img/bodybutter.png',
        price: '9.00 دينار'
      },
      'product2': {
        title: 'زيت الجسم للبشرة الناعمة',
        description: 'تركيبة غنية من الزيوت الطبيعية والفيتامينات، مصممة خصيصاً لترطيب البشرة بعمق ومنحها ملمساً حريرياً. يمتص بسرعة ولا يترك أي إحساس دهني. مثالي للاستخدام اليومي بعد الاستحمام.',
        image: 'img/bodyoil.png',
        price: '7.00 دينار'
      },
      'product3': {
        title: 'مقشر الجسم بالقهوة  ',
        description: 'هذا المنتج يقشّر البشرة بلطف ، مما يساعد على إزالة الخلايا الميتة و الشوائب و بفضل تركيبته الغنية يترك بشرتك ناعمة، منعشة ومشرقة ، معززًا إشراقتها الطبيعية ليمنحك مظهرًا صحيًا وحيويًا.. كما يساهم في تحسين ملمس البشرة مما يجعلها أكثر نعومة وحيوية مع الاستخدام المنتظم',
        image: 'img/bodyscrub.png',
        price: '10.00 دينار'
      },
      'product4': {
        title: 'مزيل عرق لا سواه',
        description: 'مزيل عرق طبيعي وفعال يوفر حماية طويلة الأمد من الرائحة دون سد المسام. تركيبة لطيفة على البشرة الحساسة وخالية من المواد الكيميائية الضارة. يمنح شعوراً بالانتعاش طوال اليوم.',
        image: 'img/Deodorants.png',
        price: '6.00 دينار'
      },
      'product5': {
        title: 'زيت الأرغان للشعر',
        description: 'تركيبة غنية بزيت الأرجان الطبيعي و إكليل الجبل و فيتامين E تعمل على تعزيز قوة الشعر و ترطيبه بعمق ، تمنح شعرك لمعانًا فائقًا و تساعد على تحسين صحة الشعر و يضفي عليه نعومة و حيوية',
        image: 'img/hairoil.jpg',
        price: '12.00 دينار'
      },
      'product6': {
        title: 'سيروم ألفا أربوتين',
        description: 'سيروم فعال يحتوي على تركيز عالٍ من ألفا أربوتين، المعروف بقدرته على تفتيح البقع الداكنة وتصبغات البشرة. يعزز إشراقة البشرة ويوحد لونها بفعالية وأمان.',
        image: 'img/serum.png',
        price: '15.00 دينار'
      }
    };

    document.addEventListener('DOMContentLoaded', function() {
      // الحصول على عناصر الـ Modal
      const modal = document.getElementById("productModal");
      if (!modal) return; 

      const closeBtn = modal.querySelector(".close-btn");
      const modalTitle = modal.querySelector("#modalTitle");
      const modalImage = modal.querySelector("#modalImage");
      const modalDescription = modal.querySelector("#modalDescription");
      const modalPrice = modal.querySelector("#modalPrice");
      const detailButtons = document.querySelectorAll('.product-detail-btn');

      // وظيفة لفتح الـ Modal وتعبئة البيانات
      function openModal(productId) {
        const product = productsData[productId];
        if (product) {
          modalTitle.textContent = product.title;
          modalImage.src = product.image;
          modalImage.alt = product.title;
          modalDescription.textContent = product.description;
          modalPrice.textContent = `السعر: ${product.price}`;
          modal.style.display = "flex"; // تغيير display إلى flex
        }
      }

      // ربط وظيفة فتح الـ Modal بأزرار التفاصيل
      detailButtons.forEach((button, index) => {
        const productId = `product${index + 1}`;
        button.setAttribute('data-product-id', productId);
        button.href = '#'; // إزالة الرابط الافتراضي

        button.addEventListener('click', function(e) {
          e.preventDefault(); // منع الانتقال إلى رابط #
          const id = this.getAttribute('data-product-id');
          openModal(id);
        });
      });

      // إغلاق الـ Modal عند النقر على (x)
      if (closeBtn) {
        closeBtn.onclick = function() {
          modal.style.display = "none";
        }
      }

      // إغلاق الـ Modal عند النقر خارج الـ Modal
      window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      }

      // إغلاق الـ Modal عند الضغط على مفتاح ESC
      document.addEventListener('keydown', function(event) {
        if (event.key === "Escape") {
          modal.style.display = "none";
        }
      });
    });

    // ========== NAVBAR FUNCTIONALITY ==========
    const header = document.querySelector('.galaxy-header');
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-link');

    // Scroll effect for navbar
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });

    // Mobile menu toggle
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });

    // Close menu when clicking on a link
    navItems.forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('show');
        navItems.forEach(item => item.classList.remove('active'));
        link.classList.add('active');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
        navLinks.classList.remove('show');
      }
    });

    // ========== HERO SLIDER FUNCTIONALITY ==========
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    let autoSlideInterval;

    // Create dots
    const dotsContainer = document.getElementById('dotsContainer');
    slides.forEach((_, index) => {
      const dot = document.createElement('div');
      dot.classList.add('dot');
      if (index === 0) dot.classList.add('active');
      dot.addEventListener('click', () => goToSlide(index));
      dotsContainer.appendChild(dot);
    });
    const dots = document.querySelectorAll('.dot');

    function showSlide(n) {
      slides.forEach((slide, i) => {
        if (i === n) {
          slide.classList.add('active');
        } else {
          slide.classList.remove('active');
        }
      });
      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === n);
      });
    }

    function nextSlide() {
      // Logic remains the same, but the visual effect is now RTL
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }

    function prevSlide() {
      // Logic remains the same, but the visual effect is now RTL
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
    }

    function goToSlide(n) {
      currentSlide = n;
      showSlide(currentSlide);
      resetAutoSlide();
    }

    // Auto slide
    function startAutoSlide() {
      autoSlideInterval = setInterval(nextSlide, 5000);
    }

    function resetAutoSlide() {
      clearInterval(autoSlideInterval);
      startAutoSlide();
    }

    // Button controls (The icons are swapped in HTML, so the functions remain the same)
    document.getElementById('nextBtn').addEventListener('click', () => {
      nextSlide();
      resetAutoSlide();
    });

    document.getElementById('prevBtn').addEventListener('click', () => {
      prevSlide();
      resetAutoSlide();
    });

    startAutoSlide();

    // ========== ANIMATED PARTICLES ==========
    function createParticles() {
      const container = document.getElementById('particlesContainer');
      const particleCount = window.innerWidth < 768 ? 20 : 50;

      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');

        const randomLeft = Math.random() * 100;
        const randomDelay = Math.random() * 20;
        const randomDuration = 15 + Math.random() * 15;

        particle.style.left = randomLeft + '%';
        particle.style.animationDelay = randomDelay + 's';
        particle.style.animationDuration = randomDuration + 's';

        container.appendChild(particle);
      }
    }

    createParticles();