const whatsappNumber = "2348075486287";
const whatsappBase = `https://wa.me/${whatsappNumber}`;

// Image-only style references use temporary labels until product names and prices are confirmed.
// Category tags reflect the visible presentation; availability and collection membership still need confirmation.
const products = [
  { name: "Watch Style 01", price: null, image: "dress%26co%20img/6.jpg", description: "Green wristwatch with an open-style dial.", categories: ["Men"] },
  { name: "Watch Style 02", price: null, image: "dress%26co%20img/8.jpg", description: "Black wristwatch shown with coordinating accessories.", categories: ["Men"] },
  { name: "Watch Style 03", price: null, image: "dress%26co%20img/women%20watch%207.jpg", description: "Silver-tone wristwatch with a turquoise dial, shown with matching bracelets.", categories: ["Women"] },
  { name: "Watch Style 04", price: null, image: "dress%26co%20img/women%20watch%205.jpg", description: "Rose-gold-tone wristwatch with a pink strap and light dial.", categories: ["Women"] },
  { name: "Watch Style 05", price: null, image: "dress%26co%20img/women%20watch%204.jpg", description: "Gold-tone wristwatch with a light dial and linked bracelet.", categories: ["Women"] },
  { name: "Watch Style 06", price: null, image: "dress%26co%20img/13.jpg", description: "Close-up of a dark-dial wristwatch with a two-tone bracelet.", categories: ["Men"] },
  { name: "Watch Style 07", price: null, image: "dress%26co%20img/women%20watch%203.jpg", description: "Gold-tone wristwatch with a light dial, shown on the wrist.", categories: ["Women"] },
  { name: "Watch Style 08", price: null, image: "dress%26co%20img/16.jpg", description: "Silver-tone wristwatch with a dark dial and strap.", categories: ["Men"] },
  { name: "Watch Style 09", price: null, image: "dress%26co%20img/17.jpg", description: "Silver-tone wristwatch with a light dial and dark strap.", categories: ["Men"] },
  { name: "Watch Style 10", price: null, image: "dress%26co%20img/22.jpg", description: "Dark-strap wristwatch with a rose-gold-tone case.", categories: ["Men"] },
  { name: "Luxury Watch 01", price: null, image: "dress%26co%20img/luxury%20watches/7.jpg", description: "Rose-gold-tone wristwatch with a dark strap and detailed dial.", categories: ["Luxury"] },
  { name: "Watch Style 12", price: null, image: "dress%26co%20img/14.jpg", description: "Silver-tone wristwatch with a light dial.", categories: [] },
  { name: "Watch Style 13", price: null, image: "dress%26co%20img/15.jpg", description: "Two-tone silver-and-gold wristwatch with a light dial and linked bracelet.", categories: [] },
  { name: "Luxury Watch 02", price: null, image: "dress%26co%20img/luxury%20watches/18.jpg", description: "Assorted skeleton-dial watches displayed together.", categories: ["Luxury"] },
  { name: "Luxury Watch 03", price: null, image: "dress%26co%20img/luxury%20watches/new%20l.jpg", description: "Two statement wristwatches displayed in presentation boxes.", categories: ["Luxury"] },
  { name: "Luxury Watch 04", price: null, image: "dress%26co%20img/luxury%20watches/new%20l12.jpg", description: "Silver-tone rectangular watch with a black leather strap.", categories: ["Luxury"] },
  { name: "Luxury Watch 05", price: null, image: "dress%26co%20img/luxury%20watches/new%20lll.jpg", description: "Silver-tone skeleton-dial watch with a black leather strap.", categories: ["Luxury"] },
  { name: "Luxury Watch 06", price: null, image: "dress%26co%20img/luxury%20watches/new.jpg", description: "Gold and silver-tone watches displayed in presentation boxes.", categories: ["Luxury"] },
  { name: "Couples Set 01", price: null, image: "dress%26co%20img/luxury%20watches/couples%20and%20twin/6026143471015497625_121.jpg", description: "Matching black-dial watches with dark linked bracelets.", categories: ["Couples"] },
  { name: "Couples Set 02", price: null, image: "dress%26co%20img/luxury%20watches/couples%20and%20twin/6026143471015497629_121.jpg", description: "Matching rose-tone watches with warm-colored dials.", categories: ["Couples"] },
  { name: "Couples Set 03", price: null, image: "dress%26co%20img/luxury%20watches/couples%20and%20twin/6026143471015497631_121.jpg", description: "Matching gold-tone watches with light dials.", categories: ["Couples"] },
  { name: "Twins Set 01", price: null, image: "dress%26co%20img/luxury%20watches/couples%20and%20twin/6026143471015497628_121.jpg", description: "Matching two-tone watches with dark dials.", categories: ["Twins"] },
  { name: "Twins Set 02", price: null, image: "dress%26co%20img/luxury%20watches/couples%20and%20twin/6026143471015497630_121.jpg", description: "Matching white watches with light dials.", categories: ["Twins"] },
  { name: "Twins Set 03", price: null, image: "dress%26co%20img/luxury%20watches/couples%20and%20twin/6026143471015497632_121.jpg", description: "Matching gold-tone watches with dark dials.", categories: ["Twins"] },
];

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".primary-nav");
const menuIcon = menuButton?.querySelector("use");

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Open menu" : "Close menu");
    menuIcon?.setAttribute("href", `images/social-icons.svg#${isOpen ? "menu" : "close"}`);
    navigation.classList.toggle("open", !isOpen);
  });

  navigation.addEventListener("click", (event) => {
    if (!event.target.closest("a")) return;
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open menu");
    menuIcon?.setAttribute("href", "images/social-icons.svg#menu");
    navigation.classList.remove("open");
  });
}

