import React, { Component } from 'react';

class FilterOptions extends Component {
    render() {
        return (
            <div>
                <label htmlFor="print-type">Print Type: </label>
                <select id="print-type">
                    <option value="All">All</option>
                    <option value="false">Print</option>
                    <option value="true">Ebook</option>
                </select>
            </div>
        );
    }
}

export default FilterOptions;