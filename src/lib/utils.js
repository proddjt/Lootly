export const calculateStars = (num) => {
        return Math.round(num / 0.5) * 0.5;
    }
export function formatDate(date) {
    const [year, month, day] = date.split('-');
    return `${day}-${month}-${year}`;
}
export function isOld(date) {
    const releaseDate = new Date(date);
    const today = new Date();

    const msInTwoWeeks = 14 * 24 * 60 * 60 * 1000;
    return today - releaseDate > msInTwoWeeks;
}
