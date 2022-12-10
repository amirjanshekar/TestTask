export interface MonthsDataModel {
    monthName: string;
    numberOfBirth: number;
    numberOfDeath: number;
    growth: boolean;
}

export interface TableColumn {
    id: keyof MonthsDataModel;
    numeric: boolean,
    label: string,
}

export type TableOrder = 'asc' | 'desc';

export interface TablePaginationActionsProps {
    count: number;
    page: number;
    rowsPerPage: number;
    onPageChange: (
        event: MouseEvent,
        newPage: number,
    ) => void;
}