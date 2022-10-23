import React from 'react';
import { Link } from 'react-router-dom';

const CustId = (cell) => {
    return (
        <Link to="#" className="text-body fw-bold">{cell.value ? cell.value : ''}</Link>
    );
};

const UserName = (cell) => {
    return cell.value ? cell.value : '';
};

const PhoneEmail = (cell) => {
    return cell.value ? cell.value : '';
};

const Address = (cell) => {
    return cell.value ? cell.value : '';
};

const PartnersCount = (cell) => {
    return cell.value ? cell.value : '';
};

const WalletBalances = (cell) => {
    return cell.value ? cell.value : '';
};

const Category = (cell) => {
    return cell.value ? cell.value : '';
};

export {
    CustId,
    UserName,
    PhoneEmail,
    Address,
    PartnersCount,
    WalletBalances,
    Category,
};