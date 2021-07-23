import React from 'react';
import { NavBarMain } from '../NavBarMain/NavBarMain';
import { SubNav } from '../NavBarMain/SubNav/SubNav';
import { SearchResultSummary } from './SearchResultSummary/SearchResultSummary';

export function Search(){
    return(
        <div>
            <NavBarMain/>
            <SubNav/>
            <SearchResultSummary/>
        </div>
    );
}