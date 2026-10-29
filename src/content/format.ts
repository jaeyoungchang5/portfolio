import type { DateRange, YearMonth } from './types';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const parse = (ym: YearMonth) => ym.split('-').map(Number) as [number, number];

const formatYearMonth = (ym: YearMonth) => {
    const [year, month] = parse(ym);
    return `${MONTHS[month - 1]} ${year}`;
};

export const formatDateRange = ({ start, end, label }: DateRange) =>
    label ?? `${formatYearMonth(start)} – ${end ? formatYearMonth(end) : 'Present'}`;

/** Year-only span covering every range, e.g. '2024 – Present' or '2021'. */
export const formatYearSpan = (ranges: DateRange[]) => {
    const startYear = Math.min(...ranges.map(r => parse(r.start)[0]));
    if (ranges.some(r => !r.end)) return `${startYear} – Present`;
    const endYear = Math.max(...ranges.map(r => parse(r.end!)[0]));
    return startYear === endYear ? `${startYear}` : `${startYear} – ${endYear}`;
};