const categoryNavLinks = [];
const categoryNavRoutes = [
  ["Men's Watches", "men"],
  ["Women's Watches", "women"],
  ["Luxury Collection", "luxury"],
  ["Couples & Twins", "couples"],
];

function normalizePath(path) {
  return path.toLowerCase().replace(/\/index\.html$/, "").replace(/\/$/, "") || "/";
}

const currentPath = normalizePath(window.location.pathname);
document.querySelectorAll("a[href]").forEach((link) => {
  const url = new URL(link.href, window.location.href);
  if (url.origin === window.location.origin && !url.hash && !url.searchParams.has("category") && normalizePath(url.pathname) === currentPath) {
    link.setAttribute("aria-current", "page");
  } else {
    link.removeAttribute("aria-current");
  }
});

if (navigation) {
  const collectionsLink = [...navigation.querySelectorAll("a")].find((link) => normalizePath(new URL(link.href, window.location.href).pathname).endsWith("/collections") || link.pathname.endsWith("collections.html"));
  if (collectionsLink) {
    const dropdown = document.createElement("div");
    dropdown.className = "nav-dropdown";
    const submenu = document.createElement("div");
    submenu.className = "nav-submenu";
    submenu.setAttribute("aria-label", "Watch categories");
    categoryNavRoutes.forEach(([label, key]) => {
      const link = document.createElement("a");
      link.href = `shop.html?category=${key}`;
      link.textContent = label;
      link.dataset.categoryKey = key;
      categoryNavLinks.push(link);
      submenu.append(link);
    });
    collectionsLink.parentNode.insertBefore(dropdown, collectionsLink);
    dropdown.append(collectionsLink, submenu);
  }
}

// Collection cards lead directly to their matching category on the Shop page.
const collectionCardKeys = {
  "the luxury edit": "luxury",
  "the gentleman's collection": "men",
  "the women's edit": "women",
};
const isCollectionsPage = /collections\.html$/i.test(window.location.pathname);
document.querySelectorAll(".category-card").forEach((card) => {
  const title = card.querySelector("strong")?.textContent.trim().toLowerCase();
  const key = card.dataset.category ? filterKey(card.dataset.category) : collectionCardKeys[title];
  if (!key) return;
  if (!card.dataset.category && !isCollectionsPage) {
    card.href = `shop.html?category=${key}`;
    card.dataset.category = title;
  }

  const image = card.querySelector("img");
  if (image && key === "men") {
    image.src = "dress%26co%20img/16.jpg";
    image.alt = "A silver-tone wristwatch shown in hand";
  } else if (image && key === "women") {
    image.src = "dress%26co%20img/10.jpg";
    image.alt = "Silver-tone wristwatch with a turquoise dial";
  }
});

