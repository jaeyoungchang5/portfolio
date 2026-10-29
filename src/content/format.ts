import type { DateRange, YearMonth } from './types';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const formatYearMonth = (ym: YearMonth) => {
    const [year, month] = ym.split('-').map(Number);
    return `${MONTHS[month - 1]} ${year}`;
};

export const formatDateRange = ({ start, end, label }: DateRange) =>
    label ?? `${formatYearMonth(start)} – ${end ? formatYearMonth(end) : 'Present'}`;
