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