const heroSlideshow = document.querySelector(".hero-slideshow");
if (heroSlideshow) {
  const heroSlides = [
    { type: "image", src: "dress%26co%20img/17.jpg", caption: "EVERYDAY STYLE", alt: "Silver tone watch with a light dial and dark strap", position: "center 48%" },
    { type: "video", src: "dress%26co%20img/9.mp4", caption: "TIMELESS DETAILS", alt: "DREESO & CO wristwatch shown in a short product video", position: "center 48%" },
    { type: "image", src: "dress%26co%20img/wrist%20watch.jpg", caption: "A CLASSIC TO KEEP", alt: "Two tone wristwatch on a display cushion", position: "center 48%" },
    { type: "video", src: "dress%26co%20img/23.mp4", caption: "MADE FOR YOUR MOMENTS", alt: "DREESO & CO wristwatch shown in a short product video", position: "center 48%" },
    { type: "image", src: "dress%26co%20img/10.jpg", caption: "FIND YOUR STYLE", alt: "Silver tone watch with a turquoise dial", position: "center 48%" },
    { type: "image", src: "dress%26co%20img/22.jpg", caption: "A THOUGHTFUL GIFT", alt: "Dark strap wristwatch in a display setting", position: "center 48%" },
    { type: "image", src: "dress%26co%20img/8.jpg", caption: "TIMELESS DETAILS", alt: "Black wristwatch with coordinating accessories", position: "center 48%" },
  ];
  const heroLayers = [...heroSlideshow.querySelectorAll(".hero-slide")];
  const heroLabel = document.querySelector("#hero-caption");
  const heroCounter = document.querySelector("#hero-counter");
  const heroImage = document.querySelector(".hero-image");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const preloadedSlides = new Map();
  let currentSlide = 0;
  let activeLayer = 0;
  let slideshowTimer;
  let changingSlide = false;

  function preloadSlide(index) {
    if (preloadedSlides.has(index)) return preloadedSlides.get(index);
    const details = heroSlides[index];
    const media = details.type === "video" ? document.createElement("video") : new Image();
    const loaded = new Promise((resolve, reject) => {
      media.addEventListener(details.type === "video" ? "loadeddata" : "load", () => resolve(media), { once: true });
      media.addEventListener("error", reject, { once: true });
    });
    if (details.type === "video") {
      media.muted = true;
      media.loop = true;
      media.playsInline = true;
      media.preload = "auto";
    } else {
      media.decoding = "async";
    }
    media.src = details.src;
    if (details.type === "video") media.load();
    preloadedSlides.set(index, loaded);
    return loaded;
  }

  function setSlideMedia(layer, details, media) {
    const previousVideo = layer.querySelector("video");
    if (previousVideo) previousVideo.pause();
    layer.replaceChildren(media);
    if (details.type === "video") {
      media.muted = true;
      media.defaultMuted = true;
      media.loop = true;
      media.autoplay = true;
      media.playsInline = true;
      media.setAttribute("aria-hidden", "true");
      media.play().catch(() => {});
    } else {
      media.alt = "";
      media.decoding = "async";
    }
    media.style.objectPosition = details.position;
  }

  function advanceSlide() {
    if (changingSlide || reducedMotion.matches) return;
    changingSlide = true;
    const nextSlide = (currentSlide + 1) % heroSlides.length;
    preloadSlide(nextSlide).then((media) => {
      if (reducedMotion.matches) {
        changingSlide = false;
        return;
      }
      const nextLayer = 1 - activeLayer;
      const details = heroSlides[nextSlide];
      setSlideMedia(heroLayers[nextLayer], details, media);
      requestAnimationFrame(() => requestAnimationFrame(() => {
        heroLayers[activeLayer].classList.remove("is-active");
        heroLayers[nextLayer].classList.add("is-active");
        const oldLayer = heroLayers[activeLayer];
        activeLayer = nextLayer;
        currentSlide = nextSlide;
        if (heroLabel) heroLabel.textContent = details.caption;
        if (heroCounter) heroCounter.textContent = `${String(nextSlide + 1).padStart(2, "0")} / ${String(heroSlides.length).padStart(2, "0")}`;
        if (heroImage) heroImage.setAttribute("aria-label", details.alt);
        window.setTimeout(() => oldLayer.querySelector("video")?.pause(), 1200);

        preloadedSlides.delete(nextSlide);
        preloadSlide((nextSlide + 1) % heroSlides.length).catch(() => {});
        changingSlide = false;
      }));
    }).catch(() => {
      changingSlide = false;
    });
  }

  function startSlideshow() {
    if (reducedMotion.matches || slideshowTimer) return;
    preloadSlide((currentSlide + 1) % heroSlides.length).catch(() => {});
    slideshowTimer = window.setInterval(advanceSlide, 6000);
  }

  function stopSlideshow() {
    window.clearInterval(slideshowTimer);
    slideshowTimer = undefined;

  }

  if (reducedMotion.addEventListener) {
    reducedMotion.addEventListener("change", () => reducedMotion.matches ? stopSlideshow() : startSlideshow());
  } else if (reducedMotion.addListener) {
    reducedMotion.addListener(() => reducedMotion.matches ? stopSlideshow() : startSlideshow());
  }

  startSlideshow();
}

