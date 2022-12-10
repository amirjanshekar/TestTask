import React, {FunctionComponent, useState} from "react";
import {
    Box, Checkbox,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer, TableFooter,
    TableHead, TablePagination,
    TableRow,
    TableSortLabel,
    TextField
} from "@mui/material";
import {tableColumns, mockData} from "../../constants/MockData";
import {Clear, Done} from "@mui/icons-material";
import {MonthsDataModel, TableOrder} from "../../models/MonthsDataModel";


const TableComponent: FunctionComponent= () => {

    const [page, setPage] = useState<number>(0);
    const [rowsPerPage, setRowsPerPage] = useState<number>(10);
    const [datas, setDatas] = useState(mockData)
    const [order, setOrder] = useState<TableOrder>('asc');
    const [orderBy, setOrderBy] = useState<keyof MonthsDataModel>('numberOfBirth');
    const [selected, setSelected] = React.useState<readonly string[]>([]);

    const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            const newSelected = datas.map((n) => n.monthName);
            setSelected(newSelected);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event: React.MouseEvent<unknown>, name: string) => {
        const selectedIndex = selected.indexOf(name);
        let newSelected: readonly string[] = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }

        setSelected(newSelected);
    };

    const isSelected = (name: string) => selected.indexOf(name) !== -1;


    const handleChangePage = (
        event: React.MouseEvent<HTMLButtonElement> | null,
        newPage: number,
    ) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };


    const filterData = (event: any) => {
        if (event.target.value === ""){
            setDatas(mockData)
        }
        else{
            setDatas(mockData.filter(element => element.monthName.toLowerCase().includes(event.target.value)))

        }
    }

    function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
        if (b[orderBy] < a[orderBy]) {
            return -1;
        }
        if (b[orderBy] > a[orderBy]) {
            return 1;
        }
        return 0;
    }

    function getComparator<Key extends keyof any>(
        order: TableOrder,
        orderBy: Key,
    ): (
        a: { [key in Key]: any },
        b: { [key in Key]: any },
    ) => number {
        return order === 'desc'
            ? (a, b) => descendingComparator(a, b, orderBy)
            : (a, b) => -descendingComparator(a, b, orderBy);
    }

    const createSortHandler =
        (property: keyof MonthsDataModel) => (event: React.MouseEvent<HTMLButtonElement>) => {
            handleRequestSort(event, property);
        };

    const handleRequestSort = (
        event: React.MouseEvent<HTMLButtonElement>,
        property: keyof MonthsDataModel,
    ) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    return(
        <Box display="flex" flexDirection="column" justifyContent="center" mb='2rem' alignItems="center">
            <Box mb='1rem' display="flex" justifyContent="center">
                <TextField label="Month Name" onChange={filterData}/>
            </Box>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell padding="checkbox">
                                <Checkbox
                                    color="primary"
                                    indeterminate={selected.length > 0 && selected.length < datas.length}
                                    checked={datas.length > 0 && selected.length === datas.length}
                                    onChange={handleSelectAllClick}
                                    inputProps={{
                                        'aria-label': 'select all desserts',
                                    }}
                                />
                            </TableCell>
                            {tableColumns.map((tableColumn) => (
                                <TableCell
                                    key={tableColumn.id}
                                    align="center"
                                    sortDirection={orderBy === tableColumn.id ? order : false}
                                >
                                    <TableSortLabel
                                        active={orderBy === tableColumn.id}
                                        direction={orderBy === tableColumn.id ? order : 'asc'}
                                        onClick={createSortHandler(tableColumn.id)}
                                    >
                                        {tableColumn.label}
                                    </TableSortLabel>
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {datas.sort(getComparator(order, orderBy)).slice().map((data, index) =>{
                            if ((rowsPerPage * page) <= index && index < (rowsPerPage * (page + 1))){
                                const isItemSelected = isSelected(data.monthName);
                                const labelId = `table-checkbox-${index}`;

                                return(
                                    <TableRow
                                        key={data.monthName}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        onClick={(event) => handleClick(event, data.monthName)}
                                    >
                                        <TableCell padding="checkbox">
                                            <Checkbox
                                                color="primary"
                                                checked={isItemSelected}
                                                inputProps={{
                                                    'aria-labelledby': labelId,
                                                }}
                                            />
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            {data.monthName}
                                        </TableCell>
                                        <TableCell align="center">{data.numberOfBirth}</TableCell>
                                        <TableCell align="center">{data.numberOfDeath}</TableCell>
                                        <TableCell align="center">{data.growth ? <Done/> : <Clear/>}</TableCell>
                                    </TableRow>
                                )
                            }
                            else{
                                return <></>
                            }
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <Box display="flex" justifyContent="center">
                <TablePagination
                    component="div"
                    count={mockData.length}
                    page={page}
                    onPageChange={handleChangePage}
                    rowsPerPage={rowsPerPage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    rowsPerPageOptions={[5,10,20,50]}
                />
            </Box>
        </Box>

    )
}


export default TableComponent;