import React from 'react';
import { VscSettings } from "react-icons/vsc";
import { IoIosArrowDown } from "react-icons/io";

export default function Products() {
    return (
        <div className='product-page'>
            <div className='product-filters'>
                <div className='filter-buttons'>
                    <button><VscSettings className='icon' />All Filters</button>
                    <button>Filter</button>
                    <button>Filter</button>
                    <button>Filter</button>
                    <button>Filter</button>
                    <button>Filter</button>
                    <button>Filter</button>
                </div>
                <div className='dropdown-container'>
                    <select className='filter-dropdown'>
                        <option>option 1</option>
                        <option>option 2</option>
                        <option>option 3</option>
                        <option>option 4</option>
                    </select>
                    <div className="dropdown-icon-container">
                        <IoIosArrowDown className='dropdown-icon' />
                    </div>
                </div>
            </div>
        </div>
    )
};