const searchInput = document.querySelector("#style-search");
const filterButtons = [...document.querySelectorAll(".filter-chip")];
const collectionResults = document.querySelector("#collection-results");
const couplesTwinsResults = document.querySelector("#couples-twins-results");
let selectedFilter = "all";

function filterKey(value) {
  const text = String(value).toLowerCase();
  if (text.includes("couple") || text.includes("twin")) return "couples";
  if (text.includes("women")) return "women";
  if (text.includes("men")) return "men";
  if (text.includes("luxury")) return "luxury";
  return "all";
}

const requestedCategory = new URLSearchParams(window.location.search).get("category");
const categoryKeys = new Set(["all", "couples", ...categoryNavRoutes.map(([, key]) => key)]);
selectedFilter = categoryKeys.has(requestedCategory) ? requestedCategory : "all";

function updateCategorySelection(updateHistory = false) {
  filterButtons.forEach((button) => {
    const isSelected = filterKey(button.dataset.filter || button.textContent) === selectedFilter;
    button.classList.toggle("active", isSelected);
    button.setAttribute("aria-pressed", String(isSelected));
  });

  document.querySelectorAll(".category-card[data-category]").forEach((card) => {
    const isSelected = selectedFilter !== "all" && filterKey(card.dataset.category) === selectedFilter;
    card.classList.toggle("is-selected", isSelected);
    if (isSelected) card.setAttribute("aria-current", "location");
    else card.removeAttribute("aria-current");
  });

  categoryNavLinks.forEach((link) => {
    const isSelected = link.dataset.categoryKey === selectedFilter;
    link.classList.toggle("is-active", isSelected);
    if (isSelected) link.setAttribute("aria-current", "location");
    else link.removeAttribute("aria-current");
  });

  const collectionsLink = navigation?.querySelector(".nav-dropdown > a");
  if (collectionsLink) collectionsLink.classList.toggle("is-active", selectedFilter !== "all");

  if (updateHistory) {
    const params = new URLSearchParams(window.location.search);
    if (selectedFilter === "all") params.delete("category");
    else params.set("category", selectedFilter);
    const query = params.toString();
    const nextUrl = `${window.location.pathname}${query ? `?${query}` : ""}${window.location.hash}`;
    if (nextUrl !== `${window.location.pathname}${window.location.search}${window.location.hash}`) {
      window.history.pushState({ category: selectedFilter }, "", nextUrl);
    }
  }
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  })[character]);
}

function matchesFilter(product) {
  const categories = (product.categories || []).map((category) => category.toLowerCase());
  switch (selectedFilter) {
    case "men": return categories.includes("men");
    case "women": return categories.includes("women");
    case "luxury": return categories.includes("luxury");
    case "couples": return categories.includes("couples") || categories.includes("twins");
    default: return true;
  }
}

function normalizeSearchText(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
    .replace(/\s+/g, " ");
}

function matchesSearch(product, query) {
  const normalizedQuery = normalizeSearchText(query);
  if (!normalizedQuery) return true;

  const categoryTerms = (product.categories || []).flatMap((category) => {
    switch (category.toLowerCase()) {
      case "men": return ["men", "mens", "man", "male", "gentleman", "gentlemen", "men watches", "mens watches"];
      case "women": return ["women", "womens", "woman", "female", "women watches", "womens watches"];
      case "luxury": return ["luxury", "luxurious", "premium", "high end", "luxury watches"];
      case "couples": return ["couple", "couples", "twin", "twins", "matching", "pairs", "sets"];
      case "twins": return ["couple", "couples", "twin", "twins", "matching", "pairs", "sets"];
      default: return [category];
    }
  });
  const searchableText = normalizeSearchText([
    product.name,
    product.brand,
    product.model,
    product.description,
    "watch watches wristwatch wristwatches timepiece timepieces",
    ...(product.categories || []),
    ...categoryTerms,
  ].filter(Boolean).join(" "));
  const compactQuery = normalizedQuery.replace(/\s/g, "");
  const compactText = searchableText.replace(/\s/g, "");
  const queryTerms = normalizedQuery.split(" ");

  return compactText.includes(compactQuery)
    || (queryTerms.length > 1 && queryTerms.every((term) => searchableText.includes(term)));
}

