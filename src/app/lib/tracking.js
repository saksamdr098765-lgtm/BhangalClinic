import { event } from "./analytics";

export const trackWhatsAppClick = (location) => {
  event({
    action: "whatsapp_click",
    category: "Engagement",
    label: location,
  });
};

export const trackPhoneClick = (location) => {
  event({
    action: "phone_call",
    category: "Contact",
    label: location,
  });
};



export const trackBookingForm = () => {
  event({
    action: "booking_Form",
    category: "Lead",
    label: "Booking Form",
  });
};



export const trackSocialClick = (platform) => {
  event({
    action: "social_click",
    category: "Social",
    label: platform,
  });
};
export const trackPageNavigation = (page) => {
  event({
    action: "page_navigation",
    category: "Navigation",
    label: page,
  });
};

// Search
export const trackSearch = (searchTerm) => {
  event({
    action: "search",
    category: "Search",
    label: searchTerm,
  });
};

// Package click
export const trackPackageClick = (packageName) => {
  event({
    action: "package_click",
    category: "Packages",
    label: packageName,
  });
};

// Test click
export const trackTestClick = (testName) => {
  event({
    action: "test_click",
    category: "Tests",
    label: testName,
  });
};

// Location page click
export const trackLocationClick = (location) => {
  event({
    action: "location_click",
    category: "Locations",
    label: location,
  });
};

// Service page click
export const trackServiceClick = (service) => {
  event({
    action: "service_click",
    category: "Services",
    label: service,
  });
};

// Generic Event Tracker
export const trackEvent = (labelOrPayload, category = "Engagement", action = "button_click") => {
  if (typeof labelOrPayload === "object" && labelOrPayload !== null) {
    event(labelOrPayload);
  } else {
    event({
      action,
      category,
      label: String(labelOrPayload),
    });
  }
};

// Blog tracking helpers
export const trackBlogClick = (blogSlug, context = "blog_card") => {
  event({
    action: "blog_click",
    category: "Blogs",
    label: `${context}:${blogSlug}`,
  });
};

export const trackBlogCategoryClick = (category) => {
  event({
    action: "blog_category_click",
    category: "Blogs",
    label: category,
  });
};

export const trackBlogShare = (platform, blogSlug) => {
  event({
    action: "blog_share",
    category: "Social Share",
    label: `${platform}:${blogSlug}`,
  });
};

export const trackBlogTOC = (sectionId, blogSlug) => {
  event({
    action: "blog_toc_click",
    category: "Blog Navigation",
    label: `${blogSlug}#${sectionId}`,
  });
};

export const trackBlogFAQ = (question, blogSlug) => {
  event({
    action: "blog_faq_toggle",
    category: "Blog FAQ",
    label: `${blogSlug}:${question}`,
  });
};

export const trackBlogExternalLink = (url, label) => {
  event({
    action: "blog_external_link",
    category: "Outbound Link",
    label: label ? `${label}:${url}` : url,
  });
};