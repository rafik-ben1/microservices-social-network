export function getAge(bornAt: string): number {
    const date = new Date(bornAt);
    const diffInMs = Math.abs(new Date().getTime() - date.getTime());
    const diffInYears = diffInMs / (1000 * 60 * 60 * 24 * 365.25);
    return Math.floor(diffInYears);
}