function renderProductCard(product) {
  const productName = escapeHTML(product.name);
  const productDescription = escapeHTML(product.description || "");
  const productImage = escapeHTML(product.image);
  const naira = new Intl.NumberFormat("en-NG", { style: "currency", currency: "NGN", maximumFractionDigits: 0 });
  const price = Number.isFinite(product.price) ? naira.format(product.price) : null;
  const messageText = `Hello DREESO & CO, I'm interested in ${product.name}${price ? ` priced at ${price}` : ""}. Please confirm its current price and availability.`;
  const message = encodeURIComponent(messageText);
  const categories = product.categories || [];
  const tags = categories.length
    ? categories.map((category) => `<span>${escapeHTML(category)}</span>`).join("")
    : "<span>Category to confirm</span>";
  return `<article class="product-card">
    <div class="product-image"><img src="${productImage}" alt="${productDescription}" loading="lazy"></div>
    <div class="product-info"><div class="product-meta">${tags}</div>
    <h3>${productName}</h3><p>${productDescription}</p><strong class="product-price">${price || "Price on enquiry"}</strong>
    <a class="button button-orange" href="${whatsappBase}?text=${message}" target="_blank" rel="noopener">Enquire on WhatsApp <svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true"><use href="images/social-icons.svg#message"></use></svg></a></div>
  </article>`;
}

function renderProducts() {
  if (!collectionResults) return;

  const query = searchInput ? searchInput.value : "";
  const searchClearButton = document.querySelector(".search-clear");
  if (searchClearButton) searchClearButton.hidden = !query;
  const couplesSection = couplesTwinsResults?.closest(".couples-twins-section");
  if (couplesSection) couplesSection.hidden = Boolean(query.trim()) || selectedFilter !== "all";
  const visibleProducts = products.filter((product) => {
    return matchesFilter(product) && matchesSearch(product, query);
  });
  const collectionCount = document.querySelector("#collection-count");
  if (collectionCount) collectionCount.textContent = `Showing ${visibleProducts.length} ${visibleProducts.length === 1 ? "style" : "styles"}`;

  if (visibleProducts.length === 0) {
    collectionResults.innerHTML = `
      <div class="empty-collection">
        <h3>No watches found matching your search. Try another name or keyword.</h3>
        <button class="button button-orange clear-search-results" type="button">Clear search</button>
      </div>`;
    collectionResults.querySelector(".clear-search-results").addEventListener("click", () => {
      if (searchInput) {
        searchInput.value = "";
        searchInput.focus();
      }
      renderProducts();
    });
    return;
  }

  const couplesGridClass = selectedFilter === "couples" ? " couples-twins-grid" : "";
  const womenGridClass = selectedFilter === "women" ? " women-grid" : "";
  collectionResults.innerHTML = `<div class="product-grid${couplesGridClass}${womenGridClass}">${visibleProducts.map(renderProductCard).join("")}</div>`;
}

if (couplesTwinsResults) {
  const couplesAndTwins = products.filter((product) => {
    const categories = (product.categories || []).map((category) => category.toLowerCase());
    return categories.includes("couples") || categories.includes("twins");
  });
  couplesTwinsResults.innerHTML = `<div class="product-grid couples-twins-grid">${couplesAndTwins.map(renderProductCard).join("")}</div>`;
}

if (collectionResults) {
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      selectedFilter = filterKey(button.dataset.filter || button.textContent);
      updateCategorySelection(true);
      renderProducts();
    });
  });

  if (searchInput) searchInput.addEventListener("input", renderProducts);
  document.querySelector(".search-clear")?.addEventListener("click", () => {
    searchInput.value = "";
    searchInput.focus();
    renderProducts();
  });

  document.querySelectorAll(".category-card[data-category]").forEach((card) => {
    card.addEventListener("click", () => {
      selectedFilter = filterKey(card.dataset.category);
      updateCategorySelection(true);
      renderProducts();
    });
  });

  updateCategorySelection();
  window.addEventListener("popstate", () => {
    const category = new URLSearchParams(window.location.search).get("category");
    selectedFilter = categoryKeys.has(category) ? category : "all";
    updateCategorySelection();
    renderProducts();
  });
  renderProducts();
}

const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();
