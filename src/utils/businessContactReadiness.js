// src/utils/businessContactReadiness.js
const PLACEHOLDER_PATTERNS = [
  'yourdomain.com',
  '123 diamond st',
  'jewel city',
  'yourbusiness',
  '+1234567890',
];

export function isUsableContactValue(value) {
  if (!value || typeof value !== 'string') return false;
  const normalized = value.trim().toLowerCase();
  if (!normalized) return false;
  return !PLACEHOLDER_PATTERNS.some((placeholder) => normalized.includes(placeholder));
}

export function isUsableDirectMessageNumber(value) {
  if (!isUsableContactValue(value)) return false;
  return /^\d{8,15}$/.test(value);
}

export function getUsableSocials(socials = []) {
  return socials.filter((social) => isUsableContactValue(social?.href));
}

export function getBusinessContactReadiness(contact) {
  return {
    hasPhone: isUsableContactValue(contact?.displayPhone) && isUsableContactValue(contact?.telHref),
    hasDirectMessage: isUsableDirectMessageNumber(contact?.directMessageNumber),
    hasEmail: isUsableContactValue(contact?.email),
    hasAddress: isUsableContactValue(contact?.address),
    hasSocials: getUsableSocials(contact?.socials).length > 0,
  };
}
