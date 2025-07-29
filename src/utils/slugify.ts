// src/utils/slugify.ts
export function slugifyJobName(name: string): string {
    return name.toLowerCase().replace(/\s+/g, '-');
}
