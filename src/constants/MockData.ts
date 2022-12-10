import {MonthsDataModel, TableColumn} from "../models/MonthsDataModel";

export const mockData: MonthsDataModel[] = [
    {
        monthName: "April",
        numberOfBirth: 115,
        numberOfDeath: 89,
        growth: true,
    },
    {
        monthName: "January",
        numberOfBirth: 89,
        numberOfDeath: 105,
        growth: false,
    },
    {
        monthName: "March",
        numberOfBirth: 99,
        numberOfDeath: 93,
        growth: true,
    },
    {
        monthName: "May",
        numberOfBirth: 76,
        numberOfDeath: 65,
        growth: true,
    },
    {
        monthName: "June",
        numberOfBirth: 98,
        numberOfDeath: 74,
        growth: true,
    },
    {
        monthName: "July",
        numberOfBirth: 66,
        numberOfDeath: 87,
        growth: false,
    },
    {
        monthName: "August",
        numberOfBirth: 88,
        numberOfDeath: 92,
        growth: false,
    },
    {
        monthName: "September",
        numberOfBirth: 103,
        numberOfDeath: 88,
        growth: true,
    },
    {
        monthName: "October",
        numberOfBirth: 89,
        numberOfDeath: 95,
        growth: false,
    },
    {
        monthName: "November",
        numberOfBirth: 102,
        numberOfDeath: 86,
        growth: true,
    },
    {
        monthName: "December",
        numberOfBirth: 65,
        numberOfDeath: 65,
        growth: false,
    },
    {
        monthName: "February",
        numberOfBirth: 70,
        numberOfDeath: 35,
        growth: true,
    },
]

export const tableColumns: readonly TableColumn[] = [
    {
        id: 'monthName',
        numeric: false,
        label: 'Month Name',
    },
    {
        id: 'numberOfBirth',
        numeric: true,
        label: 'Number Of Birth',
    },
    {
        id: 'numberOfDeath',
        numeric: true,
        label: 'Number Of Death',
    },
    {
        id: 'growth',
        numeric: false,
        label: 'Growth',
    },
];