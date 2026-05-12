import { ExtendedProject } from "@/data/projectData";

export interface ValidationResult {
  valid: boolean;
  errors: string[];
}

/**
 * Validates a project number string.
 * Accepts only two-digit zero-padded strings (e.g. "01", "99").
 */
export function validateProjectNumber(number: string): boolean {
  return /^\d{2}$/.test(number);
}

/**
 * Validates a year string.
 * Accepts "YYYY" or "YYYY - YYYY" format.
 */
export function validateYear(year: string): boolean {
  return /^\d{4}(\s-\s\d{4})?$/.test(year);
}

/**
 * Validates all field constraints of an ExtendedProject.
 */
export function validateProject(project: ExtendedProject): ValidationResult {
  const errors: string[] = [];

  // Validate number
  if (!validateProjectNumber(project.number)) {
    errors.push('number must be a two-digit zero-padded string (e.g. "01")');
  }

  // Validate company
  if (project.company.length > 100) {
    errors.push("company must be at most 100 characters");
  }

  // Validate year
  if (!validateYear(project.year)) {
    errors.push('year must be in format "YYYY" or "YYYY - YYYY"');
  }

  // Validate headline
  if (project.headline.length > 150) {
    errors.push("headline must be at most 150 characters");
  }

  // Validate tags
  if (project.tags.length < 1 || project.tags.length > 10) {
    errors.push("tags must have between 1 and 10 items");
  } else {
    for (let i = 0; i < project.tags.length; i++) {
      if (project.tags[i].length > 30) {
        errors.push(`tags[${i}] must be at most 30 characters`);
      }
    }
  }

  // Validate stats
  if (project.stats.length < 1 || project.stats.length > 6) {
    errors.push("stats must have between 1 and 6 items");
  } else {
    for (let i = 0; i < project.stats.length; i++) {
      if (project.stats[i].value.length > 20) {
        errors.push(`stats[${i}].value must be at most 20 characters`);
      }
      if (project.stats[i].label.length > 50) {
        errors.push(`stats[${i}].label must be at most 50 characters`);
      }
    }
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